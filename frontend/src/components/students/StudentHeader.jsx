export default function StudentHeader() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center">

      <div>

        <h1 className="text-4xl font-bold text-slate-800">
          Student Management
        </h1>

        <p className="text-gray-500 mt-2">
          Manage student records, departments and academic information.
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
          hover:scale-105
        "
      >
        + Add Student
      </button>

    </div>
  );
}