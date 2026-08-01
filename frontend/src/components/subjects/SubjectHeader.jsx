export default function SubjectHeader() {
  return (
    <div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl shadow-lg p-8 text-white">

      <div className="flex justify-between items-center">

        <div>

          <h1 className="text-4xl font-bold">
            Subject Management
          </h1>

          <p className="mt-2">
            Manage all subjects offered by the institution.
          </p>

        </div>

        <button className="bg-white text-indigo-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100">

          + Add Subject

        </button>

      </div>

    </div>
  );
}