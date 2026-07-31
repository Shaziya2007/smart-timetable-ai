import { BookOpen, GraduationCap, Building2, Clock3 } from "lucide-react";

const stats = [
  {
    title: "Total Courses",
    value: 48,
    color: "bg-blue-500",
    icon: <BookOpen size={28} />,
  },
  {
    title: "Departments",
    value: 8,
    color: "bg-green-500",
    icon: <Building2 size={28} />,
  },
  {
    title: "Active Courses",
    value: 45,
    color: "bg-purple-500",
    icon: <GraduationCap size={28} />,
  },
  {
    title: "Pending",
    value: 3,
    color: "bg-orange-500",
    icon: <Clock3 size={28} />,
  },
];

export default function CourseStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      {stats.map((item, index) => (
        <div
          key={index}
          className={`${item.color} text-white rounded-2xl p-6 shadow-lg`}
        >
          <div className="flex justify-between items-center">
            <div>
              <p>{item.title}</p>
              <h2 className="text-3xl font-bold mt-2">{item.value}</h2>
            </div>

            {item.icon}
          </div>
        </div>
      ))}
    </div>
  );
}