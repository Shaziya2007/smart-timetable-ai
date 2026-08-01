import { BrowserRouter, Routes, Route } from "react-router-dom";

// Public Pages
import Login from "./pages/Login";
import Register from "./pages/Register";

// ================= ADMIN PAGES =================
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

// ================= LAYOUTS =================
import AdminLayout from "./layouts/AdminLayout";
import FacultyLayout from "./layouts/FacultyLayout";
import StudentLayout from "./layouts/StudentLayout";

// ================= FACULTY PAGES =================
import FacultyDashboard from "./pages/faculty/Dashboard";
import MySchedule from "./pages/faculty/MySchedule";
import FacultyNotifications from "./pages/faculty/Notifications";

// ================= STUDENT PAGES =================
import StudentDashboard from "./pages/student/Dashboard";
import MyTimetable from "./pages/student/MyTimetable";
import StudentNotifications from "./pages/student/Notifications";


export default function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* ================= PUBLIC ================= */}

        <Route 
          path="/" 
          element={<Login />} 
        />

        <Route 
          path="/register" 
          element={<Register />} 
        />


        {/* ================= ADMIN ================= */}

        <Route 
          path="/admin" 
          element={<AdminLayout />}
        >

          <Route 
            index 
            element={<Dashboard />} 
          />

          <Route 
            path="faculty" 
            element={<Faculty />} 
          />

          <Route 
            path="departments" 
            element={<Departments />} 
          />

          <Route 
            path="students" 
            element={<Students />} 
          />

          <Route 
            path="subjects" 
            element={<Subjects />} 
          />

          <Route 
            path="classrooms" 
            element={<Classrooms />} 
          />

          <Route 
            path="courses" 
            element={<Courses />} 
          />

          <Route 
            path="timeslots" 
            element={<TimeSlots />} 
          />

          <Route 
            path="timetable" 
            element={<Timetable />} 
          />

          <Route 
            path="guestlectures" 
            element={<GuestLectures />} 
          />

          <Route 
            path="substitute" 
            element={<Substitute />} 
          />

          <Route 
            path="reports" 
            element={<Reports />} 
          />

          <Route 
            path="notifications" 
            element={<Notifications />} 
          />

        </Route>



        {/* ================= FACULTY ================= */}

        <Route 
          path="/faculty" 
          element={<FacultyLayout />}
        >

          <Route 
            index 
            element={<FacultyDashboard />} 
          />

          <Route 
            path="schedule" 
            element={<MySchedule />} 
          />

          <Route 
            path="notifications" 
            element={<FacultyNotifications />} 
          />

        </Route>



        {/* ================= STUDENT ================= */}

        <Route 
          path="/student" 
          element={<StudentLayout />}
        >

          <Route 
            index 
            element={<StudentDashboard />} 
          />

          <Route 
            path="timetable" 
            element={<MyTimetable />} 
          />

          <Route 
            path="notifications" 
            element={<StudentNotifications />} 
          />

        </Route>


      </Routes>

    </BrowserRouter>
  );
}