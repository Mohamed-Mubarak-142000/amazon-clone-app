import React, { useState } from "react";
import { AiFillCloseSquare } from "react-icons/ai";
import styles from "../../styles/styles";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import { HiShoppingCart } from "react-icons/hi2";
import { IoStar, IoStarHalf, IoStarOutline } from "react-icons/io5";
import { Backend_Url } from "../../server";
const OpenProductCard = ({ data, setClick, click, setOpen }) => {
  const [count, setCount] = useState(0);
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
      <div className="bg-[#fff]">
        {data ? (
          <div class="grid-container">
            <div className="fixed top-0 left-0 w-full h-screen z-40 flex justify-center items-center bg-[#000000a9]">
              <div className="bg-white w-[90%] 800px:w-[60%] h-[90vh] p-1  800px:h-[75vh] rounded-md shadow-md overflow-y-scroll relative pt-9 ">
                {/********************close icon********** */}
                <div
                  className="absolute top-2 right-2 cursor-pointer"
                  onClick={() => setOpen(false)}
                >
                  <AiFillCloseSquare size={30} color="#3321c8" />
                </div>
                <div className=" grid grid-cols-1 gap-[10px] md:grid-cols-1 md:gap-[20px] lg:grid-cols-2 lg:gap-[5px] xl:grid-cols-2 xl:gap-[0]">
                  <div className="flex flex-col">
                    {/***************image product************ */}
                    <div className="h-[400px] w-full ">
                      <img
                        src={`${Backend_Url}${data.images[0]}`}
                        alt=""
                        className="w-[100%] h-[100%] object-contain"
                      />
                    </div>

                    {/**************** shop******* */}
                    <div className="flex gap-1 items-center">
                      {/************image shop***** */}
                      <div className=" w-[50px] h-[50px] rounded-full ml-1">
                        <img
                          src={`${Backend_Url}${data.shop.avatar}`}
                          alt=""
                          className="w-[100%] h-[100%] rounded-full object-contain"
                        />
                      </div>
                      {/********details shop******* */}
                      <div>
                        <h3 className={`${styles.shopName}`}>
                          {data.shop.name.slice(0, 20)}
                        </h3>
                        <h3>(4.5) Ratings</h3>
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
                          ({data.sold_out}) sold out
                        </h1>

                        <h1 className="capitalize text-[#3bc177] font-[500] text-[20px]">
                          ({data.stock}) stock
                        </h1>
                      </div>
                    </div>
                  </div>

                  <div className=" flex flex-col gap-5">
                    {/*******************details******************* */}
                    <div className="flex flex-col gap-2">
                      <h2 className={`${styles.productTitle}`}>
                        <span className="text-[20px] text-gray-500 capitalize">
                          name :
                        </span>{" "}
                        {data.name}
                      </h2>
                      <h2>
                        <span className="text-[20px] text-gray-500 capitalize">
                          description:
                        </span>{" "}
                        {data.description}
                      </h2>
                      <h2 className="text-[22px] capitalize">
                        <span className="text-[20px] text-gray-500 capitalize">
                          category:
                        </span>{" "}
                        {data.category}
                      </h2>
                      <div className="flex mt-5">
                        <h2 className={`${styles.productDisccoutPrice}`}>
                          {data.discountPrice}$
                        </h2>

                        <h2 className={`${styles.price}`}>
                          {data.originalPrice}$
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default OpenProductCard;
