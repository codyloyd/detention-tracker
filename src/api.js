import firebase from 'firebase'
import cuid from 'cuid'

export const createDetention = (
  {
    student = 'STUDENT',
    assignment = '',
    teacher = '',
    date = '',
    notes = '',
    id = cuid()
  }
  ) => {
  firebase.database().ref(`detentions/${id}`).set({
    id,
    student,
    assignment,
    teacher,
    date,
    notes,
    attendance: null
  })
}

export const fetchDetentions = ({startAt = '1', endAt = `3`}) => {
  return firebase.database().ref(`detentions`)
    .orderByChild('date')
    .startAt(startAt)
    .endAt(endAt)
    .once('value')
    .then(data => data.val())
}

export const fetchDetention = (id) => {
  return firebase.database().ref(`detentions/${id}`)
    .once('value')
    .then(data => data.val())
}