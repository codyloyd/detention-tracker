import React from 'react'
import * as api from '../api'
import {browserHistory} from 'react-router'
import moment from 'moment'
import DatePicker from 'react-datepicker'
import StudentList from './StudentList'

import '../../node_modules/react-datepicker/dist/react-datepicker.css'

class DetentionForm extends React.Component {
  constructor() {
    super()
    this.state = {
      student: '',
      assignment: '',
      notes: '',
      date: moment(),
      studentsServing: []
    }
    this.fetchStudentsServing(this.state.date)
  }
  fetchStudentsServing = (date) => {
    const formattedDate = date.format('YYYY-MM-DD')
    api.fetchDetentions({
      startAt: formattedDate, 
      endAt: formattedDate
    }).then(data => {
      const studentsServing = Object.values(data).map(d => d.student)
      this.setState({studentsServing})
    })
  }
  handleChange = (e) => {
    let field = 'date'
    let value = e
    if (e.target) {
      field = e.target.name
      value = e.target.value
    }
    if (field === 'date') this.fetchStudentsServing(value)
    this.setState({[field]: value})
  }
  handleFormSubmit = () => {
    const date = this.state.date.format('YYYY-MM-DD')
    api.createDetention({
      ...this.state, 
      date,
      teacher: 'Loyd'
    }).then(() => browserHistory.push(`/details/${date}`))
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
          <p className="heading">Students serving on this date:</p>
          <StudentList students={this.state.studentsServing}/>
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