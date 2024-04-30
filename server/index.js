//import express mongoose cors
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const TodoModel = require("./models/Todo");

//create app
const app = express();
app.use(cors());
app.use(express.json); //when data passed i'll bw converted to json format

mongoose.connect("mongodb://127.0.0.1:27017/test");
app.post("/add", (req, res) => {
  const task = req.body.task;
  console.log(task);
  TodoModel.create({
    task: task,
  })
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

app.listen(3001, () => {
  console.log("Server is Running");
});
