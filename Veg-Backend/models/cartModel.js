const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
  userID: String().required(),
  vegID: String().required(),
  quantity: Number().min(1).required()
});

const Cart = new mongoose.model("Cart", cartSchema);

module.exports = Cart;