import Firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// import { seedDatabase } from '../seed'

const config = {
    apiKey: "AIzaSyCkNjZxHuXyFfoPVYirynC0ZGv0atYJJRs",
    authDomain: "instagram-web-app-clone.firebaseapp.com",
    projectId: "instagram-web-app-clone",
    storageBucket: "instagram-web-app-clone.appspot.com",
    messagingSenderId: "621296979843",
    appId: "1:621296979843:web:04d835828cde8ac659f0b6"
}

const firebase = Firebase.initializeApp(config)
const { FieldValue } = Firebase.firestore

// seedDatabase(firebase)

export { firebase, FieldValue }