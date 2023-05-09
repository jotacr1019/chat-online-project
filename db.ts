const admin = require("firebase-admin");
const serviceAccount = require('./key.json')

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://cap3-mod6-apx-default-rtdb.firebaseio.com"
});


const firestore = admin.firestore();
const rtdb = admin.database()

export { firestore, rtdb }