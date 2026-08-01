const TimeSlot = require("../models/TimeSlot");

const createTimeSlot = async (req, res) => {
  try {
    const { day, startTime, endTime } = req.body;
    if (!day || !startTime || !endTime) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const timeSlot = await TimeSlot.create({ day, startTime, endTime });
    res.status(201).json(timeSlot);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const getTimeSlots = async (req, res) => {
  try {
    const timeSlots = await TimeSlot.find();
    res.status(200).json(timeSlots);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const deleteTimeSlot = async (req, res) => {
  try {
    const timeSlot = await TimeSlot.findByIdAndDelete(req.params.id);
    if (!timeSlot) return res.status(404).json({ message: "TimeSlot not found" });
    res.status(200).json({ message: "TimeSlot deleted" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = { createTimeSlot, getTimeSlots, deleteTimeSlot };