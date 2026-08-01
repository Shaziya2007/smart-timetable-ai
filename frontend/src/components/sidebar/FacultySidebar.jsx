import { Link, useLocation } from "react-router-dom";

export default function FacultySidebar() {
  const location = useLocation();

  const menu = [
    { name: "Dashboard", path: "/faculty" },
    { name: "My Schedule", path: "/faculty/schedule" },
    { name: "Notifications", path: "/faculty/notifications" },
  ];

  return (
    <div className="w-64 min-h-screen bg-slate-900 text-white p-6">
      <h1 className="text-2xl font-bold">
        Smart Timetable
      </h1>

      <p className="text-gray-400 text-sm mb-8">
        Faculty Portal
      </p>

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

      <div className="mt-8 border-t border-slate-700 pt-4">
        <Link
          to="/"
          className="block text-center bg-red-600 hover:bg-red-700 rounded-lg py-3"
        >
          Logout
        </Link>
      </div>
    </div>
  );
}