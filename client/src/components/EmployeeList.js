import React, { useState, useEffect } from 'react';
import axios from 'axios';

function EmployeeList() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/employees')
      .then(response => {
        setEmployees(response.data);
      })
      .catch(error => {
        console.error('Error fetching employees:', error);
      });
  }, []);

  return (
    <div>
      <h2>Employee List</h2>
      <ul>
        {employees.map(employee => (
          <li key={employee._id}>
            <strong>{employee.name}</strong> ({employee.position}) - {employee.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EmployeeList;
