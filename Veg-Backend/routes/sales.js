const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = require("../models/userModel");
const Vegetable = require("../models/vagetableModel");
const Cart = require("../models/cartModel");

router.get("", async (req, res) => {
  const uid = req.query.uid;

  if (!uid) return res.status(400).send("User ID is not present");

  try {
    items = await Cart.find({ paid: true, sellerID: uid});

    res.json(items);

  } catch {
    res.status(500).send("Invalid User");
  }
});



module.exports = router;
