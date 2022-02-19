const express = require('express');
const app = express();
const mongoose = require('mongoose');

// database connection
mongoose.connect("mongodb+srv://user:admin@cluster0.xnru8.mongodb.net/ToDoDB?retryWrites=true&w=majority", { useNewUrlParser: true });
app.listen(3001, () => {
    console.log('listening on port 3001');
})