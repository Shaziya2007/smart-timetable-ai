export default function FacultyHeader() {
  return (
    <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8">

      <div>

        <h1 className="text-4xl font-bold text-slate-800">
          Faculty Management
        </h1>

        <p className="text-gray-500 mt-2 text-lg">
          Manage faculty members, departments and teaching assignments.
        </p>

      </div>

      <button
        className="
          mt-5
          md:mt-0
          bg-blue-600
          hover:bg-blue-700
          text-white
          px-6
          py-3
          rounded-xl
          font-semibold
          shadow-lg
          transition-all
          duration-300
          hover:scale-105
        "
      >
        + Add Faculty
      </button>

    </div>
  );
}