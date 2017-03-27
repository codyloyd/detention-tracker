import React from 'react'
import DateCard from './DateCard'

const DateCards = ({detentions}) => {
  return Object.keys(detentions).length
    ? <div>
        {Object.keys(detentions).sort((a, b) => a > b).map(d => {
          return <DateCard key={d} detentions={detentions[d]} date={d} />
        })}
      </div>
    : <div className="section is-medium">
        <p className="title has-text-centered">
          there are no upcoming detentions
        </p>
      </div>
};

export default DateCards
