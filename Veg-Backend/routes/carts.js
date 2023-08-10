const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = require("../models/userModel");
const Vegetable = require("../models/vagetableModel");
const Cart = require("../models/cartModel");

router.get("/", async (req, res) => {
  const uid = req.query.uid;

	if(!uid) return res.status(400).send("User id not present");

  try {
		const cartItems = await Cart.find({ userID: uid }).populate('vegID').select(["vegID", "quantity"]);


		
    res.json(cartItems);
  } catch(err) {
		res.status(400).send("Something went wrong");
	}
});

router.post("/", async (req, res) => {
  const uid = req.body.uid;
  const vid = req.body.vid;
  const quantity = parseInt(req.body.quantity);

  if (!uid || !vid || !quantity || quantity <= 0)
    return res.status(400).send("Invalid request");

  try {
    const user = await User.findOne({ _id: uid });
    let veg = await Vegetable.findOne({ _id: vid });

    if (veg.quantity < quantity) throw new Error("Invalid Quantity");

    veg.quantity -= quantity;
    veg = await veg.save();

    let cartItem = await Cart.findOne({ userID: uid, vegID: vid });


    if(cartItem) {
      cartItem.quantity += quantity;
      cartItem = await cartItem.save();
    }
    else {
      cartItem = new Cart({ userID: uid, vegID: vid, quantity: quantity });
      cartItem = await cartItem.save();
    }
    res.json(cartItem);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

module.exports = router;
