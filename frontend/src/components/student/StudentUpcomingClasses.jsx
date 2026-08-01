import { Clock3, MapPin } from "lucide-react";

const classes = [
  {
    subject: "Operating Systems",
    time: "10:00 AM",
    room: "Lab 2",
  },
  {
    subject: "Computer Networks",
    time: "11:30 AM",
    room: "A204",
  },
  {
    subject: "Java Programming",
    time: "2:00 PM",
    room: "A305",
  },
];

export default function StudentUpcomingClasses() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">

      <h2 className="text-2xl font-bold mb-6">
        ⏰ Upcoming Classes
      </h2>

      <div className="space-y-4">

        {classes.map((item, index) => (

          <div
            key={index}
            className="border rounded-xl p-4 hover:bg-blue-50 transition"
          >

            <h3 className="font-bold text-lg">
              {item.subject}
            </h3>

            <div className="flex gap-6 mt-3 text-gray-600">

              <div className="flex items-center gap-2">

                <Clock3 size={18} />

                {item.time}

              </div>

              <div className="flex items-center gap-2">

                <MapPin size={18} />

                {item.room}

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}