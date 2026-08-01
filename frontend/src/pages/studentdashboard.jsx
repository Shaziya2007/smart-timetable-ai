import StudentHeader from "../components/student/StudentHeader";
import StudentProfile from "../components/student/StudentProfile";
import StudentStats from "../components/student/StudentStats";
import StudentQuickActions from "../components/student/StudentQuickActions";
import StudentTimetable from "../components/student/StudentTimetable";
import StudentSubjects from "../components/student/StudentSubjects";
import StudentAttendance from "../components/student/StudentAttendance";
import StudentAssignments from "../components/student/StudentAssignments";
import StudentNotifications from "../components/student/StudentNotifications";
import StudentCalendar from "../components/student/StudentCalendar";
import StudentUpcomingClasses from "../components/student/StudentUpcomingClasses";

export default function StudentDashboard() {
  return (
    <div className="bg-gray-100 min-h-screen p-6 space-y-6">

      <StudentHeader />

      <StudentProfile />

      <StudentStats />

      <StudentQuickActions />

      <StudentTimetable />

      <StudentSubjects />

      <div className="grid lg:grid-cols-2 gap-6">

        <StudentAttendance />

        <StudentAssignments />

      </div>

      <div className="grid lg:grid-cols-2 gap-6">

        <StudentNotifications />

        <StudentCalendar />

      </div>

      <StudentUpcomingClasses />

    </div>
  );
}