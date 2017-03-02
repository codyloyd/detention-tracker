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
      <div>
        <Header activePage='overview' title='Overview'/>
        <div className="App container">
          <DateCards 
            detentions={this.state.detentions}
          />
        </div>
        <footer className="footer">
          <div className="container">
            <div className="content has-text-centered">
              <strong>Detention Tracker</strong> by <a href="http://codyloyd.com">Cody Loyd</a>. The source code is licensed 
        <a href="http://opensource.org/licenses/mit-license.php"> MIT</a> and can be found <a href="https://github.com/codyloyd/detention-tracker">HERE</a>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
