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
// const data = [
//   {
//     title: "Title 1",
//   },
//   {
//     title: "Title 2",
//   },
//   {
//     title: "Title 3",
//   },
//   {
//     title: "Title 4",
//   },
//   {
//     title: "Title 5",
//   },
//   {
//     title: "Title 6",
//   },
// ];

const Categories = () => {
  const dispatch = useDispatch();
  const {productCategories} = useSelector((state) => state.productCategory)

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
  }, [dispatch]);
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
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 4,
          lg: 4,
          xl: 6,
          xxl: 3,
        }}
        dataSource={productCategories}
        renderItem={(item) => (
          <List.Item>
            <Card title={item.name}>{item.parent}</Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default Categories;
