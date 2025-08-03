import React from 'react';
import TaskTablePrototype from '../components/TaskTable';
import './Dashboard.css'

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Dashboard</h1>
      <TaskTablePrototype />
    </div>
  );
}
