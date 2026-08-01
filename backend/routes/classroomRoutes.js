const express = require("express");
const router = express.Router();
const { createClassroom, getClassrooms, updateClassroom, deleteClassroom } = require("../controllers/classroomController");
const { protect, authorize } = require("../middleware/authMiddleware");

router.get("/", protect, getClassrooms);
router.post("/", protect, authorize("admin"), createClassroom);
router.put("/:id", protect, authorize("admin"), updateClassroom);
router.delete("/:id", protect, authorize("admin"), deleteClassroom);

module.exports = router;