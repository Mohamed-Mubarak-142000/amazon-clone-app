import React, { useState } from "react";
import { IoMdList } from "react-icons/io";
import logoImage from "../../assets/images/icon.jpg";
import { CiHeart } from "react-icons/ci";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import {
  IoCloseOutline,
  IoLogOut,
  IoPersonCircleOutline,
} from "react-icons/io5";
import CartSingle from "../CartSingle/CartSingle";
import { HiShoppingCart } from "react-icons/hi2";
import MenuLink from "../MenuLink/MenuLink";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Backend_Url } from "../../server";
import { logOut } from "../../redux/features/authSlice";
const Responsive = ({
  searchData,
  serchTerm,
  activeHeading,
  setSearchTrem,
  handleSerchChange,
}) => {
  const [openMeneuResp, setOpenMeneuResp] = useState(false);
  const [OpenCartResp, setOpenCartResp] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticated, Oneuser } = useSelector((state) => state.auth);
  const handleLogOut = () => {
    dispatch(logOut());
    navigate("/");
  };
  return (
    <>
      {/*****************mobile responsive-***************** */}
      <div className="w-full h-[60px] fixed bg-white z-50  top-0 left-0 shadow-sm 800px:hidden">
        <div className="flex items-center justify-between h-full px-2">
          <div
            onClick={() => {
              setOpenMeneuResp(true);
              setOpenCartResp(false);
            }}
            className="h-full flex justify-center items-center cursor-pointer"
          >
            <IoMdList size={30} />
          </div>

          <div className="w-[120px] h-full">
            <img
              src={logoImage}
              className="w-full h-full object-contain"
              alt=""
              onClick={() => navigate("/")}
            />
          </div>

          <div
            onClick={() => {
              setOpenCartResp(true);
              setOpenMeneuResp(false);
            }}
            className="h-full flex justify-center items-center cursor-pointer"
          >
            <HiShoppingCart size={30} />
          </div>
        </div>
        {openMeneuResp && (
          <div className="fixed top-0 left-0 h-screen w-full bg-[#000000da] z-50 ">
            <div
              className="w-[70%] bg-white h-screen shadow-lg"
              onClick={() => setOpenMeneuResp(false)}
            >
              <div className="flex justify-between items-center px-2">
                <div className="h-[50px] w-[100px]">
                  <img
                    src={logoImage}
                    alt=""
                    className="h-full w-full object-contain cursor-pointer"
                    onClick={() => {
                      navigate("/");
                      setOpenMeneuResp(false);
                    }}
                  />
                </div>
              </div>

              <div className="flex justify-between px-5 items-center h-[65px] ">
                <span className="relative cursor-pointer">
                  <CiHeart color="red" size={40} />
                  <span className="w-[25px] h-[25px] rounded-full absolute top-[-12px] left-[-5px] bg-[#3bc177] flex justify-center items-center ">
                    1
                  </span>
                </span>
                <IoCloseOutline
                  onClick={() => setOpenMeneuResp(false)}
                  size={35}
                  className="cursor-pointer"
                />
              </div>

              {/****box serch*** */}
              <div className="relative w-[90%] mx-auto mt-5 mb-3">
                <input
                  className="h-[40px] w-full px-2 border-[#3957db] border-[2px] rounded-md"
                  type="text"
                  name=""
                  id=""
                  placeholder="Search Product.."
                  value={serchTerm}
                  onChange={handleSerchChange}
                />
                <FaSearch
                  size={20}
                  className="absolute right-1 top-2.5 cursor-pointer"
                />
                {/*********************filter data of search*********************/}
                {searchData && searchData.length !== 0 ? (
                  <div className="absolute min-h-[30vh] bg-slate-50 shadow-sm-2 z-[9] p-4">
                    {searchData &&
                      searchData.map((item, index) => {
                        const itemSearch = item.name;
                        const productName = itemSearch.replace(/\s+/g, "-");

                        return (
                          <Link key={index} to={`/product/${productName}`}>
                            <div className="w-full flex items-start-py-3">
                              <img
                                src={item.image_Url[0].url}
                                alt=""
                                className="w-[50px] h-[50px] mr-[10px]"
                              />
                              <h1>{item.name}</h1>
                            </div>
                          </Link>
                        );
                      })}
                  </div>
                ) : null}
              </div>

              <MenuLink activeHeading={activeHeading} />

              {/**********************btn become*****************/}
              <div className="bg-black text-white w-[130px] flex justify-center items-center py-3 ml-3 rounded-md mt-2 ">
                <Link to={"/seller"}>
                  <h1 className="capitalize text-[#fff] gap-1 flex items-center">
                    become seller <IoIosArrowForward />
                  </h1>
                </Link>
              </div>

              {isAuthenticated === true ? (
                <div className=" relative cursor-pointer m-[1rem]">
                  {Oneuser?.token && (
                    <>
                      <div className="flex items-center capitalize gap-1">
                        <img
                          src={`${Backend_Url}${Oneuser.user.avatar}`}
                          alt=""
                          className=" border-gray-600 border-2 w-[35px] h-[35px] rounded-full object-cover"
                        />
                        <span className="text-[#000] font-[500]">
                          {Oneuser.user.name}
                        </span>
                      </div>

                      <div
                        onClick={handleLogOut}
                        className="bg-[#3bc177] text-white w-[130px] flex justify-center items-center py-3  rounded-md mt-5 "
                      >
                        <h1 className="capitalize text-[#fff] gap-1 flex items-center text-[18px]">
                          logOut <IoLogOut size={25} />
                        </h1>
                      </div>
                    </>
                  )}
                </div>
              ) : (
                <>
                  <div className="bg-[#3bc177] text-white w-[130px] flex justify-center items-center py-3 ml-3 rounded-md mt-2 ">
                    <Link to={"/login"}>
                      <h1 className="capitalize text-[#fff] gap-1 flex items-center">
                        login user <IoIosArrowForward />
                      </h1>
                    </Link>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
        {/********************cart responsive*******************/}
        {OpenCartResp && (
          <div className="fixed top-0 right-0 h-screen w-full bg-[#000000da] z-50 ">
            <div
              className="w-[70%] px-2 bg-white h-screen shadow-lg"
              onClick={() => setOpenCartResp(false)}
            >
              <div className="flex justify-between items-center px-2">
                <div className="h-[50px] w-[100px]">
                  <img
                    src={logoImage}
                    alt=""
                    className="h-full w-full object-contain cursor-pointer"
                    onClick={() => {
                      navigate("/");
                      setOpenMeneuResp(false);
                      setOpenCartResp(false);
                    }}
                  />
                </div>
              </div>

              <div className="flex justify-end px-5 items-center h-[65px] ">
                <IoCloseOutline
                  onClick={() => setOpenCartResp(false)}
                  size={35}
                  className="cursor-pointer"
                />
              </div>

              <CartSingle />

              {/***************total price*************/}
              <div
                onClick={() => navigate("/checkout")}
                className="border p-2 cursor-pointer w-[90%] mx-auto my-5 bg-[#f14a3e] text-[22px] flex justify-center items-center font-[700] text-white rounded-md  capitalize "
              >
                <span>checkout now: 1235$</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Responsive;
