const express = require("express");
const router = express.Router();
const { createDepartment, getDepartments, updateDepartment, deleteDepartment } = require("../controllers/departmentController");
const { protect, authorize } = require("../middleware/authMiddleware");

router.get("/", protect, getDepartments); // any logged-in role can view
router.post("/", protect, authorize("admin"), createDepartment);
router.put("/:id", protect, authorize("admin"), updateDepartment);
router.delete("/:id", protect, authorize("admin"), deleteDepartment);

module.exports = router;