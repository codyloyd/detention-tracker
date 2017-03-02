import React, { Component } from 'react';
import * as api from '../api'
import DateCards from './DateCards'
import Header from './Header'
class App extends Component {
  constructor(){
    super()
    this.state = {
      detentions: []
    }
  }
  componentDidMount(){
    api.fetchDetentions({startAt: '2017-02', endAt:'2017-03'}).then(data => {
      const detentions = Object.values(data).reduce((obj, detention) => {
        if (!obj[detention.date]) obj[detention.date] = []
        obj[detention.date].push(detention)
        return obj
      }, {})
      this.setState({detentions})
    })
  }
  render() {
    console.log(this.state)
    return (
      <div>
        <Header />
        <div className="App container">
          <DateCards 
            detentions={this.state.detentions}/>
        </div>
      </div>
    );
  }
}

export default App;
