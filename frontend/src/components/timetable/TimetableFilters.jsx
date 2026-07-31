export default function TimetableFilters() {
  return (
    <div className="bg-white rounded-xl shadow p-6">

      <div className="grid md:grid-cols-4 gap-4">

        <select className="border rounded-lg p-3">
          <option>Department</option>
          <option>CSE</option>
          <option>IT</option>
          <option>ECE</option>
        </select>

        <select className="border rounded-lg p-3">
          <option>Semester</option>
          <option>1</option>
          <option>3</option>
          <option>5</option>
          <option>7</option>
        </select>

        <select className="border rounded-lg p-3">
          <option>Section</option>
          <option>A</option>
          <option>B</option>
          <option>C</option>
        </select>

        <button className="bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Apply Filters
        </button>

      </div>

    </div>
  );
}