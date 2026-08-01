const Department = require("../models/Department");
const Faculty = require("../models/Faculty");

const createDepartment = async (req, res) => {
  try {
    const { name, code, hod, status } = req.body;
    if (!name || !code) return res.status(400).json({ message: "Name and code are required" });

    const exists = await Department.findOne({ $or: [{ name }, { code }] });
    if (exists) return res.status(400).json({ message: "Department already exists" });

    const department = await Department.create({ name, code, hod, status });
    res.status(201).json(department);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const getDepartments = async (req, res) => {
  try {
    const departments = await Department.find();

    const departmentsWithCounts = await Promise.all(
      departments.map(async (dept) => {
        const facultyCount = await Faculty.countDocuments({ department: dept._id });
        return {
          _id: dept._id,
          name: dept.name,
          code: dept.code,
          hod: dept.hod,
          status: dept.status,
          faculty: facultyCount,
          students: 0,
        };
      })
    );

    res.status(200).json(departmentsWithCounts);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const updateDepartment = async (req, res) => {
  try {
    const department = await Department.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!department) return res.status(404).json({ message: "Department not found" });
    res.status(200).json(department);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const deleteDepartment = async (req, res) => {
  try {
    const department = await Department.findByIdAndDelete(req.params.id);
    if (!department) return res.status(404).json({ message: "Department not found" });
    res.status(200).json({ message: "Department deleted" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = { createDepartment, getDepartments, updateDepartment, deleteDepartment };