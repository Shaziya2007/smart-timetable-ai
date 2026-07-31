import ReportHeader from "../components/reports/ReportHeader";
import ReportCards from "../components/reports/ReportCards";
import ReportCharts from "../components/reports/ReportSummary";
import ReportTable from "../components/reports/ReportTable";

export default function Reports() {
  return (
    <div className="space-y-6">

      <ReportHeader />

      <ReportCards />

      <ReportCharts />

      <ReportTable />

    </div>
  );
}