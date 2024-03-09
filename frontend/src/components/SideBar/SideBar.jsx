import React from "react";
import { IoLocation } from "react-icons/io5";
import { IoPersonCircleOutline } from "react-icons/io5";
import { BiSolidBasket } from "react-icons/bi";
import { HiReceiptRefund } from "react-icons/hi";
import { AiFillMessage } from "react-icons/ai";
import { MdOutlineTrackChanges } from "react-icons/md";
import { MdPayment } from "react-icons/md";
import { RiLogoutCircleLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { logOut } from "../../redux/features/authSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SideBar = ({ active, setActive }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOut = () => {
    dispatch(logOut());
    navigate("/");
    toast.success("LogOut Successfully.!");
  };

  const data = [
    {
      id: 1,
      icon: <IoPersonCircleOutline size={25} />,
      name: "profile",
    },
    {
      id: 2,
      icon: <BiSolidBasket size={25} />,
      name: "orders",
    },
    {
      id: 3,
      icon: <HiReceiptRefund size={25} />,
      name: "refunds",
    },
    {
      id: 4,
      icon: <AiFillMessage size={25} />,
      name: "message",
    },
    {
      id: 5,
      icon: <MdOutlineTrackChanges size={25} />,
      name: "track order",
    },
    {
      id: 6,
      icon: <MdPayment size={25} />,
      name: "payment method",
    },
    {
      id: 7,
      icon: <IoLocation size={25} />,
      name: "address",
    },
  ];
  return (
    <div className="w-full h-full flex flex-col gap-4 py-2 shadow-md rounded-md">
      {data?.map((i) => {
        return (
          <div
            key={i.id}
            className={`${
              active === i.id ? "text-[red]" : "null"
            } py-3 px-2 text-[20px] flex items-center gap-2 capitalize cursor-pointer 800px:px-5  `}
            onClick={() => setActive(i.id)}
          >
            <span>{i.icon}</span>
            <span className="800px:block hidden ">{i.name}</span>
          </div>
        );
      })}

      <div
        onClick={handleLogOut}
        className={` py-3 px-2 text-[20px] flex items-center gap-2 capitalize cursor-pointer  800px:px-5 `}
      >
        <span>{<RiLogoutCircleLine size={25} />}</span>
        <span className="800px:block hidden">LogOut</span>
      </div>
    </div>
  );
};

export default SideBar;
