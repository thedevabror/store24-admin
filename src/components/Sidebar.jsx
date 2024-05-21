import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaUser,
  FaProductHunt,
  FaBlogger,
  FaChartBar,
  FaChartPie,
  FaFirstOrder,
  FaJediOrder,
  FaCreativeCommonsSampling,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="h-screen fixed bg-gray-800 text-white w-[20%]">
      <div className="p-6 text-center">
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </div>
      <nav className="mt-10">
        <NavLink
          to=""
          className={({ isActive }) =>
            isActive
              ? "flex items-center py-2 px-8 bg-[#6d6b6b]"
              : "flex items-center py-2 px-8 text-gray-400 hover:text-gray-100 hover:bg-gray-700"
          }
        >
          <FaChartBar className="mr-3" /> Dashboard
        </NavLink>
        <NavLink
          to="user"
          className={({ isActive }) =>
            isActive
              ? "flex items-center py-2 px-8 bg-[#6d6b6b]"
              : "flex items-center py-2 px-8 text-gray-400 hover:text-gray-100 hover:bg-gray-700"
          }
        >
          <FaUser className="mr-3" /> User
        </NavLink>
        <NavLink
          to="product"
          className={({ isActive }) =>
            isActive
              ? "flex items-center py-2 px-8 bg-[#6d6b6b]"
              : "flex items-center py-2 px-8 text-gray-400 hover:text-gray-100 hover:bg-gray-700"
          }
        >
          <FaProductHunt className="mr-3" /> Product
        </NavLink>
        <NavLink
          to="blog"
          className={({ isActive }) =>
            isActive
              ? "flex items-center py-2 px-8 bg-[#6d6b6b]"
              : "flex items-center py-2 px-8 text-gray-400 hover:text-gray-100 hover:bg-gray-700"
          }
        >
          <FaBlogger className="mr-3" /> Blog
        </NavLink>
        <NavLink
          to="orders"
          className={({ isActive }) =>
            isActive
              ? "flex items-center py-2 px-8 bg-[#6d6b6b]"
              : "flex items-center py-2 px-8 text-gray-400 hover:text-gray-100 hover:bg-gray-700"
          }
        >
          <FaJediOrder className="mr-3" /> Orders
        </NavLink>
        <NavLink
          to="categories"
          className={({ isActive }) =>
            isActive
              ? "flex items-center py-2 px-8 bg-[#6d6b6b]"
              : "flex items-center py-2 px-8 text-gray-400 hover:text-gray-100 hover:bg-gray-700"
          }
        >
          <FaCreativeCommonsSampling className="mr-3" /> Categories
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
