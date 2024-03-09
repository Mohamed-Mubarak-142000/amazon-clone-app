import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Backend_Url } from "../../server";
import {
  decreaseQuantity,
  increaseQuantity,
} from "../../redux/features/cartSlice";
const CartSingle = ({ cart }) => {
  const dispatch = useDispatch();
  const increase = () => {
    dispatch(increaseQuantity());
  };

  const decrease = () => {
    dispatch(decreaseQuantity());
  };
  return (
    <>
      {/***********one item*********/}
      <div className="relative flex items-center w-full h-[130px] justify-between shadow-md px-1 rounded-sm">
        <div className="w-[33%] h-[100%]">
          <img
            src={`${Backend_Url}${cart.images[0]}`}
            alt=""
            className="w-full h-full object-contain"
          />
        </div>

        <div className=" h-full w-[33%] text-[12px] flex flex-col gap-1">
          <span className="font-[600]">{cart.name}</span>
          <span>{cart.description.slice(0, 70)}</span>
          <span className="font-[500]">
            {cart.originalPrice}$ * {cart.quantity}
          </span>
        </div>

        <div className=" flex flex-col gap-5 w-[33%] h-full items-center justify-center">
          <span className="text-[red] text-[15px] font-[600]">
            {cart.quantity}x
          </span>
          <div className="flex items-center justify-evenly w-full">
            <button
              onClick={decrease}
              className="text-[15px] p-1 bg-[red] text-white rounded-sm"
            >
              <FaMinus />
            </button>
            <button
              onClick={increase}
              className="text-[15px] p-1 bg-[#3BC177] text-white rounded-sm"
            >
              <FaPlus />
            </button>
          </div>
          <div className="flex items-center w-full">
            <span className="font-[500] capitalize text-[15px]">price:</span>
            <span className="font-[500] capitalize text-[red] text-[15px]">
              150$
            </span>
          </div>
        </div>

        <span className="absolute top-0 right-0 bg-[red] text-white shadow-sm">
          <IoClose />
        </span>
      </div>
    </>
  );
};

export default CartSingle;
