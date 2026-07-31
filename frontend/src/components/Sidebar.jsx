import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();

  const menu = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Faculty", path: "/faculty" },
    { name: "Students", path: "/students" },
    { name: "Departments", path: "/departments" },
    { name: "Subjects", path: "/subjects" },
    { name: "Classrooms", path: "/classrooms" },
    { name: "Courses", path: "/courses" },
    { name: "Time Slots", path: "/timeslots" },
    { name: "Timetable", path: "/timetable" },
    { name: "Guest Lectures", path: "/guestlectures" },
    { name: "Substitute", path: "/substitute" },
    { name: "Reports", path: "/reports" },
    { name: "Notifications", path: "/notifications" },
  ];

  return (
    <div className="w-64 min-h-screen bg-slate-900 text-white p-6">

      <h1 className="text-2xl font-bold mb-8">
        Smart Timetable
      </h1>

      <div className="space-y-2">

        {menu.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`block px-4 py-3 rounded-lg transition ${
              location.pathname === item.path
                ? "bg-blue-600"
                : "hover:bg-slate-700"
            }`}
          >
            {item.name}
          </Link>
        ))}

      </div>

    </div>
  );
}