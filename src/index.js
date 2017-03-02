import React from 'react';
import ReactDOM from 'react-dom';
// eslint-disable-next-line
import firebaseApp from './firebase'
import Root from './components/Root';
import './index.css';

// import * as api from './api'

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);
