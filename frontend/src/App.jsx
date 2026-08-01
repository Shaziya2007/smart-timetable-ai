  import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";

// Admin Pages
import Dashboard from "./pages/Dashboard";
import Faculty from "./pages/Faculty";
import Departments from "./pages/Departments";
import Students from "./pages/Students";
import Subjects from "./pages/Subjects";
import Classrooms from "./pages/Classrooms";
import Courses from "./pages/Courses";
import TimeSlots from "./pages/TimeSlots";
import Timetable from "./pages/Timetable";
import GuestLectures from "./pages/GuestLectures";
import Substitute from "./pages/Substitute";
import Reports from "./pages/Reports";
import Notifications from "./pages/Notifications";

// Layouts
import AdminLayout from "./layouts/AdminLayout";
import FacultyLayout from "./layouts/FacultyLayout";
import StudentLayout from "./layouts/StudentLayout";

// Faculty Pages
import FacultyDashboard from "./pages/faculty/Dashboard";

// Student Pages
import StudentDashboard from "./pages/student/Dashboard";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* ================= ADMIN ================= */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="faculty" element={<Faculty />} />
          <Route path="departments" element={<Departments />} />
          <Route path="students" element={<Students />} />
          <Route path="subjects" element={<Subjects />} />
          <Route path="classrooms" element={<Classrooms />} />
          <Route path="courses" element={<Courses />} />
          <Route path="timeslots" element={<TimeSlots />} />
          <Route path="timetable" element={<Timetable />} />
          <Route path="guestlectures" element={<GuestLectures />} />
          <Route path="substitute" element={<Substitute />} />
          <Route path="reports" element={<Reports />} />
          <Route path="notifications" element={<Notifications />} />
        </Route>

        {/* ================= FACULTY ================= */}
        <Route path="/faculty" element={<FacultyLayout />}>
          <Route index element={<FacultyDashboard />} />
        </Route>

        {/* ================= STUDENT ================= */}
        <Route path="/student" element={<StudentLayout />}>
          <Route index element={<StudentDashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}