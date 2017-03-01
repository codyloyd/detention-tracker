import React from 'react'
import App from './App'
import DateDetails from './DateDetails'
import {Router, Route, browserHistory} from 'react-router'

const Root = () => {
  return (
    <Router history={browserHistory}>
      <Route path='/' component={App} />
      <Route path='/details/(:date)' component={DateDetails} />
    </Router>
  )
}

export default Root