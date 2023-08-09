const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
  userID: { type: String, required: true},
  vegID: { type: String, required: true },
  quantity: { type: Number, min: 1, required: true }
});

const Cart = new mongoose.model("Cart", cartSchema);

module.exports = Cart;