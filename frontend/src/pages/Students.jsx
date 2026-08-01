import StudentHeader from "../components/students/StudentHeader";
import StudentCards from "../components/students/StudentCards";
import StudentFilters from "../components/students/StudentFilters";
import StudentTable from "../components/students/StudentTable";
import StudentPagination from "../components/students/StudentPagination";

export default function Students() {
  return (
    <div className="space-y-6">

      <StudentHeader />

      <StudentCards />

      <StudentFilters />

      <StudentTable />

      <StudentPagination />

    </div>
  );
}