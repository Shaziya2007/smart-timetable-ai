export default function SubstituteTable() {

  const data = [

    {
      faculty: "Dr. Kumar",
      substitute: "Dr. Ravi",
      subject: "DBMS",
      date: "10 Aug",
      status: "Approved"
    },

    {
      faculty: "Ms. Priya",
      substitute: "Mr. Arun",
      subject: "AI",
      date: "12 Aug",
      status: "Pending"
    }

  ];

  return (

    <div className="bg-white rounded-xl shadow-lg p-6 overflow-auto">

      <h2 className="text-2xl font-bold mb-6">

        Substitute Requests

      </h2>

      <table className="w-full">

        <thead>

          <tr className="bg-indigo-500 text-white">

            <th className="p-3">Faculty</th>

            <th className="p-3">Substitute</th>

            <th className="p-3">Subject</th>

            <th className="p-3">Date</th>

            <th className="p-3">Status</th>

          </tr>

        </thead>

        <tbody>

          {data.map((row, index) => (

            <tr key={index} className="border-b hover:bg-gray-100">

              <td className="p-3">{row.faculty}</td>

              <td className="p-3">{row.substitute}</td>

              <td className="p-3">{row.subject}</td>

              <td className="p-3">{row.date}</td>

              <td className="p-3">

                <span
                  className={`px-3 py-1 rounded-full text-white ${
                    row.status === "Approved"
                      ? "bg-green-500"
                      : "bg-yellow-500"
                  }`}
                >
                  {row.status}
                </span>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

}