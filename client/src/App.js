import React from 'react';
import './App.css';
import EmployeeList from './components/EmployeeList';
import CreateEmployee from './components/CreateEmployee';
import TaskList from './components/TaskList';
import CreateTask from './components/CreateTask';

function App() {
  return (
    <div className="App">
      <h1>Employee and Task Manager</h1>
      
      {}
      <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '20px' }}>
        <CreateEmployee />
        <CreateTask /> {}
      </div>

      <hr />
      
      {}
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <EmployeeList />
        <TaskList />
      </div>
      
    </div>
  );
}

export default App;
