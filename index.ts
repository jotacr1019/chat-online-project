import { firestore, rtdb } from "./db"
import { v4 as uuidv4 } from 'uuid';
import * as path from 'path';  
import * as express from 'express';
import * as dotenv from 'dotenv';
dotenv.config()


let bodyParser = require('body-parser') 
let cors = require('cors')    
let myApp = express()

myApp.use(bodyParser.urlencoded({ extended: true }))
myApp.use(bodyParser.json())
myApp.use(cors())

let port = process.env.PORT || 9090

const userCollection = firestore.collection("users"); 
const roomsCollection = firestore.collection("rooms")

// signup

myApp.post('/signup', function(req,res){
    const {email, name} = req.body;
    userCollection.where('email','==',email).get().then((response)=>{
        if (response.empty){
            userCollection.add({
                email: email,
                name: name
            }).then((newUserRef)=>{
                res.json({
                    id: newUserRef.id
                })
            });
        } else {
            res.status(400).json({
                message: "Email already exists"
            })
        }
    })
})

// auth

myApp.post("/auth", function(req,res){
    const {email, name} = req.body;
    userCollection.where('email','==',email).get().then((response)=>{
        if (response.empty){
            userCollection.add({
                email: email,
                name: name
            }).then((newUserRef)=>{
                res.json({
                    id: newUserRef.id
                })
            });
        } else {
            res.json({
                id: response.docs[0].id
            }) 
        }
    })
})

// create room

myApp.post("/rooms", function(req,res){
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

myApp.get("/rooms/:roomId", function(req,res){
    const {userId} = req.query;
    const {roomId} = req.params;
    userCollection.doc(userId.toString()).get().then((doc)=>{
        if(doc.exists){
            roomsCollection.doc(roomId).get().then((snap)=>{
                const data = snap.data()
                res.json(data)
            })
        } else {
            res.status(401).json({
                message: 'You need an user to GET a Room'
            })
        }
    })
})

// send message

myApp.post('/messages', function(req,res){
    const chatRoomsRef = rtdb.ref(`/rooms/${req.body.longId}/messages`)
    chatRoomsRef.push({
        message: req.body.message,
        user: req.body.user,
        roomId: req.body.roomId,
    }, function(){
        res.json("Message sent successfully")
    })
})

myApp.use(express.static('dist'))
myApp.get("*", (req,res)=>{
	res.sendFile(path.join(__dirname, "dist/index.html"));
})

myApp.listen(port)
console.log('API escuchando en el puerto ' + port)