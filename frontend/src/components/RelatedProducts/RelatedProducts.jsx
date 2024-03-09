import React, { useEffect, useState } from "react";
import styles from "../../styles/styles";
import ProductCard from "../ProductCard/ProductCard";
import { useSelector } from "react-redux";

const RelatedProducts = ({ dataProduct }) => {
  const [data, setData] = useState(null);
  const { products } = useSelector((state) => state.product);

  useEffect(() => {
    const product =
      products &&
      products.filter((pro) => pro?.category === dataProduct?.category);
    setData(product);
  }, [dataProduct]);

  return (
    <div className="w-full bg-[#f1f1f1]">
      <div className={`${styles.section}`}>
        <div className={`${styles.heading} capitalize font-[700] py-[1rem]`}>
          <h1>related products</h1>
        </div>
        {data?.length ? (
          <>
            <div className="w-full grid grid-cols-1 gap-[30px] md:grid-cols-2 md:gap-[30px] lg:grid-cols-5 lg:gap-[30px] py-[2rem]">
              {data?.length &&
                data.map((pro, index) => {
                  return <ProductCard data={pro} key={index} />;
                })}
            </div>
          </>
        ) : (
          <h1 className="w-full text-gray-500 text-[25px] font-[600] text-center capitalize">
            not any product related exist.!
          </h1>
        )}
      </div>
    </div>
  );
};

export default RelatedProducts;
