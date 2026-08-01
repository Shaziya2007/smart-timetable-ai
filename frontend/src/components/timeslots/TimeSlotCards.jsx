export default function TimeSlotCards() {

  const cards = [

    { title: "Total Slots", value: 48 },

    { title: "Lecture Slots", value: 36 },

    { title: "Break Slots", value: 6 },

    { title: "Lab Sessions", value: 6 }

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

          <h1 className="text-4xl font-bold mt-3">
            {card.value}
          </h1>

        </div>

      ))}

    </div>

  );

}