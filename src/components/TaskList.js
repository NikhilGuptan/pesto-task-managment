import React from 'react';

const TaskList = ({ tasks, updateTaskStatus, deleteTask }) => {
  return (
    <div>
      {tasks.map((task, index) => (
        <div key={index}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <select
            value={task.status}
            onChange={(e) => updateTaskStatus(index, e.target.value)}
          >
            <option value="To Do">To Do</option>
            <option value="In Progress">In Progress</option>
            <option value="Done">Done</option>
          </select>
          <button onClick={() => deleteTask(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
