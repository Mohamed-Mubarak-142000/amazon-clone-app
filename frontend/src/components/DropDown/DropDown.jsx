import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../styles/styles";

const DropDown = ({ setDropDown, categoriesData }) => {
  const navigate = useNavigate();

  const handleDropDown = (cat) => {
    navigate(`/products?category=${cat.title}`);
    setDropDown(false);
  };

  return (
    <div className="pb-3 w-[270px] bg-[#fff] absolute z-30 shadow-md rounded-b-md">
      {categoriesData &&
        categoriesData.map((cat, index) => {
          return (
            <div
              className={`${styles.normalFlex}`}
              key={index}
              onClick={() => handleDropDown(cat)}
            >
              <img
                src={cat.image_Url}
                style={{
                  width: "50px",
                  height: "50px",
                  objectFit: "contain",
                  marginLeft: "10px",
                }}
                alt=""
              />

              <h1 className="m-3 cursor-pointer select-none">{cat.title}</h1>
            </div>
          );
        })}
    </div>
  );
};

export default DropDown;
