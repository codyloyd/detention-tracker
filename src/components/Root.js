import React from 'react'
import App from './App'
import DateDetails from './DateDetails'
import NewDetention from './NewDetention'
import {Router, Route, browserHistory} from 'react-router'

const Root = ({currentUser}) => {
  return (
    <Router history={browserHistory}>
      <Route path='/' component={App} />
      <Route path='/details/(:date)' component={DateDetails} />
      <Route path='/new' component={NewDetention}/>
    </Router>
  )
}

export default Root