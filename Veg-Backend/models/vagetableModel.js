const mongoose = require("mongoose");

const vegetableSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 3 },
    price: { type: Number, required: true, min: 1 },
    quantity: { type: Number, required: true, min: 1 },
    image: { type: String, default: "" },
  });
  
  const Vegetable = new mongoose.model("Vegetable", vegetableSchema);

  module.exports = Vegetable;