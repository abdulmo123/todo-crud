function formatDate(date) {
  var d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear;

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [month, day, year].join("/");
}

const mongoose = require("mongoose");
const TaskSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
});

// function formatDate(date) {
//   const currentMonth = date.getMonth();
//   const monthString = currentMonth >= 10 ? currentMonth : `0${currentMonth}`;
//   const currentDate = date.getDate();
//   const dateString = currentDate >= 10 ? currentDate : `0${currentDate}`;
//   return `${date.getFullYear()}-${monthString}-${currentDate}`;
// }

const TaskModel = mongoose.model("tasks", TaskSchema);
module.exports = TaskModel;
