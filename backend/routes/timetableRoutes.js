const express = require("express");
const router = express.Router();
const { createTimetableEntry, getTimetables, updateTimetableEntry, deleteTimetableEntry } = require("../controllers/timetableController");
const { protect, authorize } = require("../middleware/authMiddleware");

router.get("/", protect, getTimetables); // Student/Faculty/Admin can all view
router.post("/", protect, authorize("admin"), createTimetableEntry);
router.put("/:id", protect, authorize("admin"), updateTimetableEntry);
router.delete("/:id", protect, authorize("admin"), deleteTimetableEntry);

module.exports = router;