import React from 'react'
import Header from './Header'
import * as auth from '../auth'

const SignIn = (props) => {
  const user = auth.currentUser()
  if (user) {
    console.log(user.uid)
  }
  let email, password
  return (
    <div>
      <Header title="Sign In" activePage='signIn'/>
      <div className="container section">
      <div className="column is-5">
        <input 
          type="email" 
          className="input" 
          name="email"
          ref={(input) => email = input}
          />
        <input 
          type="password" 
          className="input" 
          name="password"
          ref={(input) => password = input}
          />
        <button 
          className='button'
          onClick={() => {
            auth.signIn({email: email.value, password: password.value})
          }}
        >SIGN IN</button>
        <button 
          className='button'
          onClick={() => {
            auth.signOut()
          }}
        >SIGN OUT</button>
      </div>
      </div>
    </div>
  )
}

export default SignIn