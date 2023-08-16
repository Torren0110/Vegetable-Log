const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: { type: String, minlength: 5, required: true, unique: true },
  email: {
    type: String,
    validate: {
      validator: function (value) {
        return /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(value);
      },
      message: "Invalid email",
    },
    unique: true,
  },
  password: { type: String, minlength: 8, required: true },
  address: {  type: String, minlength: 10, required: true }
});

const User = new mongoose.model("User", userSchema);

module.exports = User;