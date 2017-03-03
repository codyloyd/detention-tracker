import React from 'react'

const StudentList = ({students, highlight}) => {
  return (
    <div className="content">
      <ul>
        {students.map(student => {
          return (
            <li
              key={student} 
              style={
                student === highlight ? 
                  {'color': 'red', 'fontWeight': 'bold'} : 
                  {}
                }
            >{student}</li>
          )
        })}
      </ul>
    </div>
  )
}

export default StudentList