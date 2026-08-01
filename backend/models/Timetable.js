const mongoose = require("mongoose");

const timetableSchema = new mongoose.Schema(
  {
    department: { type: mongoose.Schema.Types.ObjectId, ref: "Department", required: true },
    semester: { type: Number, required: true },
    section: { type: String, required: true }, // e.g. "A", "B"
    subject: { type: mongoose.Schema.Types.ObjectId, ref: "Subject", required: true },
    faculty: { type: mongoose.Schema.Types.ObjectId, ref: "Faculty", required: true },
    classroom: { type: mongoose.Schema.Types.ObjectId, ref: "Classroom", required: true },
    timeSlot: { type: mongoose.Schema.Types.ObjectId, ref: "TimeSlot", required: true },
    academicYear: { type: String, required: true }, // e.g. "2026-2027"
    status: {
      type: String,
      enum: ["active", "cancelled", "rescheduled"],
      default: "active",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Timetable", timetableSchema);