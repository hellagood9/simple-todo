const express = require("express")
const router = express.Router()

const tasksRoutes = require("./todo.tasks")
router.use("/", tasksRoutes)

module.exports = router