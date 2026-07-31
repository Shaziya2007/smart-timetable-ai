export default function SubstituteCards() {

  const cards = [

    { title: "Today's Requests", value: "12" },

    { title: "Approved", value: "8" },

    { title: "Pending", value: "3" },

    { title: "Completed", value: "54" }

  ];

  return (

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

      {cards.map((card) => (

        <div
          key={card.title}
          className="bg-white rounded-xl shadow-lg p-6"
        >

          <h3 className="text-gray-500">

            {card.title}

          </h3>

          <h1 className="text-4xl font-bold mt-3">

            {card.value}

          </h1>

        </div>

      ))}

    </div>

  );

}