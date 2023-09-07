const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = require("../models/userModel");
const Vegetable = require("../models/vagetableModel");
const Cart = require("../models/cartModel");
require("dotenv").config()
const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST)

router.get("/", async (req, res) => {
  const uid = req.query.uid;

	if(!uid) return res.status(400).send("User id not present");

  try {
		const cartItems = await Cart.find({ userID: uid, paid: false }).populate('vegID').select(["vegID", "quantity"]);
		
    res.json(cartItems);
  } catch(err) {
		res.status(400).send("Something went wrong");
	}
});

router.post("/", async (req, res) => {
  const uid = req.body.uid;
  const vid = req.body.vid;
  const quantity = parseInt(req.body.quantity);

  if (!uid || !vid || !quantity)
    return res.status(400).send("Invalid request");

  try {
    const user = await User.findOne({ _id: uid });
    let veg = await Vegetable.findOne({ _id: vid });

    if (veg.quantity + quantity < 0) throw new Error("Invalid Quantity");
    
    
    let cartItem = await Cart.findOne({ userID: uid, vegID: vid, paid: false });
    
    if(cartItem) {
      if(cartItem.quantity + quantity < 0) return res.status(400).send("Invalid Quantity");
      cartItem.quantity += quantity;
      if(cartItem.quantity === 0) {
        await Cart.deleteOne({_id: cartItem._id});
      }else {
        cartItem = await cartItem.save();
      }
    }
    else if(quantity <= 0) {
      return res.status(400).send("Invalid Quantity");
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


router.post("/pay", async (req, res) => {
	let { amount, id, uid } = req.body
	try {
		const payment = await stripe.paymentIntents.create({
			amount,
			currency: "INR",
			description: "test description",
			payment_method: id,
			confirm: true,
      payment_method_types: ['card'],
		})
		console.log("Payment", payment)
		res.json({
			message: "Payment successful",
			success: true
		})
	} catch (error) {
		console.log("Error", error)
		res.json({
			message: "Payment failed",
			success: false
		})
	}
})


module.exports = router;
