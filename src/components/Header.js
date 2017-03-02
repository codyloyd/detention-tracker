import React from 'react'
import {Link} from 'react-router'

const Header = ({title, activePage}) => (
  <section className="hero is-primary">
    <div className="hero-body">
      <div className="container has-text-centered">
        <p className="title is-1">Detention Tracker</p>
        <p className="subtitle">{title}</p>
      </div>
    </div>
    <div className="hero-foot">
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
              </Link></li>
          </ul>
        </div>
      </nav>
    </div>
  </section>
)

export default Header