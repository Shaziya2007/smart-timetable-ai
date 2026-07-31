import GuestLectureHeader from "../components/GuestLectures/GuestLectureHeader";
import GuestLectureStats from "../components/GuestLectures/GuestLectureStats";
import GuestLectureTable from "../components/GuestLectures/GuestLectureTable";

export default function GuestLectures() {
  return (
    <div className="space-y-6">

      <GuestLectureHeader />

      <GuestLectureStats />

      <GuestLectureTable />

    </div>
  );
}