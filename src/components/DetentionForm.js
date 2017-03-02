import React from 'react'
import * as api from '../api'
import moment from 'moment'
import DatePicker from 'react-datepicker'

import '../../node_modules/react-datepicker/dist/react-datepicker.css'

class DetentionForm extends React.Component {
  constructor() {
    super()
    this.state = {
      student: '',
      assignment: '',
      notes: '',
      date: moment()
    }
  }
  handleChange = (e) => {
      let field = 'date'
      let value = e
      console.log(e)
    if (e.target) {
      field = e.target.name
      value = e.target.value
    }
    this.setState({[field]: value})
    console.log(this.state)
  }
  handleFormSubmit = () => {
    api.createDetention({...this.state, date: this.state.date.format('YYYY-MM-DD'), teacher: 'Loyd'})
  }
  render() {
    return (
      <form onSubmit={(e) => {
        e.preventDefault()
        this.handleFormSubmit()
      }}>
        <label className="label">Student Name</label>
        <p className="control">
          <input
            name="student" 
            onChange={this.handleChange}
            type="text" 
            className="input" 
            placeholder="first and last name please"/>
        </p>
        <label className="label">Missing Assignment</label>
        <p className="control">
          <input 
            name="assignment" 
            onChange={this.handleChange}
            type="text" 
            className="input"
            placeholder="assignment"/>
        </p>
        <label className="label">Date</label>
        <div className="control">
          <DatePicker 
            selected={this.state.date} 
            onChange={this.handleChange} 
            className='input' />
        </div>
        <label className="label">Notes</label>
        <p className="control">
          <textarea 
            type="textarea" 
            name="notes" 
            onChange={this.handleChange}
            className="textarea"
            placeholder="does student need computer access?"/>
        </p>
        <p className="control">
          <input type="submit" 
            className="button is-primary"
            value="assign detention"/>
        </p>
      </form>
    )
  }
}

export default DetentionForm