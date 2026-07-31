export default function GuestLectureStats() {

    const cards = [

        {
            title: "Total Lectures",
            value: "28"
        },

        {
            title: "Upcoming",
            value: "8"
        },

        {
            title: "Completed",
            value: "20"
        },

        {
            title: "Departments",
            value: "6"
        }

    ];

    return (

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            {

                cards.map((card) => (

                    <div

                        key={card.title}

                        className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition"

                    >

                        <h3 className="text-gray-500">

                            {card.title}

                        </h3>

                        <h1 className="text-4xl font-bold mt-3">

                            {card.value}

                        </h1>

                    </div>

                ))

            }

        </div>

    );

}