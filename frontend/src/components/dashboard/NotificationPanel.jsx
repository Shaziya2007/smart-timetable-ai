const notifications = [
  "Faculty Leave Approved",
  "Room A203 Updated",
  "New Timetable Generated",
  "Guest Lecture Tomorrow",
];

export default function NotificationPanel() {
  return (
    <div className="bg-white rounded-xl shadow p-6">

      <h2 className="text-2xl font-bold mb-4">
        Notifications
      </h2>

      <div className="space-y-3">

        {notifications.map((note, index) => (
          <div
            key={index}
            className="bg-blue-50 rounded-lg p-3"
          >
            {note}
          </div>
        ))}

      </div>

    </div>
  );
}