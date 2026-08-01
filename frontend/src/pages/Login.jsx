import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, Lock, GraduationCap } from "lucide-react";
import { useAuth } from "../context/AuthContext";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [role, setRole] = useState("Admin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("http://localhost:5001/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Login failed");
        return;
      }

      login(data); // stores { _id, name, email, role, token } in AuthContext + localStorage

      if (data.role === "admin") navigate("/admin");
      else if (data.role === "faculty") navigate("/faculty");
      else navigate("/student");
    } catch (err) {
      setError("Server error, please try again");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-700 via-blue-600 to-cyan-500 flex justify-center items-center p-6">
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-5xl w-full grid md:grid-cols-2">
        
        <div className="hidden md:flex flex-col justify-center items-center bg-indigo-800 text-white p-10">
          <GraduationCap size={80} />
          <h1 className="text-4xl font-bold mt-6">Smart Timetable AI</h1>
          <p className="mt-4 text-center text-indigo-100">AI Powered Timetable Generation Portal</p>
        </div>

        <div className="p-10">
          <h2 className="text-3xl font-bold mb-2">Welcome Back 👋</h2>
          <p className="text-gray-500 mb-8">Login to continue</p>

          {error && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-xl text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="font-medium">Email</label>
              <div className="flex items-center border rounded-xl mt-2 px-3">
                <User size={18} />
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="w-full p-3 outline-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div>
              <label className="font-medium">Password</label>
              <div className="flex items-center border rounded-xl mt-2 px-3">
                <Lock size={18} />
                <input
                  type="password"
                  placeholder="Enter Password"
                  className="w-full p-3 outline-none"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            <div>
              <label className="font-medium">Login As</label>
              <div className="grid grid-cols-3 gap-3 mt-3">
                {["Admin", "Faculty", "Student"].map((r) => (
                  <button
                    type="button"
                    key={r}
                    onClick={() => setRole(r)}
                    className={`p-3 rounded-xl border font-semibold transition ${
                      role === r ? "bg-indigo-600 text-white" : "hover:bg-indigo-100"
                    }`}
                  >
                    {r}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-700 text-white p-4 rounded-xl font-bold hover:bg-indigo-900 transition"
            >
              LOGIN AS {role}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;