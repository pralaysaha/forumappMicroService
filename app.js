const express = require("express");

const app = express();

const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const dbConfig = require("./config/database.config");

mongoose
  .connect(dbConfig.url)
  .then(() => {
    console.log("Successfully Connected to the server");
  })
  .catch(err => {
    console.log("Connection error.. Exiting...");
    process.exit();
  });

mongoose.Promise = global.Promise;

app.use((req, res, next) => {
  return res.status(200).json({ Message: "Message from Route" });
});

module.exports = app;
