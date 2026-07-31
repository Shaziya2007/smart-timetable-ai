export default function QuickActions() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

      <button className="bg-blue-600 text-white p-4 rounded-xl hover:bg-blue-700">
        Add Faculty
      </button>

      <button className="bg-green-600 text-white p-4 rounded-xl hover:bg-green-700">
        Add Student
      </button>

      <button className="bg-purple-600 text-white p-4 rounded-xl hover:bg-purple-700">
        Generate Timetable
      </button>

      <button className="bg-orange-600 text-white p-4 rounded-xl hover:bg-orange-700">
        Reports
      </button>

    </div>
  );
}