import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getCategoryFailur, getCategoryStart, getCategorySucces } from "../app/slice/products";
import ProductService from "../service/product.service";

const Categories = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategorys = async () => {
      dispatch(getCategoryStart());
      try {
        const respons = await ProductService.getCategories();
        dispatch(getCategorySucces(respons));
        console.log(respons);
      } catch (error) {
        dispatch(getCategoryFailur());
      }
    };
    getCategorys();
  }, []);
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Categories</h1>
        <Link
          to={"create"}
          className="bg-blue-600 text-white px-4 py-2 rounded-md"
        >
          + New Category
        </Link>
      </div>
    </div>
  );
};

export default Categories;
