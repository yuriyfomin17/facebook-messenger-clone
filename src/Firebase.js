import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAmXx9CAn81seMvCg-KZqs9bQd_7nk4NLw",
    authDomain: "facebook-messenger-clone-2ba70.firebaseapp.com",
    projectId: "facebook-messenger-clone-2ba70",
    storageBucket: "facebook-messenger-clone-2ba70.appspot.com",
    messagingSenderId: "126683452814",
    appId: "1:126683452814:web:865e84a21e97d4172140df",
    measurementId: "G-37W9J6R9ZN"

})

const db = firebase.firestore()

export default db