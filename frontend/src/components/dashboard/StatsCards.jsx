const stats = [
  { title: "Faculty", value: 120 },
  { title: "Students", value: 2450 },
  { title: "Departments", value: 8 },
  { title: "Today's Classes", value: 42 },
];

export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">

      {stats.map((item) => (
        <div
          key={item.title}
          className="bg-white rounded-xl shadow p-6 hover:shadow-xl transition"
        >
          <h3 className="text-gray-500">{item.title}</h3>

          <h2 className="text-3xl font-bold mt-3">
            {item.value}
          </h2>
        </div>
      ))}

    </div>
  );
}