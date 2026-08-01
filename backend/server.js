const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const departmentRoutes = require("./routes/departmentRoutes");
const facultyRoutes = require("./routes/facultyRoutes");

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/departments", departmentRoutes);
app.use("/api/faculty", facultyRoutes);

// Test Route
app.get("/", (req, res) => {
    res.send("Smart Timetable Backend is Running 🚀");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});