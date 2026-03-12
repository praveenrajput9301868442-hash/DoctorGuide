import React from "react";
import { Link, NavLink } from "react-router-dom";
import { HomeIcon, ClipboardClockIcon, Sparkles, UserIcon } from "lucide-react";

export default function NavBar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-indigo-200 transition-transform group-hover:scale-110">
            <Sparkles size={24} fill="currentColor" />
          </div>
          <div>
            <h2 className="text-xl font-bold bg-clip-text text-transparent bg-linear-to-r from-indigo-600 to-violet-600 leading-tight">
              DoctorGuide
            </h2>
            <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
              AI-Powered Wellness
            </p>
          </div>
        </Link>

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center gap-1">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "text-indigo-600 bg-indigo-50"
                    : "text-slate-600 hover:text-indigo-600 hover:bg-slate-50"
                }`
              }
            >
              <HomeIcon size={18} />
              <span>Home</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/doctors"
              className={({ isActive }) =>
                `flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "text-indigo-600 bg-indigo-50"
                    : "text-slate-600 hover:text-indigo-600 hover:bg-slate-50"
                }`
              }
            >
              <ClipboardClockIcon size={18} />
              <span>Find Doctors</span>
            </NavLink>
          </li>

          <li className="ml-4">
            <NavLink
              to="/suggest"
              className={({ isActive }) =>
                `flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${
                  isActive
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-200"
                    : "bg-indigo-50 text-indigo-600 hover:bg-indigo-600 hover:text-white hover:shadow-lg hover:shadow-indigo-100"
                }`
              }
            >
              <Sparkles size={18} />
              <span>Ask AI Specialist</span>
            </NavLink>
          </li>
        </ul>

        {/* Mobile menu toggle (simplified for now) */}
        <button className="md:hidden p-2 text-slate-600">
          <UserIcon size={24} />
        </button>
      </div>
    </nav>
  );
}
