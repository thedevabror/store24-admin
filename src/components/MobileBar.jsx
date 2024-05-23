import React from "react";
import {
  FaBlogger,
  FaChartBar,
  FaCreativeCommonsSampling,
  FaJediOrder,
  FaProductHunt,
  FaUser,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const MobileBar = () => {
  return (
    <div className="h-[60px] fixed z-10 w-full top-[93.2vh] md:hidden min-[400px]:block  bg-slate-600">
      <div className="flex items-center p-2 justify-between">
        {/* <div className="border rounded-md px-2 py-2"> */}
        <NavLink
          to=""
          className={({ isActive }) =>
            isActive
              ? "flex items-center border-[#6d6b6b] rounded-md px-2 py-2 bg-[#6d6b6b]"
              : "flex items-center border text-white hover:text-gray-100 hover:bg-gray-700"
          }
        >
          <FaChartBar className="text-[#fff]" />
        </NavLink>
        <NavLink
          to="user"
          className={({ isActive }) =>
            isActive
              ? "flex items-center border-[#6d6b6b] rounded-md px-2 py-2 bg-[#6d6b6b]"
              : "flex items-center border text-white rounded-md px-2 py-2 hover:text-gray-100 hover:bg-gray-700"
          }
        >
          <FaUser className="text-[#fff]" />
        </NavLink>
        <NavLink
          to="product"
          className={({ isActive }) =>
            isActive
              ? "flex items-center border-[#6d6b6b] rounded-md px-2 py-2 bg-[#6d6b6b]"
              : "flex items-center border text-white hover:text-gray-100 rounded-md px-2 py-2 hover:bg-gray-700"
          }
        >
          <FaProductHunt className="text-[#fff]" />
        </NavLink>
        <NavLink
          to="blog"
          className={({ isActive }) =>
            isActive
              ? "flex items-center border-[#6d6b6b] rounded-md px-2 py-2 bg-[#6d6b6b]"
              : "flex items-center border text-white hover:text-gray-100 rounded-md px-2 py-2 hover:bg-gray-700"
          }
        >
          <FaBlogger className="text-[#fff]" />
        </NavLink>
        <NavLink
          to="orders"
          className={({ isActive }) =>
            isActive
              ? "flex items-center border-[#6d6b6b] rounded-md px-2 py-2 bg-[#6d6b6b]"
              : "flex items-center border text-white hover:text-gray-100 rounded-md px-2 py-2 hover:bg-gray-700"
          }
        >
          <FaJediOrder className="text-[#fff]" />
        </NavLink>
        <NavLink
          to="categories"
          className={({ isActive }) =>
            isActive
              ? "flex items-center border-[#6d6b6b] rounded-md px-2 py-2 bg-[#6d6b6b]"
              : "flex items-center border text-white hover:text-gray-100 rounded-md px-2 py-2 hover:bg-gray-700"
          }
        >
          <FaCreativeCommonsSampling className="text-[#fff]" />
        </NavLink>
      </div>
    </div>
  );
};

export default MobileBar;
