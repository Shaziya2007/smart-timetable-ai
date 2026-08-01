import { User, GraduationCap, BookOpen, Mail } from "lucide-react";

export default function StudentProfile() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">

      <div className="flex flex-col md:flex-row items-center gap-6">

        <div className="h-28 w-28 rounded-full bg-blue-100 flex items-center justify-center">
          <User size={60} className="text-blue-700" />
        </div>

        <div className="flex-1">

          <h2 className="text-2xl font-bold text-gray-800">
            Rahul Kumar
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">

            <div className="flex items-center gap-3">
              <GraduationCap className="text-blue-600" />
              <div>
                <p className="text-gray-500 text-sm">Department</p>
                <p className="font-semibold">Computer Science Engineering</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <BookOpen className="text-green-600" />
              <div>
                <p className="text-gray-500 text-sm">Semester</p>
                <p className="font-semibold">Semester 5</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <User className="text-purple-600" />
              <div>
                <p className="text-gray-500 text-sm">Register Number</p>
                <p className="font-semibold">22CS101</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="text-red-600" />
              <div>
                <p className="text-gray-500 text-sm">Email</p>
                <p className="font-semibold">
                  rahul@college.edu
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}