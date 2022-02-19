const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true
    },
    time: {
        type: Date,
        required: true
    },
    status: {
        type: Boolean,
        required: false
    }
});

const TaskModel = mongoose.model('tasks', TaskSchema);
module.exports = TaskModel;