import React from 'react'

const StudentList = ({students}) => {
  return (
    <div className="content">
      <ul>
        {students.map(student => {
          return (
            <li>{student}</li>
          )
        })}
      </ul>
    </div>
  )
}

export default StudentList