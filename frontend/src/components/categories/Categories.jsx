import React from "react";
import styles from "../../styles/styles";
import { brandingData, categoriesData } from "../../static/data";
import SliderItems from "../sliders/SliderItems";

const Categories = () => {
  return (
    <>
      {/**********services of category********* */}
      <div className={`${styles.section} my-10 shadow-md`}>
        <div
          className={`w-full my-12 grid grid-cols-1 sm:grid-cols-2 gap-[30px] md:grid-cols-2 md:gap-[20px] lg:grid-cols-4 lg:gap-[30px] bg-white py-10 rounded-md`}
        >
          {brandingData &&
            brandingData.map((brand, index) => {
              return (
                <div className="flex items-start p-5" key={index}>
                  {brand.icon}

                  <div className="px-3">
                    <h3 className="font-bold text-sm md:text-base">
                      {brand.title}
                    </h3>
                    <h1 className="text-sm md:text-sm">{brand.Description}</h1>
                  </div>
                </div>
              );
            })}
        </div>
      </div>

      {/*******************react slick category*************** */}
      <div className={`${styles.section} my-10  `} id="categories">
        <SliderItems data={categoriesData} />
      </div>
    </>
  );
};

export default Categories;
