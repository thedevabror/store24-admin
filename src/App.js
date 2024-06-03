import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import User from "./components/User";
import Product from "./components/Product";
import Blog from "./components/Blog";
import NotFound from "./components/NotFound";
import Login from "./components/Login";
import Layout from "./components/Layout";
import PrivateRoute from "./routes/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";
import PublicRoute from "./routes/PublicRoute";
import SignUp from "./components/SignUp";
import Orders from "./components/Orders";
import CreateProducts from "./components/CreateProducts";
import Categories from "./components/Categories";
import CreateCategry from "./components/CreateCategry";
import ProductDetails from "./components/ProductDetails";
import EditProduct from "./components/EditProduct";
import OrderDetails from "./components/OrderDetails";
import OrderCreate from "./components/OrderCreate";
import Create from "./components/Create";
import { CreateLinks } from "./data";
// import PrivateRoute from "./PrivateRoute";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="bg-[#212020] h-screen">
          <Routes>
            <Route
              path="/login"
              element={<PublicRoute component={<Login />} />}
            />
            <Route
              path="/register"
              element={<PublicRoute component={<SignUp />} />}
            />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Layout />
                </PrivateRoute>
              }
            >
              <Route index element={<Dashboard />} />
              <Route path="user" element={<User />} />
              <Route path="product" element={<Product />} />
              <Route path="product/:id" element={<ProductDetails />} />
              <Route path="product/edit/:id" element={<EditProduct />} />
              <Route path="create" element={<Create />} />
              {CreateLinks.map((item) => (
                <Route key={item.id} path={`create/${item.link}`} element={item.element} />
              ))}
              <Route path="blog" element={<Blog />} />
              <Route path="orders" element={<Orders />} />
              <Route path="orders/:id" element={<OrderDetails />} />
              {/* <Route path="orders/create" element={<OrderCreate />} /> */}
              <Route path="categories" element={<Categories />} />
              <Route path="categories/create" element={<CreateCategry />} />
              <Route path="product/create" element={<CreateProducts />} />
            </Route>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<Navigate to="/dashboard" />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
