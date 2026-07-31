import SubstituteHeader from "../components/substitute/SubstituteHeader";
import SubstituteCards from "../components/substitute/SubstituteCards";
import SubstituteSummary from "../components/substitute/SubstituteSummary";
import SubstituteTable from "../components/substitute/SubstituteTable";

export default function Substitute() {
  return (
    <div className="space-y-6">
      <SubstituteHeader />
      <SubstituteCards />
      <SubstituteSummary />
      <SubstituteTable />
    </div>
  );
}