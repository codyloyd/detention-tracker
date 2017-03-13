import React from 'react'
import DateCard from './DateCard'

const DateCards = ({detentions}) => {
  return (
    <div>
      {Object.keys(detentions).sort((a, b) => a > b).map(d => {
        return <DateCard key={d} detentions={detentions[d]} date={d} />
      })}
    </div>
  )
}

export default DateCards
