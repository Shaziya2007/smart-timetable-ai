export default function SubjectCards() {

  const cards = [

    { title: "Total Subjects", value: 78 },

    { title: "Core Subjects", value: 42 },

    { title: "Electives", value: 21 },

    { title: "Laboratories", value: 15 }

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