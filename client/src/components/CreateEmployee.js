import React, { useState } from 'react';
import axios from 'axios';

function CreateEmployee() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [position, setPosition] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEmployee = {
      name: name,
      email: email,
      position: position,
    };

    axios.post('http://localhost:5000/api/employees', newEmployee)
      .then(response => {
        console.log('Employee created:', response.data);
        setName('');
        setEmail('');
        setPosition('');
        window.location.reload(); 
      })
      .catch(error => {
        console.error('Error creating employee:', error);
      });
  };

  return (
    <div>
      <h2>Create New Employee</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Position:</label>
          <input
            type="text"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            required
          />
        </div>
        <button type="submit">Create Employee</button>
      </form>
    </div>
  );
}

export default CreateEmployee;
