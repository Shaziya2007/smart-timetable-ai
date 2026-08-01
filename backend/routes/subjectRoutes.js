const express = require("express");
const router = express.Router();
const { createSubject, getSubjects, updateSubject, deleteSubject } = require("../controllers/subjectController");
const { protect, authorize } = require("../middleware/authMiddleware");

router.get("/", protect, getSubjects);
router.post("/", protect, authorize("admin"), createSubject);
router.put("/:id", protect, authorize("admin"), updateSubject);
router.delete("/:id", protect, authorize("admin"), deleteSubject);

module.exports = router;