import { FileText, Clock } from "lucide-react";

const assignments = [
  {
    subject: "Data Structures",
    title: "Linked List Implementation",
    due: "02 Aug 2026",
    status: "Pending",
  },
  {
    subject: "DBMS",
    title: "Normalization Report",
    due: "05 Aug 2026",
    status: "Submitted",
  },
  {
    subject: "Java Programming",
    title: "GUI Application",
    due: "08 Aug 2026",
    status: "Pending",
  },
];

export default function StudentAssignments() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">

      <h2 className="text-2xl font-bold mb-6">
        📝 Assignments
      </h2>

      <div className="space-y-4">

        {assignments.map((item, index) => (

          <div
            key={index}
            className="border rounded-xl p-4 hover:shadow-md transition"
          >

            <div className="flex justify-between">

              <div>

                <h3 className="font-bold text-lg">
                  {item.title}
                </h3>

                <p className="text-gray-500">
                  {item.subject}
                </p>

              </div>

              <span
                className={`px-3 py-1 rounded-full text-sm ${
                  item.status === "Submitted"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {item.status}
              </span>

            </div>

            <div className="flex items-center gap-2 mt-3 text-gray-600">

              <Clock size={18} />

              Due: {item.due}

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}