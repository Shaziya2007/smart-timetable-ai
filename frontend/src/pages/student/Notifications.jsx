export default function StudentNotifications() {

  const notifications = [
    "Tomorrow's class timing changed",
    "Internal marks updated",
    "Semester timetable released"
  ];


  return (
    <div className="p-6">

      <h1 className="text-3xl font-bold mb-6">
        Notifications
      </h1>


      <div className="space-y-4">

        {notifications.map((note,index)=>(
          <div
            key={index}
            className="bg-white shadow rounded-xl p-5"
          >
            {note}
          </div>
        ))}

      </div>

    </div>
  );
}