const express = require("express")
const router = express.Router()

const tasksRoutes = require("./tasks.routes")
router.use("/", tasksRoutes)

module.exports = router