export default function ClassroomTable() {

  const classrooms = [

    {
      room: "A101",
      type: "Lecture Hall",
      capacity: 60,
      building: "Block A",
      status: "Available"
    },

    {
      room: "B204",
      type: "Computer Lab",
      capacity: 40,
      building: "Block B",
      status: "Occupied"
    },

    {
      room: "C302",
      type: "Seminar Hall",
      capacity: 120,
      building: "Block C",
      status: "Available"
    }

  ];

  return (

    <div className="bg-white rounded-xl shadow-lg p-6 overflow-auto">

      <div className="flex justify-between items-center mb-5">

        <h2 className="text-2xl font-bold">
          Classroom List
        </h2>

        <input
          type="text"
          placeholder="Search Classroom..."
          className="border rounded-lg px-4 py-2"
        />

      </div>

      <table className="w-full">

        <thead>

          <tr className="bg-cyan-600 text-white">

            <th className="p-3">Room</th>
            <th className="p-3">Type</th>
            <th className="p-3">Capacity</th>
            <th className="p-3">Building</th>
            <th className="p-3">Status</th>
            <th className="p-3">Actions</th>

          </tr>

        </thead>

        <tbody>

          {classrooms.map((room, index) => (

            <tr key={index} className="border-b hover:bg-gray-50">

              <td className="p-3">{room.room}</td>
              <td className="p-3">{room.type}</td>
              <td className="p-3">{room.capacity}</td>
              <td className="p-3">{room.building}</td>
              <td className="p-3">
                <span className={`px-3 py-1 rounded-full text-white ${
                  room.status === "Available"
                    ? "bg-green-500"
                    : "bg-red-500"
                }`}>
                  {room.status}
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