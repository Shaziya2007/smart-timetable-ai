export default function FacultyNotifications() {

  const notifications = [
    "Faculty meeting at 3:00 PM",
    "Submit attendance before 5:00 PM",
    "Timetable updated for Semester V",
  ];

  return (
    <div className="p-6">

      <h1 className="text-3xl font-bold mb-6">
        Notifications
      </h1>

      <div className="space-y-4">

        {notifications.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow p-5"
          >
            {item}
          </div>
        ))}

      </div>

    </div>
  );
}