const express = require("express");
const router = express.Router();

const { 
    createTimetableEntry,
    getTimetables,
    updateTimetableEntry,
    deleteTimetableEntry,
    generateTimetable
} = require("../controllers/timetableController");

const { protect, authorize } = require("../middleware/authMiddleware");


router.get("/", protect, getTimetables);

router.post(
    "/",
    protect,
    authorize("admin"),
    createTimetableEntry
);

router.put(
    "/:id",
    protect,
    authorize("admin"),
    updateTimetableEntry
);

router.delete(
    "/:id",
    protect,
    authorize("admin"),
    deleteTimetableEntry
);


// NEW - Timetable Generator
router.post(
    "/generate",
    protect,
    authorize("admin"),
    generateTimetable
);


module.exports = router;