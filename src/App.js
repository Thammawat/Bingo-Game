import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap'
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
  getFirebase = (key) => {
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
      <div>
        <Grid>
          <Row>
            <Col xs={10} xsOffset={2}>
              <Row>
                <Col xs={2}>
                  <div className="bingo-box">
                    <p>15</p>
                  </div>
                </Col>
                <Col xs={2}>
                  <div className="bingo-box-blank">
                  <p>9</p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
