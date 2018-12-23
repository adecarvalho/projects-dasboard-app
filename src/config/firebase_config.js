import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
const config = {
	apiKey: 'AIzaSyA0qRYoxSIV35O4RDR-U9Xy3cSp-qIxS_Y',
	authDomain: 'projects-dasboard-app.firebaseapp.com',
	databaseURL: 'https://projects-dasboard-app.firebaseio.com',
	projectId: 'projects-dasboard-app',
	storageBucket: 'projects-dasboard-app.appspot.com',
	messagingSenderId: '858547302721'
}
firebase.initializeApp(config)

const db = firebase.firestore()

export const firebaseAuth = firebase.auth()

export const provider = new firebase.auth.GoogleAuthProvider()

export const serverStamp = firebase.firestore.FieldValue

// Disable deprecated features
db.settings({
	timestampsInSnapshots: true
})

export default db
