const timetable = [
  {
    time: "9:00 - 10:00",
    subject: "Data Structures",
    faculty: "Dr. Kumar",
    room: "A101",
  },
  {
    time: "10:00 - 11:00",
    subject: "DBMS",
    faculty: "Dr. Priya",
    room: "A203",
  },
  {
    time: "11:15 - 12:15",
    subject: "Operating Systems",
    faculty: "Dr. Rahul",
    room: "Lab 2",
  },
  {
    time: "1:00 - 2:00",
    subject: "Java",
    faculty: "Dr. Meena",
    room: "A305",
  },
];

export default function StudentTimetable() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">

      <h2 className="text-2xl font-bold mb-5">
        📅 Today's Timetable
      </h2>

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead className="bg-blue-600 text-white">

            <tr>
              <th className="p-3 text-left">Time</th>
              <th className="p-3 text-left">Subject</th>
              <th className="p-3 text-left">Faculty</th>
              <th className="p-3 text-left">Room</th>
            </tr>

          </thead>

          <tbody>

            {timetable.map((item, index) => (
              <tr
                key={index}
                className="border-b hover:bg-gray-100"
              >
                <td className="p-3">{item.time}</td>
                <td className="p-3 font-semibold">{item.subject}</td>
                <td className="p-3">{item.faculty}</td>
                <td className="p-3">{item.room}</td>
              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}