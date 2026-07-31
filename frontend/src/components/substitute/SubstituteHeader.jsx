export default function SubstituteHeader() {
  return (
    <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl shadow-lg p-8 text-white">

      <div className="flex justify-between items-center">

        <div>

          <h1 className="text-4xl font-bold">
            Substitute Management
          </h1>

          <p className="mt-2">
            Assign substitute faculty for unavailable teachers.
          </p>

        </div>

        <button className="bg-white text-red-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100">

          + Assign Substitute

        </button>

      </div>

    </div>
  );
}