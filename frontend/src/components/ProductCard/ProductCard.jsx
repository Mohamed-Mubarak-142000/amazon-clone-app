import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/styles";
import { IoStar, IoStarHalf, IoStarOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi2";
import { IoEyeOutline } from "react-icons/io5";
import OpenProductCard from "../OpenProductCard/OpenProductCard";
import { Backend_Url } from "../../server";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../../redux/features/cartSlice";
import { toast } from "react-toastify";
const ProductCard = ({ data }) => {
  const dispatch = useDispatch();
  const [click, setClick] = useState(false);
  const [open, setOpen] = useState(false);
  const proData = data.name;
  const product_name = proData.replace(/\s+/g, "-");
  return (
    <>
      <div
        className={`w-full h-[450px] bg-white rounded-lg shadow-lg cursor-pointer relative`}
      >
        {/**********image*********/}
        <Link to={`/product/${product_name}`}>
          <img
            src={`${Backend_Url}${data?.images[0]}`}
            alt=""
            className="w-full h-[180px] object-contain"
          />
        </Link>
        {/****************shop_name**********/}
        <Link to={`/home-seller/${data?.shop?._id}`}>
          <h5 className={`${styles.shopName} p-1`}>
            {data.shop.name.slice(0, 50)}
          </h5>
        </Link>
        {/*****************product name*****************/}
        <Link to={`/product/${product_name} p-1`}>
          <h5 className=" p-1 font-[500] text-[20px]">
            {data?.name?.length > 40
              ? data.name.slice(0, 40) + "..."
              : data.name}
          </h5>
          <h5 className="p-1 text-[15px] ">
            {data?.description?.length > 100
              ? data.description.slice(0, 100) + "..."
              : data.description}
          </h5>
          <div className="flex py-1 px-1">
            <IoStar className="mr-2 cursor-pointer" size={20} color="#f6ba00" />
            <IoStar className="mr-2 cursor-pointer" size={20} color="#f6ba00" />
            <IoStar className="mr-2 cursor-pointer" size={20} color="#f6ba00" />
            <IoStarHalf
              className="mr-2 cursor-pointer"
              size={20}
              color="#f6ba00"
            />
            <IoStarOutline
              className="mr-2 cursor-pointer"
              size={20}
              color="#f6ba00"
            />
          </div>
          {/*********price******************/}
          <div className="py-3 flex items-center p-1 justify-between">
            <div className="flex">
              <h5 className={`${styles.productDisccoutPrice}`}>
                {data.discountPrice === 0
                  ? data.discountPrice
                  : data.discountPrice}
                $
              </h5>

              <h4 className={`${styles.price}`}>
                {data.originalPrice ? data.originalPrice + "$" : null}
              </h4>
            </div>
            <span className="font-[600] text-[18px] text-[#68d284]">
              {data.stock ? data.stock : null} sold
            </span>
          </div>{" "}
        </Link>

        {/************************Options************************* */}
        {click ? (
          <FaHeart
            size={35}
            className="cursor-pointer absolute top-2 p-2 right-2"
            onClick={() => setClick(!click)}
            color={click ? "red" : "#333"}
            title="Add to wish list"
          />
        ) : (
          <CiHeart
            size={35}
            className="cursor-pointer absolute top-2 p-2 right-2"
            color={click ? "red" : "gray"}
            onClick={() => setClick(!click)}
            title="Remove from wish list"
          />
        )}

        <IoEyeOutline
          size={35}
          className="cursor-pointer absolute top-9 p-2 right-2"
          onClick={() => setOpen(!open)}
          title="Open Details product"
        />

        <HiShoppingCart
          size={35}
          className="cursor-pointer absolute top-16 p-2 right-2"
          onClick={() => {
            dispatch(addProductToCart(data));
            toast.success("Product Added To Cart Success.!");
          }}
          title="Open Details product"
        />

        {open ? (
          <OpenProductCard
            setOpen={setOpen}
            setClick={setClick}
            click={click}
            data={data}
          />
        ) : null}
      </div>
    </>
  );
};

export default ProductCard;
