import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const firebase = require("firebase")
const config = {
  apiKey: 'AIzaSyBG50FDcDb07OA7ti6mdAcbbotW6eoSW-k',
  authDomain: 'bbfl-8301a.firebaseapp.com',
  databaseURL: 'https://bbfl-8301a.firebaseio.com',
  storageBucket: 'bbfl-8301a.appspot.com',
}
if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

const database = firebase.database()


class App extends Component {
  getFirebase = ( key ) => {
    const listItem = []
    const firebaseRef = database.ref(key)
    firebaseRef.on('value', (snap) => {
      snap.forEach((childSnapshot) => {
        const childData = childSnapshot.val()
        listItem.push({ key: childSnapshot.key, data: childData })
      })
    })
    return listItem
  }
  render() {
    const dataFirebase = this.getFirebase('address')
    console.log(dataFirebase)
    return (
      <div className = "bingo-box">
        <h1>bingo</h1>
      </div>
    );
  }
}

export default App;
