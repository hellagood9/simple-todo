require("dotenv").config();

const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const cors = require("cors");

// Database connection
require("./configs/db.config");

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors()); // CORS for everyone to get inside the API

// Routes
const index = require("./routes/index.routes");
app.use("/", index);

module.exports = app;
