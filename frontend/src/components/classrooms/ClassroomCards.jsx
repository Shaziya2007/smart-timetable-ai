export default function ClassroomCards() {

  const cards = [
    { title: "Total Rooms", value: 48 },
    { title: "Lecture Halls", value: 30 },
    { title: "Laboratories", value: 12 },
    { title: "Available Today", value: 42 }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

      {cards.map((card) => (

        <div
          key={card.title}
          className="bg-white rounded-xl shadow-lg p-6"
        >

          <p className="text-gray-500">
            {card.title}
          </p>

          <h2 className="text-4xl font-bold mt-3">
            {card.value}
          </h2>

        </div>

      ))}

    </div>
  );
}