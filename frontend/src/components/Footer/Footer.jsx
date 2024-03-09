import React from "react";
import styles from "../../styles/styles";
import LogoImage from "../../assets/images/icon.jpg";
import {
  FaFacebookSquare,
  FaGitSquare,
  FaInstagramSquare,
  FaExternalLinkSquareAlt,
  FaLinkedin,
} from "react-icons/fa";
import {
  footerProductLinks,
  footerSupportLinks,
  footercompanyLinks,
} from "../../static/data";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className={`mt-[3rem] bg-[#000]`}>
      {/***************subscribe*********** */}
      <div className="w-full bg-[#0033ff] grid grid-cols-1 gap-[10px] md:grid-cols-1 lg:grid-cols-2 lg:gap-[20px] py-[1rem]">
        <div className="flex justify-center ">
          <h1 className="sm:text-[20px] md:text-[25px] lg:text-[35px] font-[700] font-[sans] capitalize">
            <span className="text-[#4cd964]">subscribe</span> us for get new
            <br /> events and offers.!
          </h1>
        </div>
        <div className="flex justify-center flex-wrap mt-5 gap-[20px]">
          <input
            type="text"
            placeholder="Enter Your Email.."
            className="h-[50px] w-[350px] rounded-md px-2 text-[18px]"
          />

          <button
            type="button"
            className="bg-[#4cd964] h-[50px] w-[100px] rounded-md text-[20px] capitalize text-white font-[600]"
          >
            submit
          </button>
        </div>
      </div>

      <div className={`${styles.section} py-[1rem]`}>
        {/*************logo footer**************** */}
        <div
          className={`${styles.section} text-white grid grid-cols-2 gap-[30px] md:grid-cols-2 lg:grid-cols-4 lg:gap-[20px] py-[1rem]`}
        >
          <div className="border-gray-100 flex flex-col gap-3 ">
            <img src={LogoImage} alt="" className="h-[70px] w-[150px]" />
            <h1>
              the home and elements needs to <br />
              create beautiful products
            </h1>
            <h1 className="flex items-center gap-[10px] text-[30px]">
              <FaLinkedin />
              <FaFacebookSquare />
              <FaGitSquare />
              <FaInstagramSquare />
            </h1>
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="text-[22px] uppercase font-[600]">shop</h1>
            {footerProductLinks &&
              footerProductLinks.map((pro, index) => {
                return (
                  <Link
                    key={index}
                    to={"/"}
                    className="hover:text-[#4cd964] transition duration-75"
                  >
                    {pro.name}
                  </Link>
                );
              })}
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="text-[22px] uppercase font-[600]">shop</h1>
            {footercompanyLinks &&
              footercompanyLinks.map((pro, index) => {
                return (
                  <Link
                    key={index}
                    to={"/"}
                    className="hover:text-[#4cd964] transition duration-75"
                  >
                    {pro.name}
                  </Link>
                );
              })}
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="text-[22px] uppercase font-[600]">shop</h1>
            {footerSupportLinks &&
              footerSupportLinks.map((pro, index) => {
                return (
                  <Link
                    key={index}
                    to={"/"}
                    className="hover:text-[#4cd964] transition duration-75"
                  >
                    {pro.name}
                  </Link>
                );
              })}
          </div>
        </div>
      </div>

      <div className="w-full text-white flex justify-center text-[12px] md:text-[14px] lg:text-[16px]">
        <p>
          &copy; 2024 Website E-commerce. All rights reserved. prepared by{" "}
          <span className="text-[#4cd964] font-[600] ">Dev:M.Mubarak</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
