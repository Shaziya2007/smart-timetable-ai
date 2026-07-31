import { Pencil, Trash2, Eye } from "lucide-react";


export default function FacultyTable({ faculty }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden">

      <div className="overflow-x-auto">

        <table className="min-w-full">

          <thead className="bg-blue-600 text-white">

            <tr>

              <th className="px-6 py-4 text-left">Faculty</th>

              <th className="px-6 py-4 text-left">Department</th>

              <th className="px-6 py-4 text-left">Email</th>

              <th className="px-6 py-4 text-left">Phone</th>

              <th className="px-6 py-4 text-left">Status</th>

              <th className="px-6 py-4 text-center">Actions</th>

            </tr>

          </thead>

          <tbody>

            {faculty.map((faculty) => (

              <tr
                key={faculty.id}
                className="border-b hover:bg-gray-50 transition"
              >

                <td className="px-6 py-4">

                  <div className="flex items-center gap-3">

                    <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">

                      {faculty.name.charAt(4)}

                    </div>

                    <div>

                      <h3 className="font-semibold">

                        {faculty.name}

                      </h3>

                    </div>

                  </div>

                </td>

                <td className="px-6 py-4">

                  {faculty.department}

                </td>

                <td className="px-6 py-4">

                  {faculty.email}

                </td>

                <td className="px-6 py-4">

                  {faculty.phone}

                </td>

                <td className="px-6 py-4">

                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      faculty.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {faculty.status}
                  </span>

                </td>

                <td className="px-6 py-4">

                  <div className="flex justify-center gap-3">

                    <button className="text-blue-600 hover:text-blue-800">

                      <Eye size={20} />

                    </button>

                    <button className="text-green-600 hover:text-green-800">

                      <Pencil size={20} />

                    </button>

                    <button className="text-red-600 hover:text-red-800">

                      <Trash2 size={20} />

                    </button>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}