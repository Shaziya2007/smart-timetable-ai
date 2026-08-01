import { Outlet } from "react-router-dom";
import FacultySidebar from "../components/sidebar/FacultySidebar";
import Navbar from "../components/Navbar";

export default function FacultyLayout() {
  return (
    <div className="flex h-screen bg-gray-100">

      <FacultySidebar />

      <div className="flex-1 flex flex-col">

        <Navbar />

        <main className="flex-1 p-6 overflow-auto">
          <Outlet />
        </main>

      </div>

    </div>
  );
}