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
    address: joi.string().min(10).required(),
    phone: joi.string().min(10).required(),
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
      address: req.body.address,
      phone: req.body.phone,
    });

    newUser = await newUser.save();
    res.json(newUser);
  } catch (err) {
    res.status(400).send("Err Something went wrong");
  }
});

router.patch("/", async (req, res) => {
  const uid = req.body.uid;

  if(!uid) return res.status(400).send("User ID is missing");

  try {
    let user = await User.findOne({ "_id": uid });

    if(req.body.address) user.address = req.body.address;
    if(req.body.phone) user.phone = req.body.phone;

    user = await user.save();

    res.send(user);
  } catch {
    res.status(400).send("something went wrong");
  }

});

router.post("/get", async (req, res) => {
  const uid = req.body.uid;

  try {
    const user = await User.findOne({ _id: uid });

    res.json(user);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.post("/login", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  if (!username || !password) return res.status(400).send("Invalid request");

  try {
    const user = await User.findOne({ username: username, password: password });
    if (user) res.json(user._id);
    else res.status(400).send("Invalid login credentials");
  } catch {
    res.status(400).send("Something went wrong");
  }
});

module.exports = router;
