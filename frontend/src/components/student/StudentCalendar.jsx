import { CalendarDays } from "lucide-react";

const events = [
  {
    date: "02 Aug",
    event: "Internal Assessment - DBMS",
  },
  {
    date: "05 Aug",
    event: "Guest Lecture - AI",
  },
  {
    date: "12 Aug",
    event: "Mini Project Review",
  },
  {
    date: "18 Aug",
    event: "Semester Lab Exam",
  },
];

export default function StudentCalendar() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">

      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">

        <CalendarDays />

        Academic Calendar

      </h2>

      <div className="space-y-4">

        {events.map((item, index) => (

          <div
            key={index}
            className="flex justify-between border-b pb-3"
          >

            <span className="font-semibold text-blue-700">
              {item.date}
            </span>

            <span>{item.event}</span>

          </div>

        ))}

      </div>

    </div>
  );
}