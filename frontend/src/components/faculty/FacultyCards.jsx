const cards = [
  {
    title: "Total Faculty",
    value: 120,
    color: "bg-blue-500",
  },
  {
    title: "Active Faculty",
    value: 110,
    color: "bg-green-500",
  },
  {
    title: "Departments",
    value: 8,
    color: "bg-purple-500",
  },
  {
    title: "New This Month",
    value: 12,
    color: "bg-orange-500",
  },
];

export default function FacultyCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">

      {cards.map((card) => (
        <div
          key={card.title}
          className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6"
        >
          <div
            className={`w-14 h-14 ${card.color} rounded-xl mb-4`}
          ></div>

          <h3 className="text-gray-500 text-sm">
            {card.title}
          </h3>

          <h1 className="text-3xl font-bold mt-2">
            {card.value}
          </h1>
        </div>
      ))}

    </div>
  );
}