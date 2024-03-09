import React from "react";
import { Link } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { LuPackagePlus } from "react-icons/lu";
import { SlBasket } from "react-icons/sl";
import { TbBasketPlus } from "react-icons/tb";
import { MdEmojiEvents } from "react-icons/md";
import { FaFileMedical } from "react-icons/fa6";
import { RiMoneyDollarBoxFill } from "react-icons/ri";
import { AiFillMessage } from "react-icons/ai";
import { IoGift } from "react-icons/io5";
import { HiReceiptRefund } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io5";

const SideBarDashboard = ({ active }) => {
  return (
    <div className="w-full h-screen bg-white sticky top-0 left-0 z-50 ">
      <div className="w-full flex items-center">
        <Link to={"/"} className="flex items-center p-4 w-full">
          <MdDashboard size={30} color={active === 1 ? "crimson" : "#555"} />
          <h5
            className={`800px:block hidden ${
              active === 1 ? "text-[crimson]" : "#555"
            } capitalize text-[20px] ml-2 font-[600]`}
          >
            dashboard
          </h5>
        </Link>
      </div>

      <div className="w-full flex items-center">
        <Link
          to={"/dashboard/all-orders"}
          className="flex items-center p-4 w-full"
        >
          <LuPackagePlus size={30} color={active === 2 ? "crimson" : "#555"} />
          <h5
            className={`800px:block hidden ${
              active === 2 ? "text-[crimson]" : "#555"
            } capitalize text-[20px] ml-2 font-[600]`}
          >
            All orders
          </h5>
        </Link>
      </div>

      <div className="w-full flex items-center">
        <Link
          to={"/dashboard/all-products"}
          className="flex items-center p-4 w-full"
        >
          <SlBasket size={30} color={active === 3 ? "crimson" : "#555"} />
          <h5
            className={`800px:block hidden ${
              active === 3 ? "text-[crimson]" : "#555"
            } capitalize text-[20px] ml-2 font-[600]`}
          >
            All products
          </h5>
        </Link>
      </div>

      <div className="w-full flex items-center">
        <Link
          to={"/dashboard/create-product"}
          className="flex items-center p-4 w-full"
        >
          <TbBasketPlus size={30} color={active === 4 ? "crimson" : "#555"} />
          <h5
            className={`800px:block hidden ${
              active === 4 ? "text-[crimson]" : "#555"
            } capitalize text-[20px] ml-2 font-[600]`}
          >
            create product
          </h5>
        </Link>
      </div>

      <div className="w-full flex items-center">
        <Link
          to={"/dashboard/all-events"}
          className="flex items-center p-4 w-full"
        >
          <MdEmojiEvents size={30} color={active === 5 ? "crimson" : "#555"} />
          <h5
            className={`800px:block hidden ${
              active === 5 ? "text-[crimson]" : "#555"
            } capitalize text-[20px] ml-2 font-[600]`}
          >
            all events
          </h5>
        </Link>
      </div>

      <div className="w-full flex items-center">
        <Link
          to={"/dashboard/create-event"}
          className="flex items-center p-4 w-full"
        >
          <FaFileMedical size={30} color={active === 6 ? "crimson" : "#555"} />
          <h5
            className={`800px:block hidden ${
              active === 6 ? "text-[crimson]" : "#555"
            } capitalize text-[20px] ml-2 font-[600]`}
          >
            create event
          </h5>
        </Link>
      </div>

      <div className="w-full flex items-center">
        <Link
          to={"/dashboard/withdraw-menoy"}
          className="flex items-center p-4 w-full"
        >
          <RiMoneyDollarBoxFill
            size={30}
            color={active === 7 ? "crimson" : "#555"}
          />
          <h5
            className={`800px:block hidden ${
              active === 7 ? "text-[crimson]" : "#555"
            } capitalize text-[20px] ml-2 font-[600]`}
          >
            withdraw money
          </h5>
        </Link>
      </div>

      <div className="w-full flex items-center">
        <Link
          to={"/dashboard/shop-messenger"}
          className="flex items-center p-4 w-full"
        >
          <AiFillMessage size={30} color={active === 8 ? "crimson" : "#555"} />
          <h5
            className={`800px:block hidden ${
              active === 8 ? "text-[crimson]" : "#555"
            } capitalize text-[20px] ml-2 font-[600]`}
          >
            shop messnger
          </h5>
        </Link>
      </div>

      <div className="w-full flex items-center">
        <Link
          to={"/dashboard/discount-code"}
          className="flex items-center p-4 w-full"
        >
          <IoGift size={30} color={active === 9 ? "crimson" : "#555"} />
          <h5
            className={`800px:block hidden ${
              active === 9 ? "text-[crimson]" : "#555"
            } capitalize text-[20px] ml-2 font-[600]`}
          >
            discount code
          </h5>
        </Link>
      </div>

      <div className="w-full flex items-center">
        <Link
          to={"/dashboard/refunds"}
          className="flex items-center p-4 w-full"
        >
          <HiReceiptRefund
            size={30}
            color={active === 10 ? "crimson" : "#555"}
          />
          <h5
            className={`800px:block hidden ${
              active === 10 ? "text-[crimson]" : "#555"
            } capitalize text-[20px] ml-2 font-[600]`}
          >
            refunds
          </h5>
        </Link>
      </div>

      <div className="w-full flex items-center">
        <Link
          to={"/dashboard/setting"}
          className="flex items-center p-4 w-full"
        >
          <IoSettingsOutline
            size={30}
            color={active === 11 ? "crimson" : "#555"}
          />
          <h5
            className={`800px:block hidden ${
              active === 11 ? "text-[crimson]" : "#555"
            } capitalize text-[20px] ml-2 font-[600]`}
          >
            setting
          </h5>
        </Link>
      </div>
    </div>
  );
};

export default SideBarDashboard;
