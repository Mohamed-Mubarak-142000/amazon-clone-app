import React from "react";
import styles from "../../styles/styles";
import { navItems } from "../../static/data";
import { Link } from "react-router-dom";

const MenuLink = ({ activeHeading }) => {
  return (
    <div
      className={` flex-col justify-start items-start gap-3 800px:gap-0  800px:flex-row ${styles.normalFlex}`}
    >
      {navItems &&
        navItems.map((link, index) => {
          return (
            <div
              key={index}
              className="flex w-full text-[18px] py-3 800px:w-[140px] 800px:py-1 800px:text-[16px]"
            >
              <Link
                to={link.url}
                className={`${
                  activeHeading === index + 1 ? "text-[#17dd1f]" : "text-[#000]"
                } font-[600] px-6 cursor-pointer 800px:text-white w-full
                `}
              >
                {link.title}
              </Link>
            </div>
          );
        })}
    </div>
  );
};

export default MenuLink;
