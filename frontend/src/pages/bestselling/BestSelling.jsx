import React, { useEffect, useState } from "react";
import { Header } from "../../routes/Routers";
import styles from "../../styles/styles";
import { productData } from "../../static/data";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductForUser } from "../../redux/features/productSilce";

const BestSelling = () => {
  const { products } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProductForUser());
  }, []);
  return (
    <>
      <Header activeHeading={2} />
      <br />
      <br />
      <br />
      <div className={`${styles.section} my-[1rem]`}>
        {products.length ? (
          <>
            <div className="grid grid-cols-1 gap-[30px] md:grid-cols-2 md:gap-[30px] lg:grid-cols-5 lg:gap-[30px]">
              {products &&
                products.map((item, index) => {
                  return <ProductCard data={item} index={index} />;
                })}
            </div>
          </>
        ) : (
          <h1 className="text-gray-400 text-[35px] font-[600] text-center">
            Not Any Products Exist.!{" "}
          </h1>
        )}
      </div>
    </>
  );
};

export default BestSelling;
