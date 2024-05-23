import React, { useEffect } from "react";
import ProductService from "../service/product.service";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductFailur,
  getProductStart,
  getProductSucces,
} from "../app/slice/products";
import { Link } from "react-router-dom";

const Product = () => {
  const { allProducts } = useSelector((state) => state.productCategory);
  const dispatch = useDispatch();
  useEffect(() => {
    const getProducts = async () => {
      dispatch(getProductStart());
      try {
        const response = await ProductService.getProducts();
        dispatch(getProductSucces(response));
      } catch (error) {
        dispatch(getProductFailur());
        console.log(error);
      }
    };
    getProducts();
  }, [allProducts, dispatch]);

  return (
    <div className="">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Products</h1>
        <Link
          to={"create"}
          className="bg-blue-600 text-white px-4 py-2 rounded-md"
        >
          + New Product
        </Link>
      </div>
      <div className="grid min-[400px]:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 2xl:grid-cols-8 gap-5">
        {allProducts?.map((item) => (
          <div
            key={item._id}
            className="relative transition-all duration-300  hover:shadow hover:bg-white rounded-lg overflow-hidden"
          >
            <div className="product-img overflow-hidden">
              <img
                src={`http://143.110.239.160:5000/uploads/${
                  item.images.length !== 0
                    ? item.images[0].slice(8)
                    : "assets/product-2.jpg"
                }`}
                alt=""
                className="object-contain rounded-lg hover:scale-110 transition-all duration-300"
              />
            </div>
            <div className="product-details p-[10px]">
              <div className="min-h-[70px]">
                <h6 className="brand text-[13px] text-primary">
                  {/* {i.brand} */}
                </h6>
                <h5 className="text-[12.8px] leading-[15.36px] font-custom">
                  {item.name}
                </h5>
              </div>
              <div className="flex items-center gap-1">
                {/* <HiMiniStar className="text-[#F5A623] text-[14px]" />{" "} */}
                {/* <p className="text-[11.2px] text-[#8b8e99]">
                              {i.totalrating}
                            </p> */}
              </div>
              <div className="flex justify-between items-center">
                <p className="text-[14px]">${item.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
