import React, { Component } from 'react';
import * as api from '../api'
import DateCards from './DateCards'

class App extends Component {
  constructor(){
    super()
    this.state = {
      detentions: []
    }
  }
  componentDidMount(){
    api.fetchDetentions({}).then(data => {
      const detentions = Object.values(data).reduce((obj, detention) => {
        if (!obj[detention.date]) obj[detention.date] = []
        obj[detention.date].push(detention)
        return obj
      }, {})
      this.setState({detentions})
    })
  }
  render() {
    return (
      <div className="App container">
        <h1 className='title is-1'>DETENTION TRACKAA</h1>
        <DateCards 
          detentions={this.state.detentions}/>
      </div>
    );
  }
}

export default App;
