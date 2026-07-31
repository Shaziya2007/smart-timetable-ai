export default function FacultyPagination() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-5 mt-6 flex flex-col md:flex-row justify-between items-center gap-4">

      <div className="text-gray-600">
        Showing <span className="font-semibold">1 - 5</span> of{" "}
        <span className="font-semibold">120</span> Faculty Members
      </div>

      <div className="flex items-center gap-2">

        <button className="px-4 py-2 rounded-lg border hover:bg-gray-100">
          Previous
        </button>

        <button className="w-10 h-10 rounded-lg bg-blue-600 text-white">
          1
        </button>

        <button className="w-10 h-10 rounded-lg border hover:bg-gray-100">
          2
        </button>

        <button className="w-10 h-10 rounded-lg border hover:bg-gray-100">
          3
        </button>

        <button className="px-4 py-2 rounded-lg border hover:bg-gray-100">
          Next
        </button>

      </div>

    </div>
  );
}