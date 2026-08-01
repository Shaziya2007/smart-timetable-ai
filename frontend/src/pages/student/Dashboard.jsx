export default function StudentDashboard() {
  return (
    <div className="p-6">

      <h1 className="text-3xl font-bold">
        Student Dashboard
      </h1>

      <p className="text-gray-500 mt-2">
        Welcome to Smart Timetable Student Portal
      </p>


      <div className="grid grid-cols-3 gap-6 mt-8">

        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-gray-500">
            Today's Classes
          </h2>

          <p className="text-4xl font-bold mt-3">
            6
          </p>
        </div>


        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-gray-500">
            Attendance
          </h2>

          <p className="text-4xl font-bold mt-3">
            92%
          </p>
        </div>


        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-gray-500">
            Notifications
          </h2>

          <p className="text-4xl font-bold mt-3">
            4
          </p>
        </div>

      </div>

    </div>
  );
}