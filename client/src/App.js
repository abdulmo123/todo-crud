import './App.css';
import { useState } from 'react';
import Axios from 'axios';
function App() {
  const [task, setTask] = useState('');
  const [desc, setDesc] = useState('');

  const createTask = () => {
    Axios.post('http://localhost:3001/createTask', { task: task, desc: desc })
      .then(() => {
        alert('it works!')
      }).catch(() => {
        alert('it failed!');
      });
  };
  return (
    <div className="App">
      <div className="inputs">
        <input
          type="text"
          placeholder='Enter task ...'
          onChange={(event) => setTask(event.target.value)}
        />
        <input
          type="text"
          placeholder="Enter description of task ..."
          onChange={(event) => setDesc(event.target.value)}
        />
        <button onClick={createTask}>Add Task</button>
      </div>
    </div>
  );
}

export default App;
