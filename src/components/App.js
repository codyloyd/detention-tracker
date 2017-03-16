import React, {Component} from 'react'
import * as api from '../api'
import DateCards from './DateCards'
import Header from './Header'
import Footer from './Footer'
import firebase from 'firebase'
import SignIn from './SignIn'
import Loading from './Loading'
// import moment from 'moment'

class App extends Component {
  constructor () {
    super()
    this.state = {
      detentions: [],
      currentUser: null,
      loading: true
    }
    this.unmount = null
  }
  componentDidMount () {
    // const today = moment().format('YYYY-MM-DD');
    const today = '2017'
    api.fetchDetentions({startAt: today}).then(data => {
      const detentions = Object.values(data).reduce(
        (obj, detention) => {
          if (!obj[detention.date]) obj[detention.date] = []
          obj[detention.date].push(detention)
          return obj
        },
        {}
      )
      this.setState({detentions, loading: false})
    })
    this.unmount = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({currentUser: user})
      } else {
        this.setState({currentUser: null})
      }
    })
  }
  componentWillUnmount () {
    this.unmount()
  }
  render () {
    if (this.state.currentUser) {
      return (
        <div>
          <Header
            activePage="overview"
            title="Overview"
            currentUser={this.state.currentUser}
          />
          <div className="App container">
            {this.state.loading
              ? <Loading />
              : <DateCards detentions={this.state.detentions} />}
          </div>
          <Footer />
        </div>
      )
    }
    return (
      <div>
        <Header activePage="overview" title="" />
        <div className="section">
          <p className="title">Must Sign in to Continue</p>
          <SignIn />
        </div>
        <Footer />
      </div>
    )
  }
}

export default App
