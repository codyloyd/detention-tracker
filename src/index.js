import React from 'react';
import ReactDOM from 'react-dom';
// eslint-disable-next-line
import firebaseApp from './firebase'
import Root from './components/Root';
import './index.css';

// import * as api from './api'

// api.createDetention({
//   student: 'ISSSSSAC',
//   teacher: 'LOYD',
//   assignment: 'NONE',
//   date: new Date(2017, 1, 14).toISOString().substring(0,10)
// })

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);
