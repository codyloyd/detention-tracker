import firebase from 'firebase'

export const signIn = ({email, password}) => {
  firebase.auth().signInWithEmailAndPassword(email, password).catch(error => {
    const errorCode = error.code
    const errorMessage = error.message
    console.log({errorCode, errorMessage})
  })
}

export const signOut = () => {
  firebase.auth().signOut().then(function() {
    console.log('signedout')
    // Sign-out successful.
  }, function(error) {
    // An error happened.
  })
}

export const currentUser = () => firebase.auth().currentUser