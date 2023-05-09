import { json, response } from "express"
import { firestore, rtdb } from "./db"
// import { getDatabase, ref, onValue, set } from "firebase-admin/database"
// import { nanoid } from 'nanoid'  
import { v4 as uuidv4 } from 'uuid';           
import { state } from "./src/state"
const express = require('express')
import * as dotenv from 'dotenv';
dotenv.config()
let myApp = express()
let router = express.Router()
let cors = require('cors')    
let bodyParser = require('body-parser') 

myApp.use(bodyParser.urlencoded({ extended: true }))
myApp.use(bodyParser.json())
myApp.use(cors())   
// myApp.use(express.static('dist'))

let port = process.env.PORT || 10000 
const userCollection = firestore.collection("users"); 
const roomsCollection = firestore.collection("rooms")

console.log(process.env.ENVIRONMENT);


// signup

router.post('/signup', function(req,res){
    const email = req.body.email;
    const name = req.body.name;
    userCollection.where('email','==',email).get().then((response)=>{
        if (response.empty){
            userCollection.add({
                email: email,
                name: name
            }).then((newUserRef)=>{
                res.json({
                    id: newUserRef.id
                    // new: true
                })
            });
        } else {
            // res.json({
            //     id: response.docs[0].id
            // })
            res.status(400).json({
                message: "User already exists"
            })
        }
    })
})


// auth

router.post("/auth", function(req,res){
    const {email, name} = req.body;
    userCollection.where('email','==',email).get().then((response)=>{
        if (response.empty){
            // res.status(404).json({
            //     message: "User not found"
            // })
            userCollection.add({
                email: email,
                name: name
            }).then((newUserRef)=>{
                res.json({
                    id: newUserRef.id
                    // new: true
                })
            });
        } else {
            res.json({
                id: response.docs[0].id
            }) 
        }
    })
})

// endpoints en PLURAL siempre!!!!
// create room

router.post("/rooms", function(req,res){
    const {userId} = req.body;
    userCollection.doc(userId.toString()).get().then((doc)=>{
        if(doc.exists){
            const roomRef = rtdb.ref('rooms/' + uuidv4());
            roomRef.set({
                owner: userId,
                messages:[]
            }).then(()=>{
                const longRoomId = roomRef.key;
                const shortId = 1000 + (Math.floor(Math.random() * 999))
                roomsCollection.doc(shortId.toString()).set({
                    rtdbRoomId: longRoomId
                }).then(()=>{
                    res.json({
                        id: shortId,
                        longId: longRoomId
                    })
                })
            })
        } else {
            res.status(401).json({
                message: 'You need an user to create a Room'
            })
        }
    })
})

// get room

router.get("/rooms/:roomId", function(req,res){
    const {userId} = req.query;
    const {roomId} = req.params;
    userCollection.doc(userId.toString()).get().then((doc)=>{
        if(doc.exists){
            roomsCollection.doc(roomId).get().then((snap)=>{
                const data = snap.data()
                res.json(data)
                // console.log(res.json(data));
            })
        } else {
            res.status(401).json({
                message: 'You need an user to GET a Room'
            })
        }
    })
})

router.post('/messages', function(req,res){
    const chatRoomsRef = rtdb.ref(`/rooms/${req.body.longId}/messages`)
    console.log(req.body);
    chatRoomsRef.push(req.body, function(){
        res.json("Prueba completada")
    })
})

router.get('*', (req,res)=>{
    res.sendFile(__dirname + '/dist/index.html')
})

myApp.use('/api', router)
myApp.use(express.static('dist'))


myApp.listen(port)
console.log('API escuchando en el puerto ' + port)