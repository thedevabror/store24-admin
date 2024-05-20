import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import User from './components/User';
import Product from './components/Product';
import Blog from './components/Blog';
import Login from './components/Login';
import NotFound from './components/NotFound';

const App = () => {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Header />
          <div className="p-6 bg-gray-100 min-h-screen relative w-[80%] left-[20%]">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/user" element={<User />} />
              <Route path="/product" element={<Product />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
