export default function ReportHeader() {
  return (
    <div className="bg-gradient-to-r from-blue-700 to-cyan-600 text-white rounded-2xl shadow-lg p-8">

      <div className="flex justify-between items-center">

        <div>

          <h1 className="text-4xl font-bold">
            Reports & Analytics
          </h1>

          <p className="mt-2">
            View academic performance and timetable analytics.
          </p>

        </div>

        <div className="space-x-3">

          <button className="bg-white text-blue-700 px-5 py-3 rounded-lg font-semibold">
            Export PDF
          </button>

          <button className="bg-green-500 px-5 py-3 rounded-lg font-semibold">
            Export Excel
          </button>

        </div>

      </div>

    </div>
  );
}