import { Outlet } from "react-router-dom";
import StudentSidebar from "../components/sidebar/StudentSidebar";
import Navbar from "../components/Navbar";

export default function StudentLayout() {
  return (
    <div className="flex h-screen bg-gray-100">

      <StudentSidebar />

      <div className="flex-1 flex flex-col">

        <Navbar />

        <main className="flex-1 p-6 overflow-auto">
          <Outlet />
        </main>

      </div>

    </div>
  );
}