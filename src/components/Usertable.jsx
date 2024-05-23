import React, { useEffect, useState } from "react";
import { FaEllipsisV } from "react-icons/fa";
import AuthService from "../service/auth.service";

// const users = [
//   {
//     id: 1,
//     name: "Alfonso O'Keefe",
//     company: "Bahringer Group",
//     role: "Project Manager",
//     verified: "No",
//     status: "Active",
//     avatar: "https://via.placeholder.com/40",
//   },
//   {
//     id: 2,
//     name: "Amanda Roob",
//     company: "Crooks, Prosacco and Bayer",
//     role: "Hr Manager",
//     verified: "No",
//     status: "Active",
//     avatar: "https://via.placeholder.com/40",
//   },
//   {
//     id: 3,
//     name: "Cassandra Wolf",
//     company: "Schimmel - VonRueden",
//     role: "UI/UX Designer",
//     verified: "No",
//     status: "Banned",
//     avatar: "https://via.placeholder.com/40",
//   },
//   {
//     id: 4,
//     name: "Darnell VonRueden Sr.",
//     company: "Pouros, MacGyver and Shields",
//     role: "UI/UX Designer",
//     verified: "Yes",
//     status: "Active",
//     avatar: "https://via.placeholder.com/40",
//   },
//   {
//     id: 5,
//     name: "Dr. Clifton McClure",
//     company: "Crist Inc",
//     role: "Full Stack Designer",
//     verified: "Yes",
//     status: "Active",
//     avatar: "https://via.placeholder.com/40",
//   },
// ];

const UserTable = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await AuthService.getUsers();
        setUsers(response);
      } catch (error) {
        console.log(error);
      }
    };

    getUsers();
  }, []);

  return (
    <div className="">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Users</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
          + New User
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600 uppercase tracking-wider">
                <input type="checkbox" />
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600 uppercase tracking-wider">
                Role
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600 uppercase tracking-wider">
                Verified
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-600 uppercase tracking-wider"></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <input type="checkbox" />
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div className="flex items-center">
                    <img
                      src={user.avatar}
                      alt="avatar"
                      className="w-10 h-10 rounded-full mr-4"
                    />
                    <div>
                      <div className="text-sm leading-5 font-medium text-gray-900">
                        {user.name}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div className="text-sm leading-5 text-gray-900">
                    {user.email}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div className="text-sm leading-5 text-gray-900">
                    {user.isAdmin ? "Admin" : "User"}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div className="text-sm leading-5 text-gray-900">
                    {user.verified}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      user.isActive
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {user.isActive ? "Active" : "Blocked"}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 font-medium">
                  <button className="text-gray-400 hover:text-gray-600">
                    <FaEllipsisV />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between items-center mt-4">
        <div className="text-sm text-gray-600">Rows per page:</div>
        <div className="text-sm text-gray-600">1-5 of 24</div>
        <div className="flex">
          <button className="text-sm text-gray-600 mx-1">&lt;</button>
          <button className="text-sm text-gray-600 mx-1">&gt;</button>
        </div>
      </div>
    </div>
  );
};

export default UserTable;
