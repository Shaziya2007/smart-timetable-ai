import { Search } from "lucide-react";

export default function DepartmentFilters() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6">

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        <div className="relative">

          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            size={20}
          />

          <input
            type="text"
            placeholder="Search Department..."
            className="w-full border rounded-xl pl-12 pr-4 py-3 outline-none focus:ring-2 focus:ring-blue-300"
          />

        </div>

        <select className="border rounded-xl px-4 py-3">
          <option>All Programs</option>
          <option>UG</option>
          <option>PG</option>
        </select>

        <select className="border rounded-xl px-4 py-3">
          <option>All Status</option>
          <option>Active</option>
          <option>Inactive</option>
        </select>

      </div>

    </div>
  );
}