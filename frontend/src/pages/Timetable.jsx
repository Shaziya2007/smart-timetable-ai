import TimetableHeader from "../components/timetable/TimetableHeader";
import TimetableFilters from "../components/timetable/TimetableFilters";
import TimetableGrid from "../components/timetable/TimetableGrid";
import TimetableStats from "../components/timetable/TimetableStats";
import AIRecommendations from "../components/timetable/AIRecommendations";

export default function Timetable() {
  return (
    <div className="space-y-6">

      <TimetableHeader />

      <TimetableFilters />

      <TimetableGrid />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        <TimetableStats />

        <AIRecommendations />

      </div>

    </div>
  );
}