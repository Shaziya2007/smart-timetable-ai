const mongoose = require("mongoose");

const timeSlotSchema = new mongoose.Schema(
  {
    day: {
      type: String,
      enum: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      required: true,
    },
    startTime: { type: String, required: true }, // e.g. "09:00"
    endTime: { type: String, required: true },   // e.g. "10:00"
  },
  { timestamps: true }
);

module.exports = mongoose.model("TimeSlot", timeSlotSchema);