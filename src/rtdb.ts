const API_BASE_URL = 'http://localhost:8080'
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue, set } from "firebase/database"

const firebaseConfig = {
    apiKey: 'ODU5YdhqH0c9vwPmMyHhK46h1VuNuVgn7zG1GZZh',
    authDomain: 'cap3-mod6-apx.firebaseapp.com',
    databaseURL:'https://cap3-mod6-apx-default-rtdb.firebaseio.com',
    projectId: 'cap3-mod6-apx'
};

const app = initializeApp(firebaseConfig);

const rtdbFirebase = getDatabase();

export { rtdbFirebase }

// const chatReference = ref(db, '/chatRooms/1234')  //  '/chatRooms/1234' para ser específico

// // esto se usa para traer notificaciones de cambios del backend, y mas adelante 
// // conectarlo al state para que le informe a los components, o conectarlo a un solo 
// // component
// onValue(chatReference, (snapShot)=>{  
//     const data = snapShot.val()
//     // document.querySelector('.root').innerHTML = JSON.stringify(data)
//     console.log(data);
// })

// function conectToChatRoom(){
//     fetch(API_BASE_URL + '/api/chatRoom',{
//         method: 'post'
//     }).then((res=>{
//         return res.json()
//     })).then((Bigdata)=>{
//     const chatReference2 = ref(db, '/chatRooms/' + Bigdata.id)
//     onValue(chatReference2, (snapShot)=>{  
//         const data = snapShot.val()
//         // document.querySelector('.id').innerHTML = Bigdata.id
//         // document.querySelector('.root').innerHTML = JSON.stringify(data)
//         console.log(data);
//     })
//         // console.log(data);
//     })
// }

// (function(){
//     // const buttonEl = document.querySelector(".conectar")
//     // buttonEl.addEventListener("click", ()=>{
//     //     conectToChatRoom()
//     // })
// })()


//  ** to write data**
// ** hay que cambiar la confi en la db para poder escribir **
// function writeDataToDB(userId, name){
//     const db = getDatabase();
//     const chatReference = ref(db, '/chatRooms')

//     set(chatReference, {
//         userName: name,
//         userId: userId
//     })
// }

// writeDataToDB(456, 'Jose')