import ClassroomHeader from "../components/classrooms/ClassroomHeader";
import ClassroomCards from "../components/classrooms/ClassroomCards";
import ClassroomSummary from "../components/classrooms/ClassroomSummary";
import ClassroomTable from "../components/classrooms/ClassroomTable";

export default function Classrooms() {
  return (
    <div className="space-y-6">
      <ClassroomHeader />
      <ClassroomCards />
      <ClassroomSummary />
      <ClassroomTable />
    </div>
  );
}