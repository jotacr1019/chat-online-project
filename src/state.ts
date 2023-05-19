import { getDatabase, ref, onValue, set } from "firebase/database"
import { rtdbFirebase } from "./rtdb"
import map from "lodash/map"
import * as dotenv from 'dotenv';
dotenv.config()


const API_BASE_URL = process.env.API_BASE_URL

const state = {
    data: {
        user: "",
        email: "",
        messages: [],
        roomId: "",
        longRoomId: "",
        userId: "",
    },

    listeners: [],

    getState(){
        return this.data;
    },

    listenToDatabase(){
    const currentState = this.getState()
    const chatReference = ref(rtdbFirebase, `/rooms/${currentState.longRoomId}/messages`)

    onValue(chatReference, (snapShot)=>{  
        const messagesFromServer = snapShot.val()
        const messagesList = map(messagesFromServer)
        currentState.messages = messagesList;
        this.setState(currentState);
        })
    },

    setState(newState){
        this.data = newState;
        for (const cb of this.listeners){
            cb();
        }
    },

    subscribe(callBack: (any)=>any){
        this.listeners.push(callBack);
    },

    setUser(user: string, email: string, cb?: Function){
        const currentState = this.getState();
        currentState.user = user;
        currentState.email = email;
        this.setState(currentState);
        cb()
    },

    setRoomId(roomId, cb?: Function){
        const currentState = this.getState();
        currentState.roomId = roomId;
        this.setState(currentState)
        cb()
    },

    authUser(cb){
        const currentState = this.getState()
        fetch(API_BASE_URL + '/api/auth', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                email: currentState.email,
                name: currentState.user
            })
        }).then((res)=>{
            return res.json()
        }).then((data)=>{
            currentState.userId = data.id;
            this.setState(currentState)
            cb()
        })
    },

    async createUserInDB(cb?: Function){
        try {
            const currentState = this.getState();
            const response = await fetch(API_BASE_URL + '/api/signup', {
                method: 'POST',
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({
                    email: this.data.email,
                    name: this.data.user
                })
            })
            const resp = await response.json()
            currentState.userId = resp.id;
            this.setState(currentState);
            cb()
        } catch (error) {
            console.error(error);
        }
    },

    async createRoom() {
        try {
            const currentState = this.getState();
            const res = await fetch(API_BASE_URL + '/api/rooms', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                userId: currentState.userId
                })
            });

            const data = await res.json();
            console.log(data);

            currentState.roomId = data.id;
            currentState.longRoomId = data.longId;
            this.setState(currentState);
            console.log(currentState);

            this.listenToDatabase();
        } catch (error) {
            console.error(error);
        }
    },

    getRoom(){
        const currentState = this.getState()
        fetch(API_BASE_URL + "/api/rooms/" + currentState.roomId + "?userId=" + currentState.userId, {
            method: 'GET',
        }).then((res)=>{
            return res.json()
        }).then((data)=>{
            currentState.longRoomId = data.rtdbRoomId
            this.setState(currentState)
            this.listenToDatabase()
        })
    },
    
    setMessage(message: string){
        const timestamp = Date.now();
        const date = new Date(timestamp);
        const normalDate = date.toLocaleString();
        // const finalHour = formatTime(normalDate);
        const finalHour = formatTime(normalDate);
        // console.log(finalHour);
        
        fetch(API_BASE_URL + "/api/messages", {
            method: "post",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                user: this.data.user,
                roomId: this.data.roomId,
                longId: this.data.longRoomId,
                message: {message: message, date: finalHour}
            })
        })
    },
}

export { state }


function formatTime(time) {
    console.log(time);
    
    const timestampParts = time.split(" ");
    const datePart = timestampParts[0];
    const timePart = timestampParts[1];
    console.log(timePart);
    if(timePart.includes("AM") || timePart.includes("PM")){
        console.log('NO hace tratamiento');
        return time;
    } else {
        console.log('hace tratamiento');
        const [hours, minutes, seconds] = timePart.split(':');
        const formattedHours = (parseInt(hours) % 12) || 12;
        const amPm = parseInt(hours) < 12 ? 'AM' : 'PM';
    
        const formattedTime = `${formattedHours}:${minutes}${amPm}`;
        return `${datePart}, ${formattedTime}`;
    }

  }