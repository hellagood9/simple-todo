// TODO: Business logic
const Task = require("../models/Task");

const findTaskById = async (id) => Task.findById(id).select({ __v: 0 }).sort({ createdAt: -1 });

const deleteTask = async (id) => {
  try {
    const task = await findTaskById(id);

  if (!task) {
    return { error: false, data: undefined}
  }

  task.remove();

  return { error: false,  data: task._id };
  } catch (error) {
    console.error(error);
    return { error: true, data: undefined };
  }
  
}

module.exports = {
  deleteTask,
  //updateTask
}