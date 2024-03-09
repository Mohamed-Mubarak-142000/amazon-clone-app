import React, { useEffect, useState } from "react";
import styles from "../../styles/styles";
import ProductCard from "../ProductCard/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductForUser } from "../../redux/features/productSilce";

const FeaturedProducts = () => {
  const { products } = useSelector((state) => state.product);

  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const data = products.slice(0, 8);
    setData(data);
    dispatch(getAllProductForUser());
  }, []);

  return (
    <>
      <div className={`${styles.section} bg-white p-2 my-[5rem]`}>
        <div className={`${styles.heading} capitalize font-[sans] font-[600]`}>
          <h1>featured products</h1>
        </div>

        {data && data.length !== 0 ? (
          <div className="grid grid-cols-1 gap-[5px] md:grid-cols-2 md:gap-[10px] lg:grid-cols-4 lg:gap-[20px] xl:grid-cols-5 xl:gap-[20px]">
            {data &&
              data.map((pro, index) => {
                return <ProductCard data={pro} key={index} />;
              })}
          </div>
        ) : (
          <h1 className="capitalize text-center text-[22px] text-gray-500 ">
            not any product exist.!
          </h1>
        )}
      </div>
    </>
  );
};

export default FeaturedProducts;
