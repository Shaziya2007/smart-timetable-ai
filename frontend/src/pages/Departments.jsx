import DepartmentHeader from "../components/departments/DepartmentHeader";
import DepartmentCards from "../components/departments/DepartmentCards";
import DepartmentFilters from "../components/departments/DepartmentFilters";
import DepartmentTable from "../components/departments/DepartmentTable";
import DepartmentPagination from "../components/departments/DepartmentPagination";

export default function Departments() {
  return (
    <div className="space-y-6">
      <DepartmentHeader />
      <DepartmentCards />
      <DepartmentFilters />
      <DepartmentTable />
      <DepartmentPagination />
    </div>
  );
}