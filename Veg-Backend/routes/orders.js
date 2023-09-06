const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = require("../models/userModel");
const Vegetable = require("../models/vagetableModel");
const Cart = require("../models/cartModel");


router.get("/", async (req, res) => {
    const uid = req.query.uid;
    console.log("here");

    if(!uid) return res.status(400).send("User ID not present");

    try {
        const cartItems = await Cart.find({ userID: uid, paid: true }).populate('vegID');
        res.json(cartItems);
    }
    catch {
        res.status(500).send("Something went wrong")
    }

})

module.exports = router;