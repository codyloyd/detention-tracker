import React from 'react'

const Header = ({title}) => (
  <section className="hero is-primary">
    <div className="hero-body">
      <div className="container has-text-centered">
        <p className="title is-1">Detention Tracker</p>
        <p className="subtitle">{title}</p>
      </div>
    </div>
  </section>
)

export default Header