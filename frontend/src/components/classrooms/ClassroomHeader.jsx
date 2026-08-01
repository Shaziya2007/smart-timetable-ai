export default function ClassroomHeader() {
  return (
    <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-8 text-white shadow-lg">

      <div className="flex justify-between items-center">

        <div>
          <h1 className="text-4xl font-bold">
            Classroom Management
          </h1>

          <p className="mt-2 text-cyan-100">
            Manage classrooms, capacities, facilities and availability.
          </p>
        </div>

        <button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100">
          + Add Classroom
        </button>

      </div>
    </div>
  );
}