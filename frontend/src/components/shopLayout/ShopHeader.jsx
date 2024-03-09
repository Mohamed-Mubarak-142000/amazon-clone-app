import React from "react";
import logoImage from "../../assets/images/icon.jpg";
import { IoGift } from "react-icons/io5";
import { Link } from "react-router-dom";
import { MdEmojiEvents } from "react-icons/md";
import { BsFillBasketFill } from "react-icons/bs";
import { TbPackages } from "react-icons/tb";
import { RiMessage2Fill } from "react-icons/ri";
import { Backend_Url } from "../../server";
import { useSelector } from "react-redux";

const ShopHeader = () => {
  const { OneSeller } = useSelector((state) => state.seller);
  return (
    <section className="w-full h-[75px] flex items-center justify-between shadow-md px-[1rem] mb-1 bg-white">
      {/*****logo image*** */}
      <div className="h-full w-[150px]">
        <img src={logoImage} className="w-full h-full object-contain" alt="" />
      </div>

      {/***link*** */}
      <div className="flex items-center h-full">
        <div className="flex items-center mr-5">
          <Link to={"/dashboard/gift"} className="hidden  800px:block ">
            <IoGift className="mr-8 cursor-pointer" color="#555" size={30} />
          </Link>

          <Link to={"/dashboard/events"} className="hidden  800px:block ">
            <MdEmojiEvents
              size={30}
              color="#555"
              className="mr-8 cursor-pointer"
            />
          </Link>

          <Link to={"/dashboard/products"} className="hidden  800px:block ">
            <BsFillBasketFill
              size={30}
              color="#555"
              className="mr-8 cursor-pointer"
            />
          </Link>

          <Link to={"/dashboard/orders"} className="hidden  800px:block ">
            <TbPackages
              size={30}
              color="#555"
              className="mr-8 cursor-pointer"
            />
          </Link>

          <Link to={"/dashboard/messages"} className="hidden  800px:block ">
            <RiMessage2Fill
              size={30}
              color="#555"
              className="mr-8 cursor-pointer"
            />
          </Link>

          <Link to={`/home-seller/${OneSeller?._id}`}>
            <img
              src={`${Backend_Url}${OneSeller?.avatar}`}
              className="h-[50px] w-[50px] rounded-full object-cover"
              alt=""
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ShopHeader;
