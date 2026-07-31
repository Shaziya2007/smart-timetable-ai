export default function GuestLectureTable() {

    const data = [

        {
            speaker: "Dr. Kumar",
            topic: "Artificial Intelligence",
            dept: "CSE",
            date: "10 Aug",
            venue: "Seminar Hall",
            status: "Upcoming"
        },

        {
            speaker: "Ms. Priya",
            topic: "Cyber Security",
            dept: "IT",
            date: "15 Aug",
            venue: "Hall A",
            status: "Completed"
        }

    ];

    return (

        <div className="bg-white rounded-xl shadow-lg p-6 overflow-auto">

            <table className="w-full">

                <thead>

                    <tr className="bg-purple-600 text-white">

                        <th className="p-3">Speaker</th>

                        <th className="p-3">Topic</th>

                        <th className="p-3">Department</th>

                        <th className="p-3">Date</th>

                        <th className="p-3">Venue</th>

                        <th className="p-3">Status</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        data.map((item, index) => (

                            <tr key={index} className="border-b hover:bg-gray-100">

                                <td className="p-3">{item.speaker}</td>

                                <td className="p-3">{item.topic}</td>

                                <td className="p-3">{item.dept}</td>

                                <td className="p-3">{item.date}</td>

                                <td className="p-3">{item.venue}</td>

                                <td className="p-3">

                                    <span className={`px-3 py-1 rounded-full text-white ${item.status === "Upcoming" ? "bg-green-500" : "bg-blue-500"}`}>

                                        {item.status}

                                    </span>

                                </td>

                            </tr>

                        ))

                    }

                </tbody>

            </table>

        </div>

    );

}