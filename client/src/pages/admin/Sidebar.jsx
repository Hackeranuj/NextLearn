import { ChartNoAxesColumn, SquareLibrary } from "lucide-react";
import React from "react";
import { Link, Outlet } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      {/* Sidebar for small screens: displayed at the top */}
      <div className="block lg:hidden w-full space-y-4 p-4 border-b border-gray-300 dark:border-gray-700">
        <div className="flex justify-evenly">
          <Link to={"dashboard"} className="flex items-center gap-2">
            <ChartNoAxesColumn size={22} />
            <h1>Dashboard</h1>
          </Link>
          <Link to={"course"} className="flex items-center gap-2">
            <SquareLibrary size={22} />
            <h1>Courses</h1>
          </Link>
        </div>
      </div>

      {/* Sidebar for large screens: displayed on the left */}
      <div className="hidden lg:block lg:w-[250px] xl:w-[300px] space-y-8 border-r border-gray-300 dark:border-gray-700 p-5 sticky top-0 h-screen">
        <div className="space-y-4">
          <Link to={"dashboard"} className="flex items-center gap-2">
            <ChartNoAxesColumn size={22} />
            <h1>Dashboard</h1>
          </Link>
          <Link to={"course"} className="flex items-center gap-2">
            <SquareLibrary size={22} />
            <h1>Courses</h1>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-5 sm:p-8 lg:p-10">
        <Outlet />
      </div>
    </div>
  );
};

export default Sidebar;
