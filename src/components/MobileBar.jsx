import React from "react";
import { FaWallet, FaPlus, FaCog, FaUser, FaFirstOrder } from "react-icons/fa";
// import ReactTooltip from "react-tooltip";
import { NavLink } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import { Dashboard, Orders } from "../utils/svg";

const MobileBar = () => {
  return (
    <div className="fixed md:hidden min-[400px]:block z-50 w-full h-16 max-w-full -translate-x-1/2 bg-white border border-gray-200  bottom-0 left-1/2 dark:bg-gray-700 dark:border-gray-600">
      <div className="grid h-full max-w-full grid-cols-5 mx-auto">
        <NavLink
          to=""
          data-tip="Home"
          className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
        >
          <Dashboard />
          {/* <FaHome className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" /> */}
          <span className="sr-only">Dashboard</span>
        </NavLink>

        <NavLink
          to="user"
          data-tip="Profile"
          className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
        >
          <FaUser className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" />
          <span className="sr-only">Profile</span>
        </NavLink>

        <div className="flex items-center justify-center rounded-full">
          <NavLink
            to="create"
            data-tip="New item"
            className="inline-flex items-center justify-center rounded-full w-10 h-10 font-medium bg-blue-600 hover:bg-blue-700 group focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800"
          >
            <FaPlus className="w-4 h-4 text-white" />
            <span className="sr-only">New item</span>
          </NavLink>
        </div>

        <NavLink
          to="product"
          data-tip="Products"
          className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
        >
          <FaCog className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" />
          <span className="sr-only">Products</span>
        </NavLink>

        <NavLink
          to="orders"
          data-tip="Orders"
          className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
        >
          <Orders />
          {/* <FaFirstOrder className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" /> */}
          <span className="sr-only">Orders</span>
        </NavLink>
      </div>
      <Tooltip place="top" type="dark" effect="solid" />
    </div>
  );
};

export default MobileBar;
