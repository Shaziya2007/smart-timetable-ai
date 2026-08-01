const express = require("express");
const router = express.Router();
const { createTimeSlot, getTimeSlots, deleteTimeSlot } = require("../controllers/timeSlotController");
const { protect, authorize } = require("../middleware/authMiddleware");

router.get("/", protect, getTimeSlots);
router.post("/", protect, authorize("admin"), createTimeSlot);
router.delete("/:id", protect, authorize("admin"), deleteTimeSlot);

module.exports = router;