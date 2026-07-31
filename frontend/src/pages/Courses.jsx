import CoursesBanner from "../components/courses/CoursesBanner";
import CoursesHeader from "../components/courses/CoursesHeader";
import CourseStats from "../components/courses/CourseStats";
import CourseFilters from "../components/courses/CourseFilters";
import CourseQuickActions from "../components/courses/CourseQuickActions";
import CourseTable from "../components/courses/CourseTable";
import CourseActivity from "../components/courses/CourseActivity";
import CourseProgress from "../components/courses/CourseProgress";

export default function Courses() {
  return (
    <div className="space-y-6">

      <CoursesBanner />

      <CoursesHeader />

      <CourseStats />

      <CourseQuickActions />

      <CourseFilters />

      <CourseTable />

      <div className="grid lg:grid-cols-2 gap-6">
        <CourseActivity />
        <CourseProgress />
      </div>

    </div>
  );
}