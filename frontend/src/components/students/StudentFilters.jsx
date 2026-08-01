import { Search } from "lucide-react";

export default function StudentFilters() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6">

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        <div className="relative">

          <Search
            size={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search Student..."
            className="w-full border rounded-xl pl-12 pr-4 py-3 outline-none focus:ring-2 focus:ring-blue-300"
          />

        </div>

        <select className="border rounded-xl px-4 py-3">
          <option>All Departments</option>
          <option>Information Technology</option>
          <option>Computer Science</option>
          <option>Artificial Intelligence</option>
        </select>

        <select className="border rounded-xl px-4 py-3">
          <option>All Years</option>
          <option>1st Year</option>
          <option>2nd Year</option>
          <option>3rd Year</option>
          <option>4th Year</option>
        </select>

      </div>

    </div>
  );
}