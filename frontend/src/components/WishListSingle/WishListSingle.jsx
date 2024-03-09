import React from "react";
import { SlBasket } from "react-icons/sl";
import { IoClose } from "react-icons/io5";

const WishListSingle = () => {
  return (
    <div className="relative flex items-center w-full h-[130px] justify-between shadow-md px-1 rounded-sm">
      <div className="w-[33%] h-[100%]">
        <img src="" alt="" className="w-full h-full object-contain" />
      </div>

      <div className=" h-full w-[33%] text-[12px] flex flex-col gap-2">
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
          dolor sit amet consectetur.
        </span>
        <span className="font-[500]">120$ * 1</span>
      </div>

      <div className=" flex justify-center items-center w-[33%] h-full ">
        <span className=" bg-black rounded-md text-white w-full py-2 capitalize flex items-center justify-center border">
          add to cart
          <SlBasket />
        </span>
      </div>

      <span className="absolute top-0 right-0 bg-[red] text-white shadow-sm">
        <IoClose />
      </span>
    </div>
  );
};

export default WishListSingle;
