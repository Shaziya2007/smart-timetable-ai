const mongoose = require("mongoose");

const facultySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    department: { type: mongoose.Schema.Types.ObjectId, ref: "Department", required: true },
    designation: { type: String, required: true }, // e.g. "Assistant Professor"
    subjectsHandled: [{ type: mongoose.Schema.Types.ObjectId, ref: "Subject" }],
    isAvailable: { type: Boolean, default: true }, // used later for substitute allocation
  },
  { timestamps: true }
);

module.exports = mongoose.model("Faculty", facultySchema);