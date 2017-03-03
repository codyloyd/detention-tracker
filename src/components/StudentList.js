import React from 'react'

const StudentList = ({students, highlight, centered}) => {
  return (
    <div className={centered ? 'has-text-centered' : '' }>
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