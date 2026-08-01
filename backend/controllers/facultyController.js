const Faculty = require("../models/Faculty");

const createFaculty = async (req, res) => {
  try {
    const { name, email, department, designation } = req.body;
    if (!name || !email || !department || !designation) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const exists = await Faculty.findOne({ email });
    if (exists) return res.status(400).json({ message: "Faculty already exists" });

    const faculty = await Faculty.create({ name, email, department, designation });
    res.status(201).json(faculty);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const getFaculty = async (req, res) => {
  try {
    const faculty = await Faculty.find().populate("department", "name code");
    res.status(200).json(faculty);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const updateFaculty = async (req, res) => {
  try {
    const faculty = await Faculty.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!faculty) return res.status(404).json({ message: "Faculty not found" });
    res.status(200).json(faculty);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const deleteFaculty = async (req, res) => {
  try {
    const faculty = await Faculty.findByIdAndDelete(req.params.id);
    if (!faculty) return res.status(404).json({ message: "Faculty not found" });
    res.status(200).json({ message: "Faculty deleted" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = { createFaculty, getFaculty, updateFaculty, deleteFaculty };