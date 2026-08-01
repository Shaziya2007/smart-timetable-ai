export default function MyTimetable() {

  const timetable = [
    {
      time: "9:00 AM - 10:00 AM",
      subject: "Data Structures",
      room: "C101"
    },
    {
      time: "10:00 AM - 11:00 AM",
      subject: "Database Management",
      room: "C202"
    },
    {
      time: "1:00 PM - 2:00 PM",
      subject: "Web Technology",
      room: "Lab 2"
    }
  ];


  return (
    <div className="p-6">

      <h1 className="text-3xl font-bold mb-6">
        My Timetable
      </h1>


      <table className="w-full bg-white rounded-xl shadow">

        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 text-left">
              Time
            </th>

            <th className="p-3 text-left">
              Subject
            </th>

            <th className="p-3 text-left">
              Room
            </th>
          </tr>
        </thead>


        <tbody>

          {timetable.map((item,index)=>(
            <tr key={index} className="border-t">

              <td className="p-3">
                {item.time}
              </td>

              <td className="p-3">
                {item.subject}
              </td>

              <td className="p-3">
                {item.room}
              </td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}