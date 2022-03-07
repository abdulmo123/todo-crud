import './App.css';
import { useState, useEffect } from 'react';
import Axios from 'axios';
function App() {
  const [task, setTask] = useState('');
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date().getTime());
  const [listofTasks, setListOfTasks] = useState([]);

  const createTask = () => {
    Axios.post('http://localhost:3001/createTask', { task: task, date: date, time: time })
      .then(() => {
        setListOfTasks([...listofTasks], { task: task, date: date, time: time })
      }).catch(() => {
        alert('it failed!');
      });
  };
  useEffect(() => {
    Axios.get('http://localhost:3001/readTask')
      .then((response) => {
        setListOfTasks(response.data);
      }).catch(() => {
        console.log('ERROR!');
      });
  }, []);
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

      <div className="taskList">
        {listofTasks.map((e) => {
          return (
            <div className="task">
              <h3>Task: {e.task}</h3>
              <h3>Date: {e.date}</h3>
              <h3>Time: {e.time}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
