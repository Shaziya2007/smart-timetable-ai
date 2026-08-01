import { Search } from "lucide-react";

export default function NotificationFilters({ onAdd }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border p-4 mb-6">
      <div className="flex flex-col md:flex-row gap-4 justify-between">
        {/* Search Bar */}
        <div className="relative w-full md:w-1/2">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            placeholder="Search notifications..."
            className="w-full border rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Filter */}
        <select className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="">All Types</option>
          <option value="Announcement">Announcement</option>
          <option value="Success">Success</option>
          <option value="Update">Update</option>
          <option value="Reminder">Reminder</option>
        </select>

        {/* Add Notification Button */}
        <button
             onClick={onAdd}
             className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
            >
            + Add Notification
            </button>
      </div>
    </div>
  );
}