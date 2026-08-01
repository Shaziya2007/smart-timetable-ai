import {
  BookOpen,
  CalendarDays,
  ClipboardCheck,
  FileText,
} from "lucide-react";

const stats = [
  {
    title: "Subjects",
    value: "6",
    icon: <BookOpen size={30} />,
    color: "bg-blue-600",
  },
  {
    title: "Today's Classes",
    value: "5",
    icon: <CalendarDays size={30} />,
    color: "bg-green-600",
  },
  {
    title: "Attendance",
    value: "92%",
    icon: <ClipboardCheck size={30} />,
    color: "bg-orange-500",
  },
  {
    title: "Assignments",
    value: "3",
    icon: <FileText size={30} />,
    color: "bg-purple-600",
  },
];

export default function StudentStats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-6">
      {stats.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl hover:-translate-y-1 transition duration-300"
        >
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-500 text-sm">{item.title}</p>
              <h2 className="text-3xl font-bold mt-2">{item.value}</h2>
            </div>

            <div className={`${item.color} text-white p-4 rounded-xl`}>
              {item.icon}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}