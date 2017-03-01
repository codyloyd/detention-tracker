import React from 'react'
import {Link} from 'react-router'

const DateCard = ({detentions, date}) => {
  return (
    <div className="section">
      <div className="columns">
        <div className="column is-10 is-offset-1">
          <div className="card">
          <header className="card-header">
            <title className="card-header-title">
              Detentions for {date}
            </title>
          </header>
          <div className="card-content has-text-centered">
            <p className="subtitle">Students:</p>
            <ul>
              {detentions.map(d => {
                return <li key={d.id}>{d.student} - {d.teacher}</li>
              })}
            </ul>
          </div>
          <footer className="card-footer">
            <Link to={`/details/${date}`} className='card-footer-item'>Go To Details</Link>
          </footer>
        </div>
      </div>
      </div>
    </div>
  )
}

export default DateCard