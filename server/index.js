const express = require('express');
const app = express();
const mongoose = require('mongoose');
const todoController = require('./controllers/todo.controller');
const cors = require('cors');
require('dotenv').config();

app.use(cors());
app.use(express.json());
// database connection
mongoose.connect(process.env.MONGODB_CONNECTION, { useNewUrlParser: true });

// app.get('/getTask', todoController.getTask);
app.post('/createTask', todoController.createTask);

app.get('/readTask', todoController.readTask);

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log('listening on port 3001');
})