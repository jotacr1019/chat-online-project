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