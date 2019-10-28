const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: ["Shopping", "Work", "Personal", "Finance", "Home"],
    default: "Personal"
  },
  scheduled: {
    type: Date,
    default: Date.now,
    required: false
  },
  status: {
    type: String,
    enum: ["Done", "Pending"],
    default: "Pending"
  }
},
  { timestamps: true}
);

const Task = mongoose.model("Task", taskSchema);
module.exports = Task;
