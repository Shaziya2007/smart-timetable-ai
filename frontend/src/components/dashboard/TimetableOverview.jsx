const timetable = [
  {
    time: "09:00",
    subject: "DBMS",
    faculty: "Dr. Ravi",
    room: "A201",
  },
  {
    time: "10:00",
    subject: "React",
    faculty: "Priya",
    room: "Lab 2",
  },
  {
    time: "11:00",
    subject: "AI",
    faculty: "Kumar",
    room: "A104",
  },
];

export default function TimetableOverview() {
  return (
    <div className="bg-white rounded-xl shadow p-6">

      <h2 className="text-2xl font-bold mb-5">
        Today's Timetable
      </h2>

      <table className="w-full">

        <thead>

          <tr className="border-b">

            <th className="py-3 text-left">Time</th>

            <th className="text-left">Subject</th>

            <th className="text-left">Faculty</th>

            <th className="text-left">Room</th>

          </tr>

        </thead>

        <tbody>

          {timetable.map((item, index) => (

            <tr key={index} className="border-b">

              <td className="py-3">{item.time}</td>

              <td>{item.subject}</td>

              <td>{item.faculty}</td>

              <td>{item.room}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}