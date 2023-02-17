const UserModel = require("../models/user");

module.exports.signup = (req, res) => {
  console.log(req.body);

  // email should not exist already

  const newUser = new UserModel({
    email: req.body.email,
    password: req.body.password,
  });

  newUser
    .save()
    .then(() => {
      res.send({ code: 200, messgae: "Signup Success" });
    })
    .catch((err) => {
      res.send({ code: 500, messgae: "Signup Err" });
    });
};
