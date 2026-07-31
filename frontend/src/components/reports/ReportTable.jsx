export default function ReportTable() {

  const reports = [

    {
      dept: "CSE",
      faculty: 25,
      students: 420,
      subjects: 32
    },

    {
      dept: "IT",
      faculty: 18,
      students: 300,
      subjects: 26
    },

    {
      dept: "ECE",
      faculty: 22,
      students: 380,
      subjects: 29
    }

  ];

  return (

    <div className="bg-white rounded-xl shadow-lg p-6 overflow-auto">

      <h2 className="text-2xl font-bold mb-6">

        Department Summary

      </h2>

      <table className="w-full">

        <thead>

          <tr className="bg-blue-700 text-white">

            <th className="p-3">Department</th>

            <th className="p-3">Faculty</th>

            <th className="p-3">Students</th>

            <th className="p-3">Subjects</th>

          </tr>

        </thead>

        <tbody>

          {

            reports.map((item) => (

              <tr
                key={item.dept}
                className="border-b hover:bg-gray-100"
              >

                <td className="p-3">

                  {item.dept}

                </td>

                <td className="p-3">

                  {item.faculty}

                </td>

                <td className="p-3">

                  {item.students}

                </td>

                <td className="p-3">

                  {item.subjects}

                </td>

              </tr>

            ))

          }

        </tbody>

      </table>

    </div>

  );

}