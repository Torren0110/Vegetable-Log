const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
  userID: { type: String, required: true},
  vegID: { type: mongoose.Schema.Types.ObjectId, ref: "Vegetable", required: true },
  sellerID: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  quantity: { type: Number, min: 0 },
  paid: { type: Boolean, default: false },
  status: { type: String, default: "" }
});

const Cart = new mongoose.model("Cart", cartSchema);

module.exports = Cart;