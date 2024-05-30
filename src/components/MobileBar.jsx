import React from "react";
import { FaWallet, FaPlus, FaCog, FaUser, FaFirstOrder } from "react-icons/fa";
// import ReactTooltip from "react-tooltip";
import { NavLink } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import { Dashboard } from "../utils/svg";

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
          <span className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
            <svg
              class="w-6 h-6 font-bold text-gray-500"
              viewBox="0 0 64 64"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
            >
              <path
                stroke="currentColor"
                stroke-width="2"
                d="M48 8H44.8C44.3 6.3 42.8 5 41 5H23C21.2 5 19.7 6.3 19.2 8H16C13.8 8 12 9.8 12 12V52C12 54.2 13.8 56 16 56H48C50.2 56 52 54.2 52 52V12C52 9.8 50.2 8 48 8ZM23 7H41C41.6 7 42 7.4 42 8H22C22 7.4 22.4 7 23 7ZM48 54H16V12H19V14C19 14.6 19.4 15 20 15H44C44.6 15 45 14.6 45 14V12H48V54ZM26 22H34V24H26V22ZM26 30H34V32H26V30ZM26 38H34V40H26V38ZM20 22.2L22.8 25L28 19.8L26.6 18.4L22.8 22.2L21.4 20.8L20 22.2ZM20 30.2L22.8 33L28 27.8L26.6 26.4L22.8 30.2L21.4 28.8L20 30.2ZM20 38.2L22.8 41L28 35.8L26.6 34.4L22.8 38.2L21.4 36.8L20 38.2Z"
              />
            </svg>
          </span>
          {/* <FaFirstOrder className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" /> */}
          <span className="sr-only">Orders</span>
        </NavLink>
      </div>
      <Tooltip place="top" type="dark" effect="solid" />
    </div>
  );
};

export default MobileBar;
