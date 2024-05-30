import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { HiMiniStar } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";
// import ProductService from "../services/product.service";
import {
  getProductSucces,
  getSingleProductSucces,
} from "../app/slice/products";
import ProductService from "../service/product.service";
import { Button, Modal } from "antd";
import { BiEdit } from "react-icons/bi";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { singleProduct } = useSelector((state) => state.productCategory);
  const { id } = useParams();
  useEffect(() => {
    const getProduct = async () => {
      const res = await ProductService.getSingleProduct(id);
      try {
        dispatch(getSingleProductSucces(res));
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, [dispatch, id]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = async (singleProduct) => {
    try {
      const res = await ProductService.deleteProduct(singleProduct._id)
      const response = await ProductService.getProducts();
      dispatch(getProductSucces(response));
      setIsModalOpen(false);
      navigate("/dashboard/product");
      console.log(res)
    } catch (error) {
      console.log(error);
    }
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="grid grid-cols-1 justify-center min-[1210px]:grid-cols-2 gap-5 py-10 px-5 2xl:px-10">
        <div className="flex flex-col md:flex-row gap-5 max-[1210px]:justify-center">
          <div className="h-[100px] grid grid-cols-1 gap-5">
            {singleProduct?.images?.map((img, index) => (
              <img
                key={index}
                src={`https://abrorkhandev.uz/public/${img.slice(8)}`}
                className="h-[100px] rounded-md"
                alt=""
              />
            ))}
          </div>
          {singleProduct?.images && singleProduct.images.length > 0 && (
            <img
              src={`https://abrorkhandev.uz/public/${
                singleProduct.images.length !== 0
                  ? singleProduct.images[0].slice(8)
                  : "assets/product-2.jpg"
              }`}
              alt=""
              className="w-[100%] h-[100%] lg:w-[400px] md:h-[500px] rounded-md"
            />
          )}
        </div>
        <div className="product-detail flex flex-col gap-5">
          <div className="flex items-center justify-between w-[100%]">
            <div className="flex gap-5 items-center">
              <div className="text-[#8b8e99] text-[13px]">
                <p className="flex items-center gap-1 cursor-pointer">
                  <HiMiniStar className="text-[#F5A623] text-[14px]" />{" "}
                  {/* {singleProduct?.totalrating === 0
                    ? "0.0 Baholar hali yoʻq"
                    : singleProduct?.totalrating} */}
                  0.0 Baholar hali yoʻq
                </p>
              </div>
              <div className="text-[#8b8e99] text-[13px]">
                <p>
                  {singleProduct?.sold === 0
                    ? "Buyurtmalar yo'q"
                    : `${singleProduct?.sold} buyurtma`}
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div>
              <h1 className="product-heading">{singleProduct?.name}</h1>
            </div>
            <div className="">
              <div className="flex items-center gap-10">
                <div>Brend:</div>
                <div>
                  <a
                    href={`brands/${singleProduct?.brand}`}
                    className="hover:decoration-dashed"
                  >
                    {singleProduct?.brand}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-10">
                <div>Yetkazib berish:</div>
                <div className="text-[#8b8e99] text-[14px]">
                  <p>3 kun, bepul</p>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="flex items-center gap-10">
            <div>Ranglari:</div>
            {/* {color?.map((color) => {
              // console.log(color?.title)
              return ( */}
            <div className={`bg-[#000] p-5 rounded-md shadow-md`}></div>
            {/* ); */}
            {/* })} */}
          </div>
          <div className="">
            <p>
              {singleProduct?.category?.name} o'lchami:{" "}
              <span className="font-bold">25(42-44)</span>
            </p>
          </div>
          <div className="flex flex-col">
            <p>Narx:</p>
            <h1 className="section-heading">${singleProduct?.price}</h1>
          </div>
          <div className="flex flex-col gap-2">
            <p className="mr-10">Mahsulot haqida qisqacha:</p>
            <div
              dangerouslySetInnerHTML={{ __html: singleProduct?.description }}
              className="list-disc"
            />
          </div>
        </div>
      </div>{" "}
      <div className="py-10 px-5 2xl:px-10 flex gap-5">
        <Button type="primary" danger onClick={showModal}>
          O'chirish
        </Button>
        <Modal
          title="Rostdan ham o'shirmoqchimisiz?"
          open={isModalOpen}
          okText="Ha"
          onOk={() => handleOk(singleProduct)}
          okType="danger"
          onCancel={handleCancel}
          cancelText="Yo'q"
          centered
        ></Modal>
        <Button type="default">
          <Link to={`/dashboard/product/edit/${singleProduct._id}`}>Edit</Link>
        </Button>
      </div>
    </>
  );
};

export default ProductDetails;
