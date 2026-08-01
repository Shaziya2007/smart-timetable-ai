const Faculty = require("../models/Faculty");

async function createFaculty(facultyData) {
  const {
    name,
    email,
    department,
    designation,
    subjectsHandled,
    isAvailable,
  } = facultyData;

  const existingFaculty = await Faculty.findOne({ email });

  if (existingFaculty) {
    throw new Error("Faculty already exists");
  }

  const faculty = await Faculty.create({
    name,
    email,
    department,
    designation,
    subjectsHandled,
    isAvailable,
  });

  return {
    success: true,
    message: "Faculty created successfully",
    faculty,
  };
}

async function getFaculty() {
  const faculty = await Faculty.find().populate("department");

  return {
    success: true,
    faculty,
  };
}

async function getFacultyById(id) {
  const faculty = await Faculty.findById(id).populate("department");

  if (!faculty) {
    throw new Error("Faculty not found");
  }

  return {
    success: true,
    faculty,
  };
}

async function updateFaculty(id, facultyData) {
  const faculty = await Faculty.findByIdAndUpdate(
    id,
    facultyData,
    { new: true }
  ).populate("department");

  if (!faculty) {
    throw new Error("Faculty not found");
  }

  return {
    success: true,
    message: "Faculty updated successfully",
    faculty,
  };
}

async function deleteFaculty(id) {
  const faculty = await Faculty.findByIdAndDelete(id);

  if (!faculty) {
    throw new Error("Faculty not found");
  }

  return {
    success: true,
    message: "Faculty deleted successfully",
  };
}

module.exports = {
  createFaculty,
  getFaculty,
  getFacultyById,
  updateFaculty,
  deleteFaculty,
};