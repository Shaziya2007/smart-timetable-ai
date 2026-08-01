import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";

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

// Student Module
import StudentLogin from "./pages/StudentLogin";
import StudentDashboard from "./pages/StudentDashboard";

import Layout from "./layouts/Layout";

export default function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* Authentication */}

        <Route path="/" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/student-login" element={<StudentLogin />} />

        {/* Main Layout */}

        <Route element={<Layout />}>

          {/* Admin */}

          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/faculty" element={<Faculty />} />

          <Route path="/departments" element={<Departments />} />

          <Route path="/students" element={<Students />} />

          <Route path="/subjects" element={<Subjects />} />

          <Route path="/classrooms" element={<Classrooms />} />

          <Route path="/courses" element={<Courses />} />

          <Route path="/timeslots" element={<TimeSlots />} />

          <Route path="/timetable" element={<Timetable />} />

          <Route path="/guestlectures" element={<GuestLectures />} />

          <Route path="/substitute" element={<Substitute />} />

          <Route path="/reports" element={<Reports />} />

          <Route path="/notifications" element={<Notifications />} />

          {/* Student */}

          <Route
            path="/student-dashboard"
            element={<StudentDashboard />}
          />

        </Route>

      </Routes>

    </BrowserRouter>
  );
}