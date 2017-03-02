import React from 'react'
import DetentionForm from './DetentionForm'
import Header from './Header'

const NewDetention = (props) => {
  return (
    <div>
      <Header title="Assign New Detention"/>
      <div className="container section">
        <DetentionForm />
      </div>
    </div>
  )
}

export default NewDetention