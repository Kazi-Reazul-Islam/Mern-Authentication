const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const userController = require("./controller/user");

const app = express();
const port = 5000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

mongoose.connect("mongodb://127.0.0.1:27017/test", (err, success) => {
  if (err) {
    console.log("Database Connection err");
  } else {
    console.log("Database Connection Success");
  }
});

app.post("/signup", userController.signup);

app.listen(port, () => {
  console.log(`Backend Running At Port : ${port}`);
});
