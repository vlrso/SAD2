import React from 'react';
import './TaskTable.css';

export default function TaskTablePrototype() {
  const tasks = [
    {
      id: 1,
      task: "Do this",
      date: "Jul 25, 2023",
      price: "₱85.50",
    },
    {}, {}, {},
  ];

  return (
    <div className="container">
      <div className="table-header">
        <h1 className="table-title">Tasks</h1>
        <button className="button add-button">
          + Add
        </button>
      </div>
      <div className="table-container">
        <table className="task-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Task</th>
              <th>Date</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{task.task || ""}</td>
                <td>{task.date || ""}</td>
                <td>{task.price || ""}</td>
                <td className="actions">
                  <button className="button action-view">🔍</button>
                  <button className="button action-edit">✏️</button>
                  <button className="button action-delete">🗑️</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
