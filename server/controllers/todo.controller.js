const TaskModel = require('../models/tasks');

exports.getTask = (req, res) => {
    TaskModel.find().then(data => {
        res.send(data);
    })
}

exports.addTask = (req, res) => {
    const todo = new TaskModel({
        task: req.body.task,
        time: req.body.time,
        status: req.body.status
    })
}