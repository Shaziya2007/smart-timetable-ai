export default function TimetableHeader() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white shadow-lg">

      <div className="flex flex-col lg:flex-row justify-between items-center">

        <div>

          <h1 className="text-4xl font-bold">
            Smart Timetable Generator
          </h1>

          <p className="mt-2 text-blue-100">
            Generate AI-powered conflict-free class schedules.
          </p>

        </div>

        <div className="flex gap-4 mt-6 lg:mt-0">

          <button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:scale-105 transition">
            ✨ Generate Timetable
          </button>

          <button className="bg-green-500 px-6 py-3 rounded-xl font-semibold hover:bg-green-600 transition">
            Export PDF
          </button>

        </div>

      </div>

    </div>
  );
}