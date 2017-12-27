import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyBG50FDcDb07OA7ti6mdAcbbotW6eoSW-k',
  authDomain: 'bbfl-8301a.firebaseapp.com',
  databaseURL: 'https://bbfl-8301a.firebaseio.com',
  storageBucket: 'bbfl-8301a.appspot.com',
}
if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

export const database = firebase.database()
export const ref = firebase.database().ref()
export const auth = firebase.auth
export const provider = new firebase.auth.FacebookAuthProvider()