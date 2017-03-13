import React from 'react'
import DetentionForm from './DetentionForm'
import Header from './Header'
import firebase from 'firebase'
import SignIn from './SignIn'

class NewDetention extends React.Component {
  constructor () {
    super()
    this.unmount = null
    this.state = {
      currentUser: null
    }
  }
  componentDidMount () {
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
            title="Assign New Detention"
            currentUser={this.state.currentUser}
            activePage="new"
          />
          <div className="container section">
            <DetentionForm currentUser={this.state.currentUser} />
          </div>
        </div>
      )
    }
    return (
      <div>
        <Header activePage="new" />
        <div className="section">
          <p className="title">Must Sign In to Continue</p>
          <SignIn />
        </div>
      </div>
    )
  }
}

export default NewDetention
