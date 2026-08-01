import {
  Download,
  Calendar,
  BookOpen,
  Bell,
} from "lucide-react";

const actions = [
  {
    title: "Download Timetable",
    icon: <Download size={28} />,
    color: "bg-blue-600",
  },
  {
    title: "Academic Calendar",
    icon: <Calendar size={28} />,
    color: "bg-green-600",
  },
  {
    title: "View Subjects",
    icon: <BookOpen size={28} />,
    color: "bg-orange-500",
  },
  {
    title: "Notifications",
    icon: <Bell size={28} />,
    color: "bg-purple-600",
  },
];

export default function StudentQuickActions() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
      {actions.map((item, index) => (
        <button
          key={index}
          className={`${item.color} text-white rounded-xl p-6 shadow-lg hover:scale-105 transition duration-300`}
        >
          <div className="flex justify-center mb-3">
            {item.icon}
          </div>

          <h2 className="font-semibold text-center">
            {item.title}
          </h2>
        </button>
      ))}
    </div>
  );
}