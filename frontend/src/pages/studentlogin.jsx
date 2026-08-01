import { useNavigate } from "react-router-dom";
import { GraduationCap, Mail, Lock } from "lucide-react";

export default function StudentLogin() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/student-dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 flex justify-center items-center">

      <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md">

        <div className="flex justify-center mb-6">
          <GraduationCap className="text-blue-700" size={60} />
        </div>

        <h1 className="text-3xl font-bold text-center text-blue-700">
          Student Login
        </h1>

        <p className="text-center text-gray-500 mt-2 mb-8">
          Smart Timetable Generator Portal
        </p>

        <div className="space-y-5">

          <div className="flex items-center border rounded-lg px-3">
            <Mail className="text-gray-500" />
            <input
              type="email"
              placeholder="College Email"
              className="w-full p-3 outline-none"
            />
          </div>

          <div className="flex items-center border rounded-lg px-3">
            <Lock className="text-gray-500" />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 outline-none"
            />
          </div>

          <button
            onClick={handleLogin}
            className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-lg font-semibold transition"
          >
            Login
          </button>

        </div>

      </div>

    </div>
  );
}