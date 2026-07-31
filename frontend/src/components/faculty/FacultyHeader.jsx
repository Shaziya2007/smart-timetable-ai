export default function FacultyHeader() {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">

      <div>

        <h1 className="text-4xl font-bold text-gray-800">
          Faculty Management
        </h1>

        <p className="text-gray-500 mt-2">
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
        transition
        duration-300
        "
      >
        + Add Faculty
      </button>

    </div>
  );
}