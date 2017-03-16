import React from 'react';
import DetentionTable from './DetentionTable';
import * as api from '../api';
import firebase from 'firebase';
import Header from './Header';
import Loading from './Loading';
import ConfirmationDialog from './ConfirmationDialog';
import {createConfirmation} from 'react-confirm';

const confirm = createConfirmation(ConfirmationDialog);

class DetentionDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      detentions: {},
      currentUser: null,
      loading: true
    };
  }

  componentDidMount() {
    this.fetchDetentions();
    this.unmount = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({currentUser: user});
      } else {
        this.setState({currentUser: null});
      }
    });
  }
  componentWillUnmount() {
    this.unmount();
  }
  deleteDetention = id => {
    confirm().then(
      result => {
        api.deleteDetention(id).then(this.fetchDetentions());
      },
      result => console.log
    );
  };
  setAttendance = id => {
    api.setAttendance(id).then(this.fetchDetentions());
  };
  fetchDetentions = () => {
    const date = this.props.params.date;
    api
      .fetchDetentions({startAt: date, endAt: date})
      .then(data => this.setState({detentions: data, loading: false}));
  };
  render() {
    return (
      <div>
        <Header
          title={'Details for ' + this.props.params.date}
          currentUser={this.state.currentUser}
        />
        <ConfirmationDialog show={false} />
        <div className="container">
          {this.state.loading
            ? <Loading />
            : <DetentionTable
                deleteDetention={this.deleteDetention}
                setAttendance={this.setAttendance}
                detentions={Object.values(this.state.detentions)}
              />}
        </div>
      </div>
    );
  }
}

export default DetentionDetails;
