import "./App.css";
import { useState, useEffect } from "react";
import Axios from "axios";

function App() {
  const [task, setTask] = useState("");
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date().getTime());
  const [listofTasks, setListOfTasks] = useState([]);
  // date = Moment().format("MM-DD-YYYY");
  const createTask = () => {
    Axios.post("http://localhost:3001/createTask", {
      task: task,
      date: date,
      time: time,
    })
      .then(() => {
        setListOfTasks([...listofTasks], {
          task: task,
          date: date,
          time: time,
        });
      })
      .catch(() => {
        alert("it failed!");
      });
  };

  const updateTask = (id) => {
    const newTask = prompt("Enter new task: ");
    const newDate = prompt("Enter a new date: ");
    const newTime = prompt("Enter a new time: ");

    Axios.put("http://localhost:3001/updateTask", {
      newTask: newTask,
      newDate: newDate,
      newTime: newTime,
      id: id,
    }).then(() => {
      setListOfTasks(
        listofTasks.map((e) => {
          return e._id === id
            ? { _id: id, task: newTask, date: newDate, time: newTime }
            : e;
        })
      );
    });
  };
  useEffect(() => {
    Axios.get("http://localhost:3001/readTask")
      .then((response) => {
        setListOfTasks(response.data);
      })
      .catch(() => {
        console.log("ERROR!");
      });
  }, []);

  return (
    <div className="App">
      <div className="inputs">
        <input
          type="text"
          placeholder="Enter task ..."
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
            <div className="taskContainer">
              <div className="task">
                <h3>Task: {e.task}</h3>
                <h3>Date: {e.date}</h3>
                <h3>Time: {e.time}</h3>
              </div>
              <button
                onClick={() => {
                  updateTask(e._id);
                }}
              >
                Update
              </button>
              <button id="removeBtn">X</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
