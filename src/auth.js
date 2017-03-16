import firebase from 'firebase'

export const signIn = ({email, password}) => {
  return firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch(error => {
      const errorCode = error.code
      const errorMessage = error.message
      return Promise.reject({errorCode, errorMessage})
    })
};

export const signOut = () => {
  firebase.auth().signOut().then(
    function () {
      console.log('signedout')
    },
    function (error) {
      console.log(error)
    }
  )
};

export const currentUser = () => firebase.auth().currentUser
