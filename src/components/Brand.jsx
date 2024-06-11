import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getBrandsFailur,
  getBrandsStart,
  getBrandsSucces,
} from "../app/slice/products";
import { Link } from "react-router-dom";
import { Button, Card, List } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import ProductService from "../service/product.service";

const Brand = () => {
  const dispatch = useDispatch();
  const { allBrands } = useSelector((state) => state.productCategory);

  useEffect(() => {
    const getBrands = async () => {
      dispatch(getBrandsStart());
      try {
        const respons = await ProductService.getBrands();
        dispatch(getBrandsSucces(respons));
      } catch (error) {
        dispatch(getBrandsFailur());
      }
    };
    getBrands();
  }, [dispatch]);

  return (
    <div className="">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Brands</h1>
        <Link
          to={"create"}
          className="bg-blue-600 text-white px-4 py-2 rounded-md"
        >
          + New Brand
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
        dataSource={allBrands}
        renderItem={(item) => (
          <List.Item>
            <Card>{item?.name}</Card>
            <div className="absolute top-[50%] right-4 group-hover:opacity-100 transition-opacity duration-200">
              <Button
                icon={<DeleteOutlined />}
                // onClick={() => handleDelete(item._id)}
                danger
              />
            </div>
          </List.Item>
        )}
      />
    </div>
  );
};

export default Brand;
