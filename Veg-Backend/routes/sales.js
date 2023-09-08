const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = require("../models/userModel");
const Vegetable = require("../models/vagetableModel");
const Cart = require("../models/cartModel");

router.get("/", async (req, res) => {
  const uid = req.query.uid;

  if (!uid) return res.status(400).send("User ID is not present");

  try {
    items = await Cart.find({ paid: true, sellerID: uid}).populate('vegID');

    res.json(items);

  } catch {
    res.status(500).send("Invalid User");
  }
});

router.patch("/", async (req, res) => {
  const cid = req.body.cid;
  const status = req.body.status;

  if(!cid || !status) return res.status(400).send("Missing parameters.");
  if(status != "paid" && status != "shipped" && status != "delivered" ) return res.status(400).send("invalid status");

  try {
    let cart = await Cart.findOne({ _id: cid, paid: true });

    if(status === "shipped" || status === "paid" || status === "delivered") {
      cart.status = status;
    }

    cart = await cart.save();

    res.send(cart);
    
  }
  catch(err) {
    res.status(500).send(err);
  }

})



module.exports = router;
