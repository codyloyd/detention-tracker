import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase'
import './firebase'
import Root from './components/Root';
import './index.css';

// import * as api from './api'
const render = () => {
  ReactDOM.render(
    <Root />,
    document.getElementById('root')
  );
}

render()

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    render()
  } else {
  }
});

