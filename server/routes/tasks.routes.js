const express = require("express");
const router = express.Router();

const {
  getTasks,
  getTask,
  postTask,
  putTask,
  deleteTask,
} = require("../controllers/task.controller");

router.get("/tasks", getTasks);
router.get("/tasks/:status", getTask)
router.post("/tasks", postTask);
router.put("/tasks/:id", putTask)
router.delete("/tasks/:id", deleteTask);

module.exports = router;