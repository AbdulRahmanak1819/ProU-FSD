import React from 'react';
import './App.css';
import EmployeeList from './components/EmployeeList';
import CreateEmployee from './components/CreateEmployee';
import TaskList from './components/TaskList';
import CreateTask from './components/CreateTask';

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <h1>Employee and Task Manager</h1>
      </header>
      
      {/* Container for the "Create" forms */}
      <div className="forms-container">
        <div className="form-card">
          <CreateEmployee />
        </div>
        <div className="form-card">
          <CreateTask />
        </div>
      </div>

      <hr className="divider" />
      
      {/* Container for the "Lists" */}
      <div className="lists-container">
        <div className="list-card">
          <EmployeeList />
        </div>
        <div className="list-card">
          <TaskList />
        </div>
      </div>
      
    </div>
  );
}

export default App;
