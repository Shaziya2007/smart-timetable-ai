const Classroom = require("../models/Classroom");

const createClassroom = async (req, res) => {
  try {
    const { roomNumber, capacity, type } = req.body;
    if (!roomNumber || !capacity || !type) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const exists = await Classroom.findOne({ roomNumber });
    if (exists) return res.status(400).json({ message: "Classroom already exists" });

    const classroom = await Classroom.create({ roomNumber, capacity, type });
    res.status(201).json(classroom);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const getClassrooms = async (req, res) => {
  try {
    const classrooms = await Classroom.find();
    res.status(200).json(classrooms);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const updateClassroom = async (req, res) => {
  try {
    const classroom = await Classroom.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!classroom) return res.status(404).json({ message: "Classroom not found" });
    res.status(200).json(classroom);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const deleteClassroom = async (req, res) => {
  try {
    const classroom = await Classroom.findByIdAndDelete(req.params.id);
    if (!classroom) return res.status(404).json({ message: "Classroom not found" });
    res.status(200).json({ message: "Classroom deleted" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = { createClassroom, getClassrooms, updateClassroom, deleteClassroom };