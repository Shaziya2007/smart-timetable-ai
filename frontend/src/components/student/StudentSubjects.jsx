const subjects = [
  {
    code: "CS301",
    name: "Data Structures",
    faculty: "Dr. Kumar",
    credits: 4,
  },
  {
    code: "CS302",
    name: "Database Management",
    faculty: "Dr. Priya",
    credits: 4,
  },
  {
    code: "CS303",
    name: "Operating Systems",
    faculty: "Dr. Rahul",
    credits: 3,
  },
  {
    code: "CS304",
    name: "Java Programming",
    faculty: "Dr. Meena",
    credits: 4,
  },
];

export default function StudentSubjects() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">

      <h2 className="text-2xl font-bold mb-6">
        📚 My Subjects
      </h2>

      <div className="grid md:grid-cols-2 gap-5">

        {subjects.map((subject, index) => (

          <div
            key={index}
            className="border rounded-xl p-5 hover:shadow-lg transition"
          >

            <h3 className="text-xl font-bold text-blue-700">
              {subject.name}
            </h3>

            <p className="text-gray-500 mt-2">
              {subject.code}
            </p>

            <p className="mt-3">
              <span className="font-semibold">
                Faculty:
              </span>{" "}
              {subject.faculty}
            </p>

            <p className="mt-2">
              <span className="font-semibold">
                Credits:
              </span>{" "}
              {subject.credits}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}