import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { PiBasketFill } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import CartSingle from "../CartSingle/CartSingle";
import { useSelector } from "react-redux";

const Cart = ({ setOpenCart }) => {
  const navigate = useNavigate();
  const { cartProducts } = useSelector((state) => state.cart);
  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-[#000000da] flex justify-end z-50 ">
      <div className="bg-white h-screen w-[400px] flex flex-col justify-between gap-[30px] p-1 ">
        {/**************icon close*********** */}
        <div
          onClick={() => setOpenCart(false)}
          className=" cursor-pointer p-1 flex justify-between items-center px-2 py-3  "
        >
          <span className="text-[20px] flex items-center gap-2">
            <PiBasketFill size={25} />(
            <span className="text-[red] font-[600]">{cartProducts.length}</span>
            ) items
          </span>
          <IoClose size={35} color="black" />
        </div>

        <div className="flex flex-col gap-[25px] h-[600px] w-full items-start">
          {cartProducts.map((cart, index) => {
            return <CartSingle cart={cart} key={index} />;
          })}
        </div>

        {/***************total price*************/}
        <div
          onClick={() => navigate("/checkout")}
          className="border p-2 cursor-pointer w-[90%] mx-auto my-5 bg-[#f14a3e] text-[22px] flex justify-center items-center font-[700] text-white rounded-md  capitalize "
        >
          <span>checkout now: 1235$</span>
        </div>
      </div>
    </div>
  );
};

export default Cart;
