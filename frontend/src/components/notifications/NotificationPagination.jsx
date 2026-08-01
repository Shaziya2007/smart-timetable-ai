export default function NotificationPagination() {
  return (
    <div className="flex items-center justify-between mt-6 bg-white border rounded-xl p-4">
      <p className="text-sm text-gray-600">
        Showing <span className="font-semibold">1</span> to{" "}
        <span className="font-semibold">3</span> of{" "}
        <span className="font-semibold">3</span> notifications
      </p>

      <div className="flex gap-2">
        <button
          className="px-4 py-2 border rounded-lg hover:bg-gray-100 disabled:opacity-50"
          disabled
        >
          Previous
        </button>

        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
          1
        </button>

        <button
          className="px-4 py-2 border rounded-lg hover:bg-gray-100"
          disabled
        >
          Next
        </button>
      </div>
    </div>
  );
}