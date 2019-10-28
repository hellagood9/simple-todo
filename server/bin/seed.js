require("dotenv").config()
const mongoose = require("mongoose");
const Task = require("../models/Task");

mongoose
  .connect(`${process.env.DB_LOCAL}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(_ => {
    console.log(
      `Connected to Mongo! Database name: "${_.connections[0].name}"`
    );

    Task.create([
      { name: "Buy new shoes", category: "Shopping" },
      { name: "Review code", category: "Work" },
      { name: "Watch Breaking Bad", category: "Personal" },
      { name: "Set up bank account", category: "Finance", status: "Done" },
      { name: "Clean kitchen", category: "Home", status: "Done" }
    ])
    .then(_ => {
      console.log("All tasks were added to the DB");
      process.exit(0);
    });

  })
  .catch(err => {
    console.log("Error connecting to Mongo!", err);
  });
