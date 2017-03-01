import React from 'react'
import DetentionTable from './DetentionTable'
import * as api from '../api'

class DetentionDetails extends React.Component {
  constructor() {
    super()
    this.state = {detentions: {}}
  }
  componentDidMount() {
    const date = this.props.params.date
    api.fetchDetentions({startAt:date, endAt:date}).then(data =>
      this.setState({detentions: data})
    )
  }
  render(){
    console.log(this.state.detentions)
    return (
      <div className="container">
        <h1 className="title is-1">DETAILS for {this.props.params.date}</h1>
        <DetentionTable detentions={Object.values(this.state.detentions)}/>
      </div>
    )
  }
}

export default DetentionDetails