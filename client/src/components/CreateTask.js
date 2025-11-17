import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CreateTask() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('To Do');
  const [selectedEmployee, setSelectedEmployee] = useState('');

  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/employees')
      .then(response => {
        setEmployees(response.data);
        if (response.data.length > 0) {
          setSelectedEmployee(response.data[0]._id);
        }
      })
      .catch(error => {
        console.error('Error fetching employees:', error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      title: title,
      description: description,
      status: status,
      employeeId: selectedEmployee
    };

    axios.post('http://localhost:5000/api/tasks', newTask)
      .then(response => {
        console.log('Task created:', response.data);
        setTitle('');
        setDescription('');
        setStatus('To Do');
        window.location.reload();
      })
      .catch(error => {
        console.error('Error creating task:', error);
      });
  };

  return (
    <div>
      <h2>Create New Task</h2>
      <form onSubmit={handleSubmit}>
        {}
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        
        {}
        <div>
          <label>Description:</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        {}
        <div>
          <label>Status:</label>
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="To Do">To Do</option>
            <option value="In Progress">In Progress</option>
            <option value="Done">Done</option>
          </select>
        </div>

        {}
        <div>
          <label>Assign to:</label>
          <select value={selectedEmployee} onChange={(e) => setSelectedEmployee(e.target.value)} required>
            {employees.map(employee => (
              <option key={employee._id} value={employee._id}>
                {employee.name}
              </option>
            ))}
          </select>
        </div>

        <button type="submit">Create Task</button>
      </form>
    </div>
  );
}

export default CreateTask;
