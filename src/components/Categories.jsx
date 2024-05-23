import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  getCategoryFailur,
  getCategoryStart,
  getCategorySucces,
} from "../app/slice/products";
import ProductService from "../service/product.service";
import { Card, List } from "antd";

const Categories = () => {
  const dispatch = useDispatch();
  const {productCategories} = useSelector((state) => state.productCategory)

  useEffect(() => {
    const getCategorys = async () => {
      dispatch(getCategoryStart());
      try {
        const respons = await ProductService.getCategories();
        dispatch(getCategorySucces(respons));
      } catch (error) {
        dispatch(getCategoryFailur());
      }
    };
    getCategorys();
  }, [dispatch]);
  return (
    <div className="">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Categories</h1>
        <Link
          to={"create"}
          className="bg-blue-600 text-white px-4 py-2 rounded-md"
        >
          + New Category
        </Link>
      </div>
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 3,
          lg: 3,
          xl: 4,
          xxl: 6,
        }}
        dataSource={productCategories}
        renderItem={(item) => (
          <List.Item>
            <Card title={item?.name}>{item?.parent?.name}</Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default Categories;
