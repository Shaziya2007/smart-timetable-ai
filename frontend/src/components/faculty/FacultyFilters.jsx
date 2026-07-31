import { Search } from "lucide-react";

export default function FacultyFilters() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 mb-8">

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        {/* Search */}

        <div className="relative">

          <Search
            size={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search Faculty..."
            className="
              w-full
              border
              border-gray-300
              rounded-xl
              pl-12
              pr-4
              py-3
              outline-none
              focus:border-blue-500
              focus:ring-2
              focus:ring-blue-200
            "
          />

        </div>

        {/* Department */}

        <select
          className="
            border
            border-gray-300
            rounded-xl
            px-4
            py-3
            outline-none
            focus:border-blue-500
            focus:ring-2
            focus:ring-blue-200
          "
        >
          <option>All Departments</option>
          <option>Information Technology</option>
          <option>Computer Science</option>
          <option>Artificial Intelligence</option>
          <option>Electronics</option>
          <option>Mechanical</option>
        </select>

        {/* Status */}

        <select
          className="
            border
            border-gray-300
            rounded-xl
            px-4
            py-3
            outline-none
            focus:border-blue-500
            focus:ring-2
            focus:ring-blue-200
          "
        >
          <option>All Status</option>
          <option>Active</option>
          <option>Inactive</option>
        </select>

      </div>

    </div>
  );
}