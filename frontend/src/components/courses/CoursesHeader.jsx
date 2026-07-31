import { Plus, Download, RefreshCw } from "lucide-react";

export default function CoursesHeader() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center mb-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">Courses</h1>
        <p className="text-gray-500">
          Manage all academic courses offered by the institution.
        </p>
      </div>

      <div className="flex gap-3 mt-4 md:mt-0">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700">
          <Plus size={18} />
          Add Course
        </button>

        <button className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-green-700">
          <Download size={18} />
          Export
        </button>

        <button className="bg-gray-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-800">
          <RefreshCw size={18} />
          Refresh
        </button>
      </div>
    </div>
  );
}