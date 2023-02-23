const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
var cors = require("cors");

const userController = require("./controller/user");

const app = express();
const port = 5000;

app.use(cors());

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
app.post("/signin", userController.signin);

app.listen(port, () => {
  console.log(`Backend Running At Port : ${port}`);
});
