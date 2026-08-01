export default function TimeSlotSummary() {
  return (

    <div className="grid md:grid-cols-3 gap-6">

      <div className="bg-green-50 rounded-xl p-6">

        <h2 className="text-xl font-bold text-green-700">
          Working Hours
        </h2>

        <p className="text-4xl font-bold mt-3">
          8 Hours
        </p>

      </div>

      <div className="bg-blue-50 rounded-xl p-6">

        <h2 className="text-xl font-bold text-blue-700">
          Lunch Break
        </h2>

        <p className="text-4xl font-bold mt-3">
          45 Min
        </p>

      </div>

      <div className="bg-purple-50 rounded-xl p-6">

        <h2 className="text-xl font-bold text-purple-700">
          AI Recommendation
        </h2>

        <p className="mt-3">
          Keep laboratory sessions after lunch for better resource utilization.
        </p>

      </div>

    </div>

  );
}