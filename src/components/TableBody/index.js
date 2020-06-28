import React from 'react';
import './style.css';

function TableBody(props) {
  return (
    <tbody>
      {props.employees.map(employee => (
        <tr key={employee.id}>
          <td>
            <img alt={employee.name} className="image-fluid" src={employee.image}/>
          </td>
          <td>{employee.name}</td>
          <td>{employee.occupation}</td>
          <td>{employee.department}</td>
        </tr>        
      ))}
    </tbody>
  )
}

export default TableBody;