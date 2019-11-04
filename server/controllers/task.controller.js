const Task = require("../models/Task"); // TODO: delete if business logic applied

// TODO: Business logic
// const taskLogic = require('../logic/task');

const getTasks = async (req, res, next) => {
  try {
    const tasks = await Task.find().select({ __v: 0 }).sort({ createdAt: -1 })
    res.status(200).json(tasks)
  } catch(err) { res.status(500).json({ message: err }) }
};

const postTask = async (req, res, next) => {
  try {
    const { name, category, scheduled } = req.body;
    const createdTask = await Task.create({ name, category, scheduled })
    
    res.status(201).json(createdTask)
  } catch(err) { res.status(400).json({ message: err.message }) }
};

const deleteTask = async (req, res, next) => {
  try {
    const task = await Task.findById(req.params.id)
    if (!task) res.status(404).json({ message: 'Task not found' }) 
    
    const deletedTask = await task.remove();
    res.status(200).json({ message: "Task deleted", deletedTask })
  } catch(err) { res.status(400).json({ message: err.message }) }
}

const getTask = async (req, res, next) => {
  try {
    const tasksByStatus = await Task.find({ status: req.params.status })

    if (!tasksByStatus) res.status(404).json({ message: 'Task not found' })
    res.status(200).json(tasksByStatus)

  } catch(err) { res.status(500).json({ message: err.message }) }
}

const putTask = async (req, res, next) => {
  try {
    const { name, category, scheduled, status } = req.body;
    const task = await Task.findById(req.params.id)

    if (!task) res.status(404).json({ message: 'Task not found' }) 
    
    if (task.name !== null) task.name = name || task.name
    task.category = category || task.category
    task.scheduled = scheduled || task.scheduled
    task.status = status || task.status

    const updatedTask = await task.save()
    res.status(201).json(updatedTask)
  } catch(err) { res.status(400).json({ message: err.message }) }
}

module.exports = {
  getTask,
  getTasks,
  postTask,
  putTask,
  deleteTask
};