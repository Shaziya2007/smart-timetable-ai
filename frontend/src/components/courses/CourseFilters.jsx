export default function CourseFilters() {
  return (
    <div className="bg-white rounded-xl shadow p-5 mb-6 grid md:grid-cols-4 gap-4">
      <input
        type="text"
        placeholder="Search Course..."
        className="border rounded-lg p-3"
      />

      <select className="border rounded-lg p-3">
        <option>Department</option>
        <option>CSE</option>
        <option>IT</option>
        <option>ECE</option>
      </select>

      <select className="border rounded-lg p-3">
        <option>Semester</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </select>

      <select className="border rounded-lg p-3">
        <option>Status</option>
        <option>Active</option>
        <option>Inactive</option>
      </select>
    </div>
  );
}