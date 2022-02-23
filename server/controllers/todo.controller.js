const TaskModel = require('../models/tasks');

exports.readTask = (req, res) => {
    TaskModel.find({}, (err, result) => {
        if (err) {
            res.send(err)
        }
        else {
            res.send(result)
        }
    })
}

exports.createTask = (req, res) => {
    const todo = new TaskModel({
        task: req.body.task,
        date: req.body.date,
        time: req.body.time
    })
    todo.save().then(data => {
        res.send(data);
    })
}