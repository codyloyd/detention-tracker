import React from 'react'
import {Link} from 'react-router'
import * as auth from '../auth'

export default ({activePage, currentUser}) => {
  if (currentUser) {
    return (
      <nav className="tabs is-centered is-boxed">
        <div className="container">
          <ul>
            <li className={activePage === 'overview' ? 'is-active' : ''}>
              <Link to="/">
                Overview
              </Link></li>
            <li className={activePage === 'new' ? 'is-active' : ''}>
              <Link to="/new">
                Assign New Detention
              </Link>
            </li>
            <li className={activePage === 'signIn' ? 'is-active' : ''}>
              <a onClick={() => auth.signOut()}>
                Sign Out
              </a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
  return <div></div>
}