const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = require("../models/userModel");
const Vegetable = require("../models/vagetableModel");
const Cart = require("../models/cartModel");

router.get("/", (req, res) => {
    res.json(req.body);
})

router.post("/", async (req, res) => {
    const uid = req.body.uid;
    const vid = req.body.vid;
    const quantity = parseInt(req.body.quantity);
    
    if(!uid || !vid || !quantity || quantity <= 0) return res.status(400).send("Invalid request");

    try {
        const user = await User.findOne({ _id: uid });
        let veg = await Vegetable.findOne({ _id: vid });

        if(veg.quantity < quantity) throw new Error("Invalid Quantity");

        let cartItem = new Cart({ userID: uid, vegID: vid, quantity: quantity });
        veg.quantity -= quantity;
        veg = veg = await veg.save();
        cartItem = await cartItem.save();
        res.json(cartItem);
    }
    catch(err) {
        res.status(400).send(err.message);
    }

})

module.exports = router;