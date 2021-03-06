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
  return firebase.database().ref(`detentions/${id}`).set({
    id,
    student,
    assignment,
    teacher,
    date,
    notes,
    attendance: null
  })
}

export const deleteDetention = id => {
  return firebase.database().ref(`detentions/${id}`).set({})
}

export const fetchDetentions = ({startAt = '1', endAt = `3`}) => {
  return firebase
    .database()
    .ref(`detentions`)
    .orderByChild('date')
    .startAt(startAt)
    .endAt(endAt)
    .once('value')
    .then(data => {
      return data.val() || []
    })
}

export const fetchDetention = id => {
  return firebase
    .database()
    .ref(`detentions/${id}`)
    .once('value')
    .then(data => data.val() || {})
}

export const setAttendance = id => {
  const detention = firebase.database().ref(`detentions/${id}`)
  return detention.once('value').then(data => {
    detention.set({...data.val(), attendance: !data.val().attendance})
  })
}

export const fetchUsername = uid => {
  return firebase
    .database()
    .ref('users/' + uid)
    .once('value')
    .then(data => data.val().name)
}
