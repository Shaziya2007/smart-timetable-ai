const cards = [
  {
    title: "Departments",
    value: "8",
    color: "bg-blue-500",
  },
  {
    title: "Faculty",
    value: "156",
    color: "bg-green-500",
  },
  {
    title: "Students",
    value: "2450",
    color: "bg-purple-500",
  },
  {
    title: "Programs",
    value: "18",
    color: "bg-orange-500",
  },
];

export default function DepartmentCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {cards.map((card) => (
        <div
          key={card.title}
          className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
        >
          <div className={`w-14 h-14 rounded-xl ${card.color} mb-4`}></div>

          <h3 className="text-gray-500">{card.title}</h3>

          <h1 className="text-3xl font-bold mt-2">{card.value}</h1>
        </div>
      ))}
    </div>
  );
}