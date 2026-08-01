import { Eye, Pencil, Trash2 } from "lucide-react";

const students = [
  {
    id: 1,
    name: "Shaziya Fathima",
    regNo: "22IT001",
    department: "Information Technology",
    year: "III Year",
    cgpa: "9.10",
  },
  {
    id: 2,
    name: "Rahul Kumar",
    regNo: "22CS015",
    department: "Computer Science",
    year: "III Year",
    cgpa: "8.82",
  },
  {
    id: 3,
    name: "Aisha Khan",
    regNo: "22AI010",
    department: "Artificial Intelligence",
    year: "II Year",
    cgpa: "9.30",
  },
];

export default function StudentTable() {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden">

      <table className="w-full">

        <thead className="bg-blue-600 text-white">

          <tr>

            <th className="p-4 text-left">Name</th>
            <th className="p-4 text-left">Register No</th>
            <th className="p-4 text-left">Department</th>
            <th className="p-4 text-left">Year</th>
            <th className="p-4 text-left">CGPA</th>
            <th className="p-4 text-center">Actions</th>

          </tr>

        </thead>

        <tbody>

          {students.map((student) => (

            <tr key={student.id} className="border-b hover:bg-gray-50">

              <td className="p-4">{student.name}</td>

              <td className="p-4">{student.regNo}</td>

              <td className="p-4">{student.department}</td>

              <td className="p-4">{student.year}</td>

              <td className="p-4">{student.cgpa}</td>

              <td className="p-4">

                <div className="flex justify-center gap-3">

                  <Eye className="text-blue-600 cursor-pointer" size={20} />

                  <Pencil className="text-green-600 cursor-pointer" size={20} />

                  <Trash2 className="text-red-600 cursor-pointer" size={20} />

                </div>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}