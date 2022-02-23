import './App.css';
import { useState } from 'react';
import Axios from 'axios';
function App() {
  const [task, setTask] = useState('');
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date().getTime());

  const createTask = () => {
    Axios.post('http://localhost:3001/createTask', { task: task, date: date, time: time })
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
          type="date"
          placeholder="Enter description of task ..."
          onChange={(event) => setDate(event.target.value)}
        />
        <input
          type="time"
          placeholder="Enter description of task ..."
          onChange={(event) => setTime(event.target.value)}
        />
        <button onClick={createTask}>Add Task</button>
      </div>
    </div>
  );
}

export default App;
