export default function ClassroomSummary() {
  return (
    <div className="grid md:grid-cols-3 gap-6">

      <div className="bg-blue-50 rounded-xl p-6">
        <h2 className="text-xl font-bold text-blue-700">
          Occupancy Rate
        </h2>

        <p className="text-4xl font-bold mt-3">
          88%
        </p>
      </div>

      <div className="bg-green-50 rounded-xl p-6">
        <h2 className="text-xl font-bold text-green-700">
          Smart Classrooms
        </h2>

        <p className="text-4xl font-bold mt-3">
          18
        </p>
      </div>

      <div className="bg-purple-50 rounded-xl p-6">
        <h2 className="text-xl font-bold text-purple-700">
          AI Suggestion
        </h2>

        <p className="mt-3">
          Shift Lab-4 practicals to Room B204 for better utilization.
        </p>
      </div>

    </div>
  );
}