import React from 'react'
import Nav from './Nav'

const Header = ({title, activePage, currentUser}) => (
  <section className="hero is-primary">
    <div className="hero-body">
      <div className="container has-text-centered">
        <p className="title is-1">Detention Tracker</p>
        <p className="subtitle">{title}</p>
        <p className="subtitle">{currentUser ? '' : 'test@test.com - password: "testing"'}</p>
      </div>
    </div>
    <div className="hero-foot">
      <Nav activePage={activePage} currentUser={currentUser}/>
    </div>
  </section>
)

export default Header