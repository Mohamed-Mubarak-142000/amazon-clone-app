import React, { useEffect, useState } from "react";
import { Header } from "../../routes/Routers";
import { useSearchParams } from "react-router-dom";
import { productData } from "../../static/data";
import ProductCard from "../../components/ProductCard/ProductCard";
import styles from "../../styles/styles";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductForUser } from "../../redux/features/productSilce";

const Products = () => {
  const [searchCategory] = useSearchParams();
  const categoryData = searchCategory.get("category");
  const [data, setData] = useState([]);
  const { products } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProductForUser());
    if (categoryData === null) {
      const data = products && [...products];
      setData(data);
    } else {
      const data =
        products && products.filter((item) => item.category === categoryData);
      setData(data);
    }
    window.scrollTo(0, 0);
  }, [searchCategory]);

  return (
    <>
      <Header activeHeading={3} />
      <br />
      <br />
      <br />
      <div className={`${styles.section} my-[1rem]`}>
        {data.length ? (
          <div className="grid grid-cols-1 gap-[30px] md:grid-cols-2 md:gap-[30px] lg:grid-cols-5 lg:gap-[30px]">
            {data &&
              data.map((item, index) => {
                return <ProductCard data={item} index={index} />;
              })}
          </div>
        ) : (
          <h1 className="text-gray-400 text-[35px] font-[600] text-center">
            Not Any Products Exist.!{" "}
          </h1>
        )}
      </div>
    </>
  );
};

export default Products;
