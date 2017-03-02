import React from 'react'

const DetentionTable = ({detentions, deleteDetention, setAttendance}) => {
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
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {detentions.map(d => {
            return (
              <tr key={d.id}>
                <th>
                  <p onClick={() => setAttendance(d.id)}
                      className={
                        'button ' + (d.attendance ? 
                          'is-primary' : 
                          'is-danger')
                        }>
                    {d.attendance ? 'HERE' : 'GONE'}
                  </p>
                </th>
                <th>{d.student}</th>
                <td>{d.teacher}</td>
                <td>{d.assignment}</td>
                <td>{d.notes}</td>
                <td>
                  <p onClick={() => deleteDetention(d.id)}
                      className="button is-danger">
                    <i className="fa fa-trash" aria-hidden="true"></i>
                  </p>
                  </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default DetentionTable