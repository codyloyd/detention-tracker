import firebase from 'firebase'

var config = {
  apiKey: 'AIzaSyCYIh2IbtpYOx9uFqQA2F37pkPjzmQQUvY',
  authDomain: 'detention-tracker.firebaseapp.com',
  databaseURL: 'https://detention-tracker.firebaseio.com',
  storageBucket: 'detention-tracker.appspot.com',
  messagingSenderId: '161422961774'
}

export default firebase.initializeApp(config)
