import { Pencil, Trash2 } from "lucide-react";

export default function NotificationTable({ notifications }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
      <table className="w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="text-left px-6 py-3">Title</th>
            <th className="text-left px-6 py-3">Message</th>
            <th className="text-left px-6 py-3">Recipient</th>
            <th className="text-left px-6 py-3">Type</th>
            <th className="text-left px-6 py-3">Date</th>
            <th className="text-center px-6 py-3">Actions</th>
          </tr>
        </thead>

        <tbody>
          {notifications.map((notification) => (
            <tr
              key={notification.id}
              className="border-t hover:bg-gray-50"
            >
              <td className="px-6 py-4 font-medium">
                {notification.title}
              </td>

              <td className="px-6 py-4">
                {notification.message}
              </td>

              <td className="px-6 py-4">
                {notification.recipient}
              </td>

              <td className="px-6 py-4">
                <span className="px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-700">
                  {notification.type}
                </span>
              </td>

              <td className="px-6 py-4">
                {notification.date}
              </td>

              <td className="px-6 py-4">
                <div className="flex justify-center gap-3">
                  <button className="text-blue-600 hover:text-blue-800">
                    <Pencil size={18} />
                  </button>

                  <button className="text-red-600 hover:text-red-800">
                    <Trash2 size={18} />
                  </button>
                </div>
              </td>
            </tr>
          ))}

          {notifications.length === 0 && (
            <tr>
              <td
                colSpan="6"
                className="text-center py-8 text-gray-500"
              >
                No notifications found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}