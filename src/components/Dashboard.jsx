import React, { useEffect } from "react";
import ProductService from "../service/product.service";

const Dashboard = () => {
  useEffect(() => {
    const getTopSellingProducts = async () => {
      try {
        const response = await ProductService.getTopSellingProducts();
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };

    getTopSellingProducts()
  }, []);

  return (
    <div className="md:px-10 bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-semibold">714k</h2>
          <p className="text-gray-600">Weekly Sales</p>
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-semibold">1.35m</h2>
          <p className="text-gray-600">New Users</p>
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-semibold">1.72m</h2>
          <p className="text-gray-600">Item Orders</p>
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-semibold">234</h2>
          <p className="text-gray-600">Bug Reports</p>
        </div>
      </div>
      <div className="mt-6 bg-white shadow rounded-lg p-6">
        <h2 className="text-lg font-semibold mb-4">Website Visits</h2>
      </div>
    </div>
  );
};

export default Dashboard;
