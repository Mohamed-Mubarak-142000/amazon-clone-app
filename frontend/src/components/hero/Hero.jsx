import React from "react";
import styles from "../../styles/styles";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div
      className={`${styles.normalFlex} relative min-h-[85vh]  w-full bg-no-repeat overflow-hidden`}
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/5650049/pexels-photo-5650049.jpeg)",
        // backgroundPosition: "contain",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className=" w-[90%] 800px:w-[50%] absolute right-5 ">
        <h1 className=" font-[sans] leading-[1.2] capitalize font-[600] xs:text-[10px] sm:text-[20px] md:text-[35px] lg:text-[40px]  ">
          best for collection <br /> home derocation.!
        </h1>
        <p className="text-[#000000ba] font-[poppins] py-5 text-[14px] font-[500] w-[85%]  md:text-[14px] lg:text-[20px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          voluptates error vitae incidunt accusantium deleniti tempore est
          explicabo exercitationem, officia assumenda eveniet enim, dolores
          neque sint nam placeat! Laborum, tenetur.Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Dolorum voluptates error vitae incidunt
          accusantium deleniti tempore est explicabo exercitationem, officia
          assumenda eveniet enim, dolores neque sint nam placeat! Laborum,
          tenetur.
        </p>
        {/**********************btn become*****************/}
        <div className={`${styles.button}`}>
          <Link to={"/"}>
            <h1 className="capitalize text-[18px] text-[#fff] gap-1 flex items-center">
              shop now
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
