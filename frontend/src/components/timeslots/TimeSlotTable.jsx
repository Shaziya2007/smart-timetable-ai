export default function TimeSlotTable() {

  const slots = [

    {
      slot: "Slot 1",
      time: "09:00 - 10:00",
      type: "Lecture",
      duration: "60 min",
      status: "Active"
    },

    {
      slot: "Slot 2",
      time: "10:00 - 11:00",
      type: "Lecture",
      duration: "60 min",
      status: "Active"
    },

    {
      slot: "Break",
      time: "11:00 - 11:15",
      type: "Tea Break",
      duration: "15 min",
      status: "Break"
    },

    {
      slot: "Slot 3",
      time: "11:15 - 12:15",
      type: "Lecture",
      duration: "60 min",
      status: "Active"
    },

    {
      slot: "Lunch",
      time: "01:00 - 01:45",
      type: "Lunch Break",
      duration: "45 min",
      status: "Break"
    }

  ];

  return (

    <div className="bg-white rounded-xl shadow-lg p-6 overflow-auto">

      <div className="flex justify-between items-center mb-5">

        <h2 className="text-2xl font-bold">
          Time Slot Schedule
        </h2>

        <input
          type="text"
          placeholder="Search Slot..."
          className="border rounded-lg px-4 py-2"
        />

      </div>

      <table className="w-full">

        <thead>

          <tr className="bg-indigo-600 text-white">

            <th className="p-3">Slot</th>
            <th className="p-3">Time</th>
            <th className="p-3">Type</th>
            <th className="p-3">Duration</th>
            <th className="p-3">Status</th>
            <th className="p-3">Action</th>

          </tr>

        </thead>

        <tbody>

          {slots.map((slot, index) => (

            <tr
              key={index}
              className="border-b hover:bg-gray-100"
            >

              <td className="p-3">{slot.slot}</td>
              <td className="p-3">{slot.time}</td>
              <td className="p-3">{slot.type}</td>
              <td className="p-3">{slot.duration}</td>

              <td className="p-3">

                <span
                  className={`px-3 py-1 rounded-full text-white ${
                    slot.status === "Active"
                      ? "bg-green-500"
                      : "bg-orange-500"
                  }`}
                >
                  {slot.status}
                </span>

              </td>

              <td className="p-3">

                <button className="bg-blue-600 text-white px-3 py-1 rounded mr-2">
                  Edit
                </button>

                <button className="bg-red-500 text-white px-3 py-1 rounded">
                  Delete
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );
}