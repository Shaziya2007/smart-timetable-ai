import { useEffect, useState } from "react";
import { Eye, Pencil, Trash2 } from "lucide-react";
import { useAuth } from "../../context/AuthContext";

export default function DepartmentTable() {
  const { user } = useAuth();
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const res = await fetch("http://localhost:5001/api/departments", {
          headers: {
            Authorization: `Bearer ${user?.token}`,
          },
        });
        const data = await res.json();
        setDepartments(data);
      } catch (error) {
        console.error("Failed to fetch departments:", error);
      }
    };

    if (user?.token) fetchDepartments();
  }, [user]);

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
            <tr key={dept._id} className="border-b hover:bg-gray-50">
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