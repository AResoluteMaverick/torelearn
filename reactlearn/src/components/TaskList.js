import React from "react";

function TaskList({ tasks }) {
    return (
      <div>
        <h2>Tasks</h2>
        <ul>
          {tasks.length > 0 ? (
            tasks.map((task, index) => <li key={index}>{task}</li>)
          ) : (
            <li>No tasks added yet.</li>
          )}
        </ul>
      </div>
    );
  }
  
  export default TaskList;