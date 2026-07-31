export default function ReportCards() {

  const cards = [

    { title: "Faculty", value: 120 },

    { title: "Students", value: 1500 },

    { title: "Departments", value: 8 },

    { title: "Classes Today", value: 56 }

  ];

  return (

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

      {cards.map((card) => (

        <div
          key={card.title}
          className="bg-white shadow-lg rounded-xl p-6 hover:scale-105 transition"
        >

          <h2 className="text-gray-500">

            {card.title}

          </h2>

          <h1 className="text-4xl font-bold mt-3">

            {card.value}

          </h1>

        </div>

      ))}

    </div>

  );

}