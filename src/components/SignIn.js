import React from 'react'
import * as auth from '../auth'

const SignIn = (props) => {
  let email, password
  return (
    <div>
      <div className="column is-5">
      <form
        onSubmit={(e) => {
          e.preventDefault()
          auth.signIn({email: email.value, password: password.value})
        }}
      >
        <label className="label">email:</label>
        <div className="control">
          <input 
            type="email" 
            className="input" 
            name="email"
            placeholder="your school email address"
            ref={(input) => email = input}
            />
        </div>
        <label className="label">password:</label>
        <div className="control">
          <input 
            type="password" 
            className="input" 
            name="password"
            placeholder="password"
            ref={(input) => password = input}
            />
        </div>
        <div className="control">
          <input 
            type="submit"
            className='button'
            value='Sign In'
          />
        </div>
      </form>
      </div>
    </div>
  )
}

export default SignIn