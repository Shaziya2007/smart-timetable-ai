export default function ReportSummary() {

  const reports = [
    {
      title: "Faculty Workload",
      value: "92%",
      color: "bg-blue-500",
    },
    {
      title: "Room Utilization",
      value: "81%",
      color: "bg-green-500",
    },
    {
      title: "Classes Scheduled",
      value: "248",
      color: "bg-purple-500",
    },
    {
      title: "Timetable Conflicts",
      value: "03",
      color: "bg-red-500",
    },
  ];

  return (

    <div className="bg-white rounded-2xl shadow-lg p-6">

      <h2 className="text-2xl font-bold mb-6">
        Report Summary
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {reports.map((item, index) => (

          <div
            key={index}
            className="border rounded-xl p-5 hover:shadow-lg transition"
          >

            <div className="flex justify-between items-center mb-3">

              <h3 className="font-semibold text-gray-700">
                {item.title}
              </h3>

              <span className="font-bold text-lg">
                {item.value}
              </span>

            </div>

            <div className="w-full bg-gray-200 rounded-full h-3">

              <div
                className={`${item.color} h-3 rounded-full`}
                style={{
                  width:
                    item.title === "Classes Scheduled"
                      ? "95%"
                      : item.value,
                }}
              ></div>

            </div>

          </div>

        ))}

      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="bg-blue-50 rounded-xl p-5">

          <h3 className="font-bold text-blue-700">
            Best Performing Department
          </h3>

          <p className="mt-2 text-lg">
            Computer Science Engineering
          </p>

        </div>

        <div className="bg-green-50 rounded-xl p-5">

          <h3 className="font-bold text-green-700">
            Most Active Faculty
          </h3>

          <p className="mt-2 text-lg">
            Dr. Kumar
          </p>

        </div>

        <div className="bg-red-50 rounded-xl p-5">

          <h3 className="font-bold text-red-700">
            AI Recommendation
          </h3>

          <p className="mt-2">
            Reduce Monday workload by shifting 2 classes to Thursday.
          </p>

        </div>

      </div>

    </div>

  );

}