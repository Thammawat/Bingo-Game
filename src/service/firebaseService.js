import { database } from '../firebaseClient'

export function getFirebase(key) {
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


export function createFirebase(key, data) {
  database.ref(key).push(data)
}

export function updateFirebase(key, keyID, data) {
  database.ref(`${key}/${keyID}`).update(data)
}

export function removeFromFirebase(key, keyID) {
  database.ref(`${key}/${keyID}`).remove()
}
