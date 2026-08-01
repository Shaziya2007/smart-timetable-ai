const mongoose = require("mongoose");

const classroomSchema = new mongoose.Schema(
  {
    roomNumber: { type: String, required: true, unique: true },
    capacity: { type: Number, required: true },
    type: { type: String, enum: ["lecture", "lab", "seminar"], required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Classroom", classroomSchema);