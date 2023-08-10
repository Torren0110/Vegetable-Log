const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
  userID: { type: String, required: true},
  vegID: { type: mongoose.Schema.Types.ObjectId, ref: "Vegetable", required: true },
  quantity: { type: Number, min: 0 }
});

const Cart = new mongoose.model("Cart", cartSchema);

module.exports = Cart;