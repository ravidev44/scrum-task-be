const mongoose = require("mongoose");

const scrumBoardSchema = new mongoose.Schema(
  {
    name: String,
    createdAt: Date,
    updatedAt: Date
  },
  { timestamps: true }
);
module.exports = mongoose.model("scrumBoard", scrumBoardSchema);
