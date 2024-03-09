import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/styles";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import { HiShoppingCart } from "react-icons/hi2";
import { IoStar, IoStarHalf, IoStarOutline } from "react-icons/io5";
import ProductInfo from "../productInfo/ProductInfo";
import { Backend_Url } from "../../server";
const ProductDetailsContent = ({ dataProduct }) => {
  const [count, setCount] = useState(1);
  const [click, setClick] = useState(false);
  const [select, setSelect] = useState(0);

  const decreaseCounter = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const inCreaseCounter = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div>
        {dataProduct ? (
          <>
            <div
              className={`${styles.section} bg-white w-[90%] 800px:w-[80%] py-[3rem] mt-[1rem] flex flex-col md:flex-col lg:flex-row  `}
            >
              {/************all image********* */}
              <div className=" w-[100%] m-2 flex flex-col gap-1 rounded-md md:w-full lg:w-[45%] cursor-pointer">
                {/************image main***** */}
                <div className="w-full h-[350px] md:h-[400px] lg:h-[450px]">
                  <img
                    src={`${Backend_Url}${dataProduct.images[select]}`}
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </div>
                {/********small image************* */}
                <div className="w-full h-[120px] flex justify-center gap-4 items-center">
                  {/*****one image***/}

                  {dataProduct &&
                    dataProduct?.images.map((img, index) => {
                      return (
                        <div
                          key={index}
                          className={`${
                            select === 0 ? "border" : "none"
                          } w-[120px] h-full`}
                        >
                          <img
                            src={`${Backend_Url}${dataProduct.images[index]}`}
                            alt=""
                            className="w-full h-full object-contain"
                            onClick={() => setSelect(index)}
                          />
                        </div>
                      );
                    })}
                </div>
              </div>

              {/********************info product ****************/}
              <div className="w-[100%] flex flex-col gap-5 md:w-full lg:w-[45%] ">
                {/*******************details******************* */}
                <div className="flex flex-col gap-2">
                  <h2 className={`${styles.productTitle}`}>
                    {dataProduct.name}
                  </h2>
                  <h2>{dataProduct.description}</h2>
                  <div className="flex mt-5">
                    <h2 className={`${styles.productDisccoutPrice}`}>
                      {dataProduct.discountPrice === 0
                        ? dataProduct.originalPrice
                        : dataProduct.discountPrice}
                      $
                    </h2>

                    <h2 className={`${styles.price}`}>
                      {dataProduct.originalPrice
                        ? dataProduct.originalPrice + "$"
                        : null}
                    </h2>
                  </div>
                </div>
                {/*************btns******* */}
                <div className="flex flex-wrap items-center justify-between ">
                  <div className="flex items-center h-[45px]">
                    <button
                      className="outline-none rounded-sm text-[30px] h-[100%] w-[50px] bg-red-500 font-bold "
                      type="button"
                      onClick={decreaseCounter}
                    >
                      -
                    </button>
                    <span className="outline-none text-[20px] h-[100%] bg-gray-100 w-[50px] flex justify-center items-center font-bold ">
                      {count}
                    </span>
                    <button
                      onClick={inCreaseCounter}
                      type="button"
                      className="outline-none rounded-sm text-[30px] h-[100%] w-[50px] bg-teal-400 font-bold "
                    >
                      +
                    </button>
                  </div>

                  {/************wishList************ */}
                  <div className="pr-7">
                    {click ? (
                      <FaHeart
                        size={35}
                        onClick={() => setClick(!click)}
                        color={click ? "red" : "#333"}
                        title="Add to wish list"
                      />
                    ) : (
                      <CiHeart
                        size={35}
                        color={click ? "red" : "gray"}
                        onClick={() => setClick(!click)}
                        title="Remove from wish list"
                      />
                    )}
                  </div>
                </div>

                <div className="flex items-center flex-wrap justify-between pr-5">
                  <div
                    className={`${styles.button} text-white capitalize text-[18px] rounded-sm`}
                  >
                    add to cart <HiShoppingCart className="ml-1" />{" "}
                  </div>

                  <div className="flex items-center gap-1 font-[500]">
                    Ratings:
                    <IoStar color="#f6ba00" />
                    <IoStar color="#f6ba00" />
                    <IoStar color="#f6ba00" />
                    <IoStarHalf color="#f6ba00" />
                    <IoStarOutline color="#f6ba00" />
                  </div>
                </div>

                {/**************** shop******* */}
                <div className="flex justify-between gap-1 items-center ">
                  {/************image shop***** */}
                  <div className=" flex gap-1">
                    <Link
                      to={`/home-seller/${dataProduct?.shop?._id}`}
                      className=" w-[50px] h-[50px] rounded-full ml-1"
                    >
                      <img
                        src={`${Backend_Url}${dataProduct.shop.avatar}`}
                        alt=""
                        className="w-[100%] h-[100%] rounded-full object-contain"
                      />
                    </Link>
                    {/********details shop******* */}
                    <div>
                      <h3 className={`${styles.shopName}`}>
                        {dataProduct.shop.name.slice(0, 20)}
                      </h3>
                      <h3>({4.5}) Ratings</h3>
                    </div>
                  </div>
                  {/************send message************ */}
                  <div className="ml-2 my-4">
                    <div className={`${styles.button} text-white rounded-sm`}>
                      <h1 className="flex items-center capitalize">
                        send message
                        <AiFillMessage className="ml-1" />
                      </h1>
                    </div>
                    <div>
                      <h1 className="capitalize text-red-400 font-[500] text-[20px]">
                        ({dataProduct.sold_out}) sold out
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/************************product info */}
            <ProductInfo dataProduct={dataProduct} />
          </>
        ) : (
          <h1 className="capitalize text-[25px] text-[600] text-gray-500 text-center">
            {" "}
            not any products exist.!
          </h1>
        )}
      </div>
    </>
  );
};

export default ProductDetailsContent;
