export default function TimetableGrid() {

  const timetable = [
    ["Math", "Physics", "DBMS", "AI", "Break", "OS", "Lab"],
    ["Java", "Math", "AI", "DBMS", "Break", "CN", "Lab"],
    ["OS", "Physics", "Java", "Math", "Break", "DBMS", "CN"],
    ["AI", "CN", "Math", "OS", "Break", "Java", "DBMS"],
    ["DBMS", "AI", "Physics", "Math", "Break", "OS", "Project"],
  ];

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  const slots = [
    "9-10",
    "10-11",
    "11-12",
    "12-1",
    "2-3",
    "3-4",
    "4-5",
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 overflow-auto">

      <table className="w-full border-collapse">

        <thead>

          <tr>

            <th className="border p-3 bg-blue-600 text-white">
              Day
            </th>

            {slots.map((slot) => (
              <th key={slot} className="border p-3 bg-blue-600 text-white">
                {slot}
              </th>
            ))}

          </tr>

        </thead>

        <tbody>

          {days.map((day, index) => (

            <tr key={day}>

              <td className="border p-3 font-bold bg-gray-100">
                {day}
              </td>

              {timetable[index].map((subject, i) => (

                <td
                  key={i}
                  className="border p-3 hover:bg-blue-100 transition text-center"
                >
                  {subject}
                </td>

              ))}

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}