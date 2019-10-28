const express = require("express");
const router = express.Router();
const Task = require("../models/Task");

/**
 * /tasks
 * GET
 * Show all the tasks
 */

router.get("/tasks", async (req, res, next) => {
  try {
    const tasks = await Task.find().select({ __v: 0 }).sort({ createdAt: -1 })
    res.status(200).json(tasks)
  } catch(err) { res.status(500).json({ message: err }) }
})

/**
 * /tasks
 * POST
 * Create a task and save it in the database
 */

router.post("/tasks", async (req, res, next) => {
  try {
    const { name, category, scheduled } = req.body;
    const createdTask = await Task.create({ name, category, scheduled })
    res.status(201).redirect("/tasks")
  } catch(err) { res.status(400).json({ message: err.message }) }
})

/**
 * /tasks/status/:status
 * GET
 * Show all the tasks by status (Done or Pending)
 */

router.get("/tasks/status/:status", async (req, res, next) => {
  try {
    const taskByStatus = await Task.find({ status: req.params.status }).select({ __v: 0 }).sort({ createdAt: -1 })
    res.status(200).json(taskByStatus)
  } catch(err) { res.status(500).json({ message: err.message }) }
})


module.exports = router;
