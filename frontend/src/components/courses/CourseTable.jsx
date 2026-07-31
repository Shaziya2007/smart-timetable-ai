const courses = [
  {
    code: "CS301",
    name: "Data Structures",
    dept: "CSE",
    sem: "III",
    credits: 4,
    status: "Active",
  },
  {
    code: "IT205",
    name: "Database Systems",
    dept: "IT",
    sem: "IV",
    credits: 3,
    status: "Active",
  },
  {
    code: "EC102",
    name: "Digital Electronics",
    dept: "ECE",
    sem: "II",
    credits: 4,
    status: "Inactive",
  },
];

export default function CourseTable() {
  return (
    <div className="bg-white rounded-xl shadow overflow-x-auto">
      <table className="w-full">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="p-3">Code</th>
            <th>Name</th>
            <th>Department</th>
            <th>Semester</th>
            <th>Credits</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {courses.map((course, index) => (
            <tr key={index} className="border-b hover:bg-gray-100">
              <td className="p-3">{course.code}</td>
              <td>{course.name}</td>
              <td>{course.dept}</td>
              <td>{course.sem}</td>
              <td>{course.credits}</td>
              <td>
                <span
                  className={`px-3 py-1 rounded-full text-white ${
                    course.status === "Active"
                      ? "bg-green-500"
                      : "bg-red-500"
                  }`}
                >
                  {course.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}