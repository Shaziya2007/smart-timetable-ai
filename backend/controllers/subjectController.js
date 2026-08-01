const Subject = require("../models/Subject");

const createSubject = async (req, res) => {
  try {
    const { name, code, department, semester, credits } = req.body;
    if (!name || !code || !department || !semester || !credits) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const exists = await Subject.findOne({ code });
    if (exists) return res.status(400).json({ message: "Subject already exists" });

    const subject = await Subject.create({ name, code, department, semester, credits });
    res.status(201).json(subject);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const getSubjects = async (req, res) => {
  try {
    const subjects = await Subject.find().populate("department", "name code");
    res.status(200).json(subjects);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const updateSubject = async (req, res) => {
  try {
    const subject = await Subject.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!subject) return res.status(404).json({ message: "Subject not found" });
    res.status(200).json(subject);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const deleteSubject = async (req, res) => {
  try {
    const subject = await Subject.findByIdAndDelete(req.params.id);
    if (!subject) return res.status(404).json({ message: "Subject not found" });
    res.status(200).json({ message: "Subject deleted" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = { createSubject, getSubjects, updateSubject, deleteSubject };