import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import WishListSingle from "../WishListSingle/WishListSingle";

const WishList = ({ setWishList }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-[#000000da] flex justify-end z-50 ">
      <div className="bg-white h-screen w-[400px] flex flex-col gap-[30px] p-1 ">
        {/**************icon close*********** */}
        <div
          onClick={() => setWishList(false)}
          className=" cursor-pointer p-1 flex justify-between items-center px-2 py-3  "
        >
          <span className="text-[20px] flex items-center gap-2">
            <FaHeart size={25} color="red" />(
            <span className="text-[red] font-[600]">1</span>) items
          </span>
          <IoClose size={35} color="black" />
        </div>

        {/***********one item*********/}
        <WishListSingle />
      </div>
    </div>
  );
};

export default WishList;
