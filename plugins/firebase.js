import firebase from 'firebase/app'
import 'firebase/firestore'
if (!firebase.apps.length) {

    const firebaseConfig = {
        apiKey: "AIzaSyDVyhWPoVsy0xDZg7QVafg5SC7XTvuFtl0",
        authDomain: "opc-group-862cc.firebaseapp.com",
        databaseURL: "https://opc-group-862cc-default-rtdb.europe-west1.firebasedatabase.app",
        projectId: "opc-group-862cc",
        storageBucket: "opc-group-862cc.appspot.com",
        messagingSenderId: "1064926181809",
        appId: "1:1064926181809:web:ec0ddabc619dbd24652590",
        measurementId: "G-W9LPE8JQTW"
    };

    firebase.initializeApp(firebaseConfig)
}
const fireDb = firebase.firestore()

const leads = fireDb.collection('leads')

export {
    fireDb,
    leads
}