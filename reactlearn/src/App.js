import React, {useState} from 'react';
import './App.css';
import TaskList from './components/TaskList';

function App() {
  const [newTask, setNewTask] = useState('');
  const [tasks,setTasks] = useState([]);

  
  const handleInputChange = (e) => {
    setNewTask(e.target.value); 
  };


 const handleAddTask = (e) => {
  e.preventDefault();
  if (newTask.trim() === '') return; 
  setTasks([...tasks, newTask]); 
  setNewTask('');
};



return (
  <div className="App">
    <h1>Todo List</h1>
  
    <form onSubmit={handleAddTask}>
      <input
        type="text"
        value={newTask}
        onChange={handleInputChange} 
        placeholder="Enter a new task"
      />
      <button type="submit">Add Task</button>
    </form>

    <TaskList tasks={tasks} />
  </div>
);
}


export default App;
