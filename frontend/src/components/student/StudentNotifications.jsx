import {
  Bell,
  CalendarDays,
  BookOpen,
  AlertCircle,
} from "lucide-react";

const notifications = [
  {
    icon: <Bell className="text-blue-600" />,
    title: "Timetable Updated",
    time: "10 mins ago",
  },
  {
    icon: <BookOpen className="text-green-600" />,
    title: "Assignment Uploaded",
    time: "Today",
  },
  {
    icon: <CalendarDays className="text-orange-500" />,
    title: "Internal Exam Tomorrow",
    time: "1 Day Left",
  },
  {
    icon: <AlertCircle className="text-red-500" />,
    title: "Attendance Below 75% in DBMS",
    time: "Check Now",
  },
];

export default function StudentNotifications() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">

      <h2 className="text-2xl font-bold mb-6">
        🔔 Notifications
      </h2>

      {notifications.map((item, index) => (

        <div
          key={index}
          className="flex items-center justify-between border-b py-4"
        >

          <div className="flex items-center gap-4">

            {item.icon}

            <div>

              <h3 className="font-semibold">
                {item.title}
              </h3>

              <p className="text-gray-500 text-sm">
                {item.time}
              </p>

            </div>

          </div>

        </div>

      ))}

    </div>
  );
}