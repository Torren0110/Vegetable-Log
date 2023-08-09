const express = require("express");
const router = express.Router();
const joi = require("joi");
const mongoose = require("mongoose");
const User = require("../models/userModel");

function validateUser(user) {
  const schema = joi.object({
    username: joi.string().min(5).required(),
    email: joi.string().email().required(),
    password1: joi.string().min(8).required(),
    password2: joi.string().min(8).required().valid(joi.ref("password1")),
  });

  return schema.validate(user);
}

router.post("/", async (req, res) => {
  const { error } = validateUser(req.body);

  if (error) return res.status(400).send(error.details[0].message);

  try {
    let newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password1,
    });
    newUser = await newUser.save();
    res.json(newUser);
  } catch {
    res.status(400).send("Err Something went wrong");
  }
});

router.post("/login", async (req, res) => {
	const username = req.body.username;
	const password = req.body.password;

	if(!username || !password) return res.status(400).send("Invalid request");

	try {
		const user = await User.findOne({ username: username, password: password });
		if(user)
			res.json(user._id);
		else
			res.status(400).send("Invalid login credentials");
	}
	catch {
		res.status(400).send("Something went wrong");
	}

});

module.exports = router;