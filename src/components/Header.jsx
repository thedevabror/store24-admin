import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm py-4 px-6 relative md:w-[80%] md:left-[20%] min-[400px]:w-full min-[400px]:left-0">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Hi, Welcome back 👋</h1>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-gray-600 hidden min-[500px]:block">Abror Abdukayumov</div>
          <img
            className="h-10 w-10 rounded-full"
            src="https://via.placeholder.com/150"
            alt="Profile"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
