import React from 'react';

const TaskFilter = ({ filterStatus, setFilterStatus }) => {
  return (
    <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
      <option value="All">All</option>
      <option value="To Do">To Do</option>
      <option value="In Progress">In Progress</option>
      <option value="Done">Done</option>
    </select>
  );
};

export default TaskFilter;
