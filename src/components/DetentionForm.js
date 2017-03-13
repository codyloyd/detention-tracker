import React from 'react';
import * as api from '../api';
import {browserHistory} from 'react-router';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import StudentList from './StudentList';

import '../../node_modules/react-datepicker/dist/react-datepicker.css';

class DetentionForm extends React.Component {
  constructor() {
    super();
    this.state = {
      student: '',
      assignment: '',
      notes: '',
      date: moment().add(1, 'days'),
      teacher: '',
      studentsServing: []
    };
  }
  componentDidMount() {
    this.fetchStudentsServing(this.state.date);
    this.fetchUserName(this.props.currentUser.uid);
  }
  fetchUserName = uid => {
    api.fetchUsername(uid).then(name => {
      this.setState({teacher: name});
    });
  };
  fetchStudentsServing = date => {
    const formattedDate = date.format('YYYY-MM-DD');
    api
      .fetchDetentions({
        startAt: formattedDate,
        endAt: formattedDate
      })
      .then(data => {
        const studentsServing = Object.values(data).map(d => d.student);
        this.setState({studentsServing});
      });
  };
  handleChange = e => {
    let field = 'date';
    let value = e;
    if (e.target) {
      field = e.target.name;
      value = e.target.value;
    }
    if (field === 'date') this.fetchStudentsServing(value);
    this.setState({[field]: value});
  };
  handleFormSubmit = () => {
    const date = this.state.date.format('YYYY-MM-DD');
    api
      .createDetention({
        ...this.state,
        date
      })
      .then(() => browserHistory.push(`/details/${date}`));
  };
  render() {
    return (
      <div className="columns">
        <div className="column">
          <form
            onSubmit={e => {
              e.preventDefault();
              this.handleFormSubmit();
            }}
          >
            <label className="label">Date of Detention</label>
            <div className="control">
              <DatePicker
                selected={this.state.date}
                onChange={this.handleChange}
                className="input"
              />
            </div>
            <div className="is-hidden-tablet">
              <p className="heading">Students serving on this date:</p>
              <StudentList
                students={this.state.studentsServing}
                highlight={this.state.student}
                centered={false}
              />
            </div>
            <label className="label">Student Name</label>
            <p className="control">
              <input
                name="student"
                onChange={this.handleChange}
                type="text"
                className="input"
                placeholder="first and last name please"
              />
            </p>
            <label className="label">Missing Assignment</label>
            <p className="control">
              <input
                name="assignment"
                onChange={this.handleChange}
                type="text"
                className="input"
                placeholder="assignment"
              />
            </p>
            <label className="label">Notes</label>
            <p className="control">
              <textarea
                type="textarea"
                name="notes"
                onChange={this.handleChange}
                className="textarea"
                placeholder="does student need computer access?"
              />
            </p>
            <p className="control">
              <input
                type="submit"
                className="button is-primary"
                value="assign detention"
              />
            </p>
          </form>
        </div>
        <div className="column is-narrow is-hidden-mobile">
          <p className="heading has-text-centered">
            Students serving on this date:
          </p>
          <StudentList
            students={this.state.studentsServing}
            centered={true}
            highlight={this.state.student}
          />
        </div>
      </div>
    );
  }
}

export default DetentionForm;
