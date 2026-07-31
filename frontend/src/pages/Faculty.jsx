import { useState } from "react";

import FacultyHeader from "../components/faculty/FacultyHeader";
import FacultyCards from "../components/faculty/FacultyCards";
import FacultyFilters from "../components/faculty/FacultyFilters";
import FacultyTable from "../components/faculty/FacultyTable";
import FacultyPagination from "../components/faculty/FacultyPagination";

export default function Faculty() {

  const [faculty] = useState([
    {
      id: 1,
      name: "Dr. Ananya Rao",
      department: "Information Technology",
      email: "ananya@college.edu",
      phone: "+91 9876543210",
      status: "Active",
    },
    {
      id: 2,
      name: "Dr. Rahul Sharma",
      department: "Computer Science",
      email: "rahul@college.edu",
      phone: "+91 9123456789",
      status: "Active",
    },
    {
      id: 3,
      name: "Dr. Priya Nair",
      department: "Artificial Intelligence",
      email: "priya@college.edu",
      phone: "+91 9988776655",
      status: "Inactive",
    },
    {
      id: 4,
      name: "Dr. Arjun Kumar",
      department: "Electronics",
      email: "arjun@college.edu",
      phone: "+91 9870012345",
      status: "Active",
    },
    {
      id: 5,
      name: "Dr. Meera Iyer",
      department: "Mechanical",
      email: "meera@college.edu",
      phone: "+91 9090909090",
      status: "Active",
    },
  ]);
  const [searchTerm, setSearchTerm] = useState("");
  const filteredFaculty = faculty.filter((item) =>
  item.name.toLowerCase().includes(searchTerm.toLowerCase())
);

  return (
    <div className="space-y-6">

      <FacultyHeader />

      <FacultyCards />

      <FacultyFilters />

      <FacultyTable faculty={faculty} />

      <FacultyPagination />

    </div>
  );
}