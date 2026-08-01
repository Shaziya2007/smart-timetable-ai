export default function SubjectTable() {

  const subjects = [

    {
      code: "CS301",
      name: "Data Structures",
      dept: "CSE",
      credits: 4,
      faculty: "Dr. Kumar"
    },

    {
      code: "CS302",
      name: "Artificial Intelligence",
      dept: "CSE",
      credits: 3,
      faculty: "Dr. Priya"
    },

    {
      code: "IT205",
      name: "Database Systems",
      dept: "IT",
      credits: 4,
      faculty: "Mr. Arun"
    }

  ];

  return (

    <div className="bg-white rounded-xl shadow-lg p-6 overflow-auto">

      <div className="flex justify-between items-center mb-6">

        <h2 className="text-2xl font-bold">

          Subject List

        </h2>

        <input
          type="text"
          placeholder="Search Subject..."
          className="border rounded-lg px-4 py-2"
        />

      </div>

      <table className="w-full">

        <thead>

          <tr className="bg-indigo-600 text-white">

            <th className="p-3">Code</th>

            <th className="p-3">Subject</th>

            <th className="p-3">Department</th>

            <th className="p-3">Credits</th>

            <th className="p-3">Faculty</th>

            <th className="p-3">Action</th>

          </tr>

        </thead>

        <tbody>

          {subjects.map((subject, index) => (

            <tr
              key={index}
              className="border-b hover:bg-gray-100"
            >

              <td className="p-3">{subject.code}</td>

              <td className="p-3">{subject.name}</td>

              <td className="p-3">{subject.dept}</td>

              <td className="p-3">{subject.credits}</td>

              <td className="p-3">{subject.faculty}</td>

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