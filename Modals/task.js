const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    name: String,
    description: String,
    status: String,
    priority: String,
    assignedTo: String,
    startDate: Date,
    scrumId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "scrum"
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Task", taskSchema);
