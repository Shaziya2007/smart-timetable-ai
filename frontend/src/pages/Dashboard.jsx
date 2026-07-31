import WelcomeCard from "../components/dashboard/WelcomeCard";
import StatsCards from "../components/dashboard/StatsCards";
import TimetableOverview from "../components/dashboard/TimetableOverview";
import NotificationPanel from "../components/dashboard/NotificationPanel";
import QuickActions from "../components/dashboard/QuickActions";

export default function Dashboard() {
  return (
    <div className="space-y-6">

      <WelcomeCard />

      <StatsCards />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        <div className="lg:col-span-2">
          <TimetableOverview />
        </div>

        <NotificationPanel />

      </div>

      <QuickActions />

    </div>
  );
}