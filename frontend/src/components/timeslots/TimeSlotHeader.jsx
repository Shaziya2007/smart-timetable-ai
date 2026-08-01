export default function TimeSlotHeader() {
  return (
    <div className="bg-gradient-to-r from-violet-600 to-indigo-600 rounded-2xl shadow-lg p-8 text-white">

      <div className="flex justify-between items-center">

        <div>

          <h1 className="text-4xl font-bold">
            Time Slot Management
          </h1>

          <p className="mt-2 text-violet-100">
            Manage lecture timings, breaks and working hours.
          </p>

        </div>

        <button className="bg-white text-indigo-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100">

          + Add Time Slot

        </button>

      </div>

    </div>
  );
}