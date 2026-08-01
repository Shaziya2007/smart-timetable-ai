import { Eye, Pencil, Trash2 } from "lucide-react";

const departments = [
  {
    id: 1,
    name: "Information Technology",
    hod: "Dr. Ananya Rao",
    faculty: 24,
    students: 480,
    status: "Active",
  },
  {
    id: 2,
    name: "Computer Science",
    hod: "Dr. Rahul Sharma",
    faculty: 30,
    students: 520,
    status: "Active",
  },
  {
    id: 3,
    name: "Artificial Intelligence",
    hod: "Dr. Priya Nair",
    faculty: 18,
    students: 300,
    status: "Active",
  },
];

export default function DepartmentTable() {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden">

      <table className="w-full">

        <thead className="bg-blue-600 text-white">

          <tr>
            <th className="p-4 text-left">Department</th>
            <th className="p-4 text-left">HOD</th>
            <th className="p-4 text-left">Faculty</th>
            <th className="p-4 text-left">Students</th>
            <th className="p-4 text-left">Status</th>
            <th className="p-4 text-center">Actions</th>
          </tr>

        </thead>

        <tbody>

          {departments.map((dept) => (

            <tr key={dept.id} className="border-b hover:bg-gray-50">

              <td className="p-4">{dept.name}</td>

              <td className="p-4">{dept.hod}</td>

              <td className="p-4">{dept.faculty}</td>

              <td className="p-4">{dept.students}</td>

              <td className="p-4">
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                  {dept.status}
                </span>
              </td>

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