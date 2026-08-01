import SubjectHeader from "../components/subjects/SubjectHeader";
import SubjectCards from "../components/subjects/SubjectCards";
import SubjectSummary from "../components/subjects/SubjectSummary";
import SubjectTable from "../components/subjects/SubjectTable";

export default function Subjects() {
  return (
    <div className="space-y-6">
      <SubjectHeader />
      <SubjectCards />
      <SubjectSummary />
      <SubjectTable />
    </div>
  );
}