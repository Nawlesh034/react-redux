import { useState } from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {

    
  return (
    
    <div className="md:flex md:flex-col md:gap-6 hidden md:max-w-64 my-10 ">
      {/* Dashboard */}
      <NavLink
        to="/"
        className={({ isActive }) =>
          `flex items-center gap-x-2 text-lg font-bold px-4 py-2 rounded-lg transition-all ${
            isActive
              ? "text-white bg-blue-500 border-l-4 border-blue-700"
              : "text-gray-400 hover:text-gray-600 hover:bg-gray-100"
          }`
        }
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chart-no-axes-column">
          <line x1="18" x2="18" y1="20" y2="10" />
          <line x1="12" x2="12" y1="20" y2="4" />
          <line x1="6" x2="6" y1="20" y2="14" />
        </svg>
        Dashboard
      </NavLink>

      {/* Skill Test */}
      <NavLink
        to="/skill-test"
        className={({ isActive }) =>
          `flex items-center gap-x-2 text-lg font-bold px-4 py-2 rounded-lg transition-all ${
            isActive
              ? "text-white bg-blue-500 border-l-4 border-blue-700"
              : "text-gray-400 hover:text-gray-600 hover:bg-gray-100"
          }`
        }
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-award">
          <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
          <circle cx="12" cy="8" r="6" />
        </svg>
        Skill Test
      </NavLink>

      {/* Internship */}
      <NavLink
        to="/internship"
        className={({ isActive }) =>
          `flex items-center gap-x-2 text-lg font-bold px-4 py-2 rounded-lg transition-all ${
            isActive
              ? "text-white bg-blue-500 border-l-4 border-blue-700"
              : "text-gray-400 hover:text-gray-600 hover:bg-gray-100"
          }`
        }
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sticky-note">
          <path d="M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z" />
          <path d="M15 3v4a2 2 0 0 0 2 2h4" />
        </svg>
        Internship
      </NavLink>
    </div>
  );
};

export default Sidebar;
