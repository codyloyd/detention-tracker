import React from 'react'

const DetentionTable = ({detentions}) => {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Attendance</th>
            <th>Student</th>
            <th>Teacher</th>
            <th>Assignment</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {detentions.map(d => {
            return (
              <tr key={d.id}>
                <th>{d.attendance}</th>
                <th>{d.student}</th>
                <td>{d.teacher}</td>
                <td>{d.assignment}</td>
                <td>{d.notes}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default DetentionTable