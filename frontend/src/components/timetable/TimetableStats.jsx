export default function TimetableStats() {
  return (

    <div className="bg-white rounded-xl shadow-lg p-6">

      <h2 className="text-2xl font-bold mb-6">
        Timetable Statistics
      </h2>

      <div className="space-y-4">

        <div className="flex justify-between">
          <span>Total Classes</span>
          <span className="font-bold">36</span>
        </div>

        <div className="flex justify-between">
          <span>Faculty</span>
          <span className="font-bold">18</span>
        </div>

        <div className="flex justify-between">
          <span>Rooms</span>
          <span className="font-bold">12</span>
        </div>

        <div className="flex justify-between">
          <span>Conflicts</span>
          <span className="font-bold text-red-500">
            0
          </span>
        </div>

      </div>

    </div>

  );
}