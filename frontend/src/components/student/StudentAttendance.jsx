const attendance = [
  {
    subject: "Data Structures",
    percentage: 95,
  },
  {
    subject: "DBMS",
    percentage: 90,
  },
  {
    subject: "Operating Systems",
    percentage: 88,
  },
  {
    subject: "Java",
    percentage: 93,
  },
  {
    subject: "Computer Networks",
    percentage: 91,
  },
];

export default function StudentAttendance() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">

      <h2 className="text-2xl font-bold mb-6">
        📊 Attendance
      </h2>

      {attendance.map((item, index) => (

        <div key={index} className="mb-5">

          <div className="flex justify-between mb-2">

            <p className="font-medium">{item.subject}</p>

            <p className="font-semibold text-blue-700">
              {item.percentage}%
            </p>

          </div>

          <div className="w-full bg-gray-200 rounded-full h-3">

            <div
              className="bg-blue-600 h-3 rounded-full"
              style={{ width: `${item.percentage}%` }}
            ></div>

          </div>

        </div>

      ))}

    </div>
  );
}