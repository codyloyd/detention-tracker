import React from 'react'
import App from './App'
import DateDetails from './DateDetails'
import NewDetention from './NewDetention'
import SignIn from './SignIn'
import {Router, Route, browserHistory} from 'react-router'

const Root = ({currentUser}) => {
  return (
    <Router history={browserHistory}>
      <Route path='/' component={App} />
      <Route path='/details/(:date)' component={DateDetails} />
      <Route path='/new' component={NewDetention}/>
      <Route path='/signIn' component={SignIn}/>
    </Router>
  )
}

export default Root