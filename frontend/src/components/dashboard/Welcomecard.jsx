import { CalendarDays, Sparkles, Clock3 } from "lucide-react";
import { useEffect, useState } from "react";

export default function WelcomeCard() {

  const [time, setTime] = useState(new Date());

  useEffect(() => {

    const timer = setInterval(() => {

      setTime(new Date());

    },1000);

    return ()=>clearInterval(timer);

  },[]);

  return (

    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 text-white p-8 shadow-2xl">

      {/* Background Circles */}

      <div className="absolute -top-10 -right-10 w-56 h-56 rounded-full bg-white/10 blur-2xl"></div>

      <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-cyan-400/10 blur-xl"></div>

      <div className="relative flex flex-col lg:flex-row justify-between items-center">

        <div>

          <h1 className="text-4xl font-bold">

            👋 Welcome Back, Admin

          </h1>

          <p className="mt-3 text-blue-100 text-lg">

            Smart Timetable Generator Portal

          </p>

          <div className="flex gap-6 mt-6 flex-wrap">

            <div className="flex items-center gap-2">

              <CalendarDays size={20}/>

              {time.toDateString()}

            </div>

            <div className="flex items-center gap-2">

              <Clock3 size={20}/>

              {time.toLocaleTimeString()}

            </div>

          </div>

          <div className="mt-8 flex gap-4 flex-wrap">

            <button className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-xl hover:scale-105 duration-300">

              Generate Timetable

            </button>

            <button className="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-blue-700 duration-300">

              View Reports

            </button>

          </div>

        </div>

        <div className="hidden lg:block">

          <Sparkles size={170} className="opacity-80 animate-pulse"/>

        </div>

      </div>

    </div>

  );

}