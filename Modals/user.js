const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    password: String,
    ispremium: Boolean,
    total: Number
  },
  { timestamps: true }
);
module.exports = mongoose.model("user", userSchema);
