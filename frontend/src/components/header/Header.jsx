import React, { useEffect, useState } from "react";
import styles from "../../styles/styles";
import { Link, useNavigate } from "react-router-dom";
import { categoriesData } from "../../static/data";
import { FaHeart, FaSearch } from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi2";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import logoImage from "../../assets/images/icon.jpg";
import { MdFilterList } from "react-icons/md";
import DropDown from "../DropDown/DropDown";
import MenuLink from "../MenuLink/MenuLink";
import { IoPersonCircleOutline } from "react-icons/io5";
import { Backend_Url } from "../../server";
import { IoIosLogOut } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { logOutUser } from "../../redux/features/authSlice";
import Cart from "../Cart/Cart";
import WishList from "../wishList/WishList";
import { SlSettings } from "react-icons/sl";
import Responsive from "../responsive/Responsive";

const Header = ({ activeHeading }) => {
  const [serchTerm, setSearchTrem] = useState("");
  const [searchData, setSearchData] = useState(null);
  const [active, setActive] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [show, setShow] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [wishList, setWishList] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { products } = useSelector((state) => state.product);
  const { Oneuser, isAuthenticated } = useSelector((state) => state.auth);
  const { cartProducts } = useSelector((state) => state.cart);

  //scroll*********
  useEffect(() => {
    ///toggle header
    window.addEventListener("scroll", () => {
      if (window.scrollY > 70) {
        setActive(true);
      } else {
        setActive(false);
      }
    });
  }, [window.scrollY]);

  const handleLogOut = () => {
    dispatch(logOutUser());
    navigate("/home");
    setShow(!show);
  };

  const handleSerchChange = (e) => {
    const term = e.target.value;
    setSearchTrem(term);
    const filterProducts = products.filter((product) =>
      product.name.toLowerCase().includes(term.toLowerCase())
    );
    setSearchData(filterProducts);
  };

  return (
    <>
      <div className={`${styles.section}`}>
        {/******logooooo */}
        <div className="hidden 800px:flex items-center justify-between 800px:h-[50px] 800px:my-[20px]">
          <div
            className={`${styles.normalFlex}  capitalize text-[25px] font-bold`}
          >
            <Link to={"/"}>
              <img src={logoImage} alt="" className="h-[45px] w-[100px]" />
            </Link>
          </div>
          {/****box serch*** */}
          <div className="relative w-[50%]">
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
                            src={`${Backend_Url}${item.images[0]}`}
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

          {/**********************btn become*****************/}
          <div className={`${styles.button}`}>
            <Link to={"/seller-login"}>
              <h1 className="capitalize text-[#fff] gap-1 flex items-center">
                become seller <IoIosArrowForward />
              </h1>
            </Link>
          </div>
        </div>
      </div>
      {/**********************header blue*************************** */}
      <div
        className={`${
          active === true
            ? "shadow-sm fixed top-0 left-0 z-40 transition delay-0 duration-200"
            : "null"
        }  hidden 800px:flex items-center justify-between w-full bg-[#3321c8] h-[70px] transition duration-500`}
      >
        <div
          className={`${styles.section}  relative ${styles.normalFlex} justify-between`}
        >
          {/**************category*********** */}
          <div className="relative mt-[10px] h-[60px] w-[270px] hidden 1000px:block">
            <MdFilterList size={30} className="absolute top-4 left-1" />
            <button
              onClick={() => {
                setDropDown(!dropDown);
              }}
              className="h-[100%] w-full bg-white flex items-center justify-between pl-[50px] select-none rounded-t-md text-lg font-[500]"
            >
              All Categories
            </button>
            <IoIosArrowDown
              size={25}
              className="absolute top-5 right-3 cursor-pointer"
              onClick={() => {
                setDropDown(!dropDown);
              }}
            />

            {dropDown ? (
              <DropDown
                categoriesData={categoriesData}
                setDropDown={setDropDown}
              />
            ) : null}
          </div>
          {/********************menu links and icons********************* */}
          <div className={`${styles.normalFlex}`}>
            <MenuLink activeHeading={activeHeading} />
          </div>
          {/***********************icons************************/}
          <div className={`${styles.normalFlex}`}>
            <div
              className=" relative cursor-pointer mr-[25px]"
              onClick={() => setWishList(true)}
            >
              <FaHeart size={25} color="red" />
              <span className="absolute right-[-7px] top-[-8px] rounded-full bg-[#3bc177] w-4 h-4 p-0 m-0 text-[#fff] text-[12px] leading-tight text-center">
                0
              </span>
            </div>

            <div
              className=" relative cursor-pointer mr-[25px]"
              onClick={() => setOpenCart(true)}
            >
              <HiShoppingCart size={28} color="rgb(255 255 255 / 83%)" />
              <span className="absolute right-[-4px] top-[-4px] rounded-full bg-[#3bc177] w-4 h-4 p-0 m-0 text-[#fff] text-[12px] leading-tight text-center">
                {cartProducts?.length}
              </span>
            </div>

            <div
              className=" relative cursor-pointer mr-[15px]"
              onClick={() => setShow(!show)}
            >
              {Oneuser && isAuthenticated === true ? (
                <>
                  <div className="flex items-center capitalize gap-1">
                    <img
                      src={`${Backend_Url}${Oneuser.avatar}`}
                      alt=""
                      className=" border-gray-600 border-2 w-[35px] h-[35px] rounded-full object-cover"
                    />
                    <span className="text-[#3bc117] font-[500]">
                      {Oneuser.name}
                    </span>
                    <IoIosArrowDown className="text-[#3bc117] font-[500]" />
                  </div>

                  {show ? (
                    <div className="bg-white absolute top-[100%] mt-1 z-[40] w-full flex items-center rounded-md py-3 gap-2 flex-col shadow-md">
                      <div
                        className="flex items-center justify-center w-full border-b py-1 "
                        onClick={() => navigate("/register")}
                      >
                        <span className="w-[25%] py-1">
                          <IoPersonCircleOutline
                            className="font-[500]"
                            size={28}
                          />
                        </span>
                        <span className="w-[70%] text-[18px] py-1 capitalize font-[400]">
                          register
                        </span>
                      </div>

                      <div
                        className="flex items-center justify-center w-full border-b py-1 "
                        onClick={() => navigate("/setting")}
                      >
                        <span className="w-[25%] py-1">
                          <SlSettings className="font-[500]" size={28} />
                        </span>
                        <span className="w-[70%] text-[18px] py-1 capitalize font-[400]">
                          Setting
                        </span>
                      </div>

                      <div
                        className="flex items-center justify-center w-full py-1 "
                        onClick={handleLogOut}
                      >
                        <span className="w-[25%] py-1">
                          <IoIosLogOut className="font-[500]" size={28} />
                        </span>
                        <span className="w-[70%] text-[18px] py-1 capitalize font-[400]">
                          logOut
                        </span>
                      </div>
                    </div>
                  ) : null}
                </>
              ) : (
                <>
                  <div className="flex items-center capitalize gap-1">
                    <Link to={"/login"}>
                      <IoPersonCircleOutline
                        size={30}
                        color="rgb(255 255 255 / 83%)"
                      />
                    </Link>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
        {/***************open cart*************** */}
        {openCart ? <Cart setOpenCart={setOpenCart} /> : null}
        {/***************open cart*************** */}
        {wishList ? <WishList setWishList={setWishList} /> : null}
      </div>

      <Responsive
        activeHeading={activeHeading}
        searchData={searchData}
        serchTerm={serchTerm}
        setSearchTrem={setSearchTrem}
        handleSerchChange={handleSerchChange}
      />
    </>
  );
};

export default Header;
