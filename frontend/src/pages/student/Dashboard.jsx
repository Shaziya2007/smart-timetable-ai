export default function StudentDashboard() {
  return (
    <div className="p-6">

      <h1 className="text-3xl font-bold">
        Student Dashboard
      </h1>

      <p className="mt-4 text-gray-600">
        Welcome to the Student Portal.
      </p>

      <div className="grid grid-cols-3 gap-6 mt-8">

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-semibold">Today's Classes</h2>
          <p className="text-3xl mt-2">6</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-semibold">Attendance</h2>
          <p className="text-3xl mt-2">92%</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-semibold">Notifications</h2>
          <p className="text-3xl mt-2">4</p>
        </div>

      </div>

    </div>
  );
}