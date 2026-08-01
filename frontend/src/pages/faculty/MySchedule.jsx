export default function MySchedule() {

  const schedule = [
    { time: "9:00 - 10:00", subject: "DBMS", room: "C101" },
    { time: "10:00 - 11:00", subject: "Operating Systems", room: "C102" },
    { time: "1:00 - 2:00", subject: "Web Technology", room: "Lab 2" },
  ];

  return (
    <div className="p-6">

      <h1 className="text-3xl font-bold mb-6">
        My Schedule
      </h1>

      <table className="w-full bg-white rounded-xl shadow">

        <thead className="bg-gray-100">
          <tr>
            <th className="p-3">Time</th>
            <th className="p-3">Subject</th>
            <th className="p-3">Room</th>
          </tr>
        </thead>

        <tbody>
          {schedule.map((item, index) => (
            <tr key={index} className="border-t">
              <td className="p-3">{item.time}</td>
              <td className="p-3">{item.subject}</td>
              <td className="p-3">{item.room}</td>
            </tr>
          ))}
        </tbody>

      </table>

    </div>
  );
}