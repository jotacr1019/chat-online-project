const API_BASE_URL = 'http://localhost:10000'
import { getDatabase, ref, onValue, set } from "firebase/database"
import { rtdbFirebase } from "./rtdb"
import map from "lodash/map"

type Message = {
    user: string,
    messaje: string
}

const state = {
    data: {
        user: "",
        email: "",
        messages: [],
        roomId: "",
        longRoomId: "",
        userId: ""
    },
    // data: {
    //     chats: {
    //         chatRoomId: {
    //             userId: "",
    //             lastMessage: ""
    //         },
    //         chatroom2:{}
    //     },
    //     users: {
    //         chatId: {
    //             userX: true
    //         }
    //     },
    //     messages:{
    //         chatId: {
    //             m1:{
    //                 userId: "",
    //                 message: ""
    //             },
    //             m2: {},
    //             m3: {}
    //         },
    //         chatroom2: {}
    //     }
    // },

    listeners: [],

    getState(){
        return this.data;
    },

    init(){
    const currentState = this.getState()
    console.log('soy init()', currentState);
    const chatReference = ref(rtdbFirebase, `/rooms/${currentState.longRoomId}/messages`)
    // console.log(chatReference);
    onValue(chatReference, (snapShot)=>{  
        const messagesFromServer = snapShot.val()
        // console.log(messagesFromServer);
        const messagesList = map(messagesFromServer)
        currentState.messages = messagesList;
        // console.log(messagesList);
        this.setState(currentState);
        console.log('soy init() al final',currentState);
        })
    },

    setState(newState){
        this.data = newState;
        // console.log('soy setState:');
        console.log('soy setState',state.getState());
        
        for (const cb of this.listeners){
            cb();
            // this.listeners = [];
        }
        // localStorage.setItem("saved-game", JSON.stringify(newState));
    },

    subscribe(callBack: (any)=>any){
        this.listeners.push(callBack);
    },

    setUser(user: string, email: string){
        const currentState = this.getState();
        currentState.user = user;
        currentState.email = email;
        this.setState(currentState);
        // console.log('setState: ', currentState);
        // this.createUserInDB()
    },

    setRoomId(roomId){
        const currentState = this.getState;
        currentState.roomId = roomId;
        this.setState(currentState)
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

    async createUserInDB(cb){
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
        // this.createRoom(resp.id)
        currentState.userId = resp.id;
        this.setState(currentState);
        cb()
        // console.log('createUser: ', currentState);
    },

    createRoom(){
        const currentState = this.getState()
        // console.log(currentState);
        fetch(API_BASE_URL + '/api/rooms', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                userId: currentState.userId
            })
        }).then((res)=>{
            return res.json()
        }).then((data)=>{
            console.log(data);
            // const currentState = this.getState();
            currentState.roomId = data.id;
            currentState.longRoomId = data.longId;
            this.setState(currentState);
            console.log(currentState);
            this.init()
        })
    },

    getRoom(){
        const currentState = this.getState()
        // console.log(currentState);
        fetch(API_BASE_URL + "/api/rooms/" + currentState.roomId + "?userId=" + currentState.userId, {
            method: 'GET',
        }).then((res)=>{
            return res.json()
        }).then((data)=>{
            // console.log(data);
            currentState.longRoomId = data.rtdbRoomId
            this.setState(currentState)
            this.init()
        })
    },
    
    setMessage(message: string){     // lo unico que hace es mandarle al backend el msj
        // console.log('soy setMessage:', message);
        // const currentState = this.getState();
        // currentState.messages.push(message);
        // this.setState(currentState);
        fetch(API_BASE_URL + "/api/messages", {    // nuevo, el bkend lo va a guardar en bdrt
            method: "post",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                user: this.data.user,
                longId: this.data.longRoomId,
                message: message
            })
        })
    },

    // deleteMessage(id){
    //     fetch(API_BASE_URL + '/api/messages/' + id, {
    //         method: 'delete',
    //         headers: {
    //             "content-type": "application/json"
    //         },
    //         body : JSON.stringify({
    //             id: id
    //         })
    //     })
    // }
}
    // initOfHistory(){
    //     const dataOfHistory: any = localStorage.getItem("saved-game");  //db??
    //     if(dataOfHistory !== null){
    //         this.setState(JSON.parse(dataOfHistory))
    //     }   
    // },

    // pushToHistory(game){   // pushToDb????
    //     const currentState = this.getState();
    //     currentState.history.push(game);
    //     this.setState(currentState);
    // },


export { state }