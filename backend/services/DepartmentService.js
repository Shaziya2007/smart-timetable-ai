const Department = require("../models/Department");

async function createDepartment(departmentData) {
  const { name, code } = departmentData;

  const existingDepartment = await Department.findOne({
    $or: [{ name }, { code }],
  });

  if (existingDepartment) {
    throw new Error("Department already exists");
  }

  const department = await Department.create({
    name,
    code,
  });

  return {
    success: true,
    message: "Department created successfully",
    department,
  };
}

async function getDepartments() {
  const departments = await Department.find();

  return {
    success: true,
    departments,
  };
}

async function getDepartmentById(id) {
  const department = await Department.findById(id);

  if (!department) {
    throw new Error("Department not found");
  }

  return {
    success: true,
    department,
  };
}

async function updateDepartment(id, departmentData) {
  const department = await Department.findByIdAndUpdate(
    id,
    departmentData,
    { new: true }
  );

  if (!department) {
    throw new Error("Department not found");
  }

  return {
    success: true,
    message: "Department updated successfully",
    department,
  };
}

async function deleteDepartment(id) {
  const department = await Department.findByIdAndDelete(id);

  if (!department) {
    throw new Error("Department not found");
  }

  return {
    success: true,
    message: "Department deleted successfully",
  };
}

module.exports = {
  createDepartment,
  getDepartments,
  getDepartmentById,
  updateDepartment,
  deleteDepartment,
};