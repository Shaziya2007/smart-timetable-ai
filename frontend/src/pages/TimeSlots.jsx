import TimeSlotHeader from "../components/timeslots/TimeSlotHeader";
import TimeSlotCards from "../components/timeslots/TimeSlotCards";
import TimeSlotSummary from "../components/timeslots/TimeSlotSummary";
import TimeSlotTable from "../components/timeslots/TimeSlotTable";

export default function TimeSlots() {
  return (
    <div className="space-y-6">
      <TimeSlotHeader />
      <TimeSlotCards />
      <TimeSlotSummary />
      <TimeSlotTable />
    </div>
  );
}