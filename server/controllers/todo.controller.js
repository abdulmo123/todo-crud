const TaskModel = require("../models/tasks");

exports.readTask = (req, res) => {
  TaskModel.find({}, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
};

exports.createTask = (req, res) => {
  const todo = new TaskModel({
    task: req.body.task,
    date: req.body.date,
    time: req.body.time,
  });
  todo.save().then((data) => {
    res.send(data);
  });
};

exports.updateTask = (req, res) => {
  const newTask = req.body.newTask;
  const newDate = req.body.newDate;
  const newTime = req.body.newTime;
  const id = req.body.id;
  try {
    TaskModel.findById(id, (error, taskToUpdate) => {
      taskToUpdate.task = newTask;
      taskToUpdate.date = newDate;
      taskToUpdate.time = newTime;
      taskToUpdate.save();
    });
  } catch (err) {
    alert("Error");
  }
  res.send("updated!");
};
