const express = require('express');
const app = express();
const mongoose = require('mongoose');
const todoController = require('./controllers/todo.controller');
const cors = require('cors');
require('dotenv').config();
// const TaskModel = require('./models/tasks');

app.use(express.json());
// database connection
mongoose.connect(process.env.MONGODB_CONNECTION, { useNewUrlParser: true });

app.get('/getTask', todoController.getTask);
// app.get('/getTask', async (req, res) => {
//     const task = new TaskModel({ task: "Hi", time: "2020-12-01", status: "false" });
//     await task.save();
//     res.send('task added');
// });

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log('listening on port 3001');
})