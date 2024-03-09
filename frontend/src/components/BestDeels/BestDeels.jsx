import React, { useEffect, useState } from "react";
import styles from "../../styles/styles";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../ProductCard/ProductCard";
import { getAllProductForUser } from "../../redux/features/productSilce";

const BestDeels = () => {
  const { products } = useSelector((state) => state.product);
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    const data = products.slice(0, 10);
    setData(data);
    dispatch(getAllProductForUser());
  }, []);
  return (
    <>
      <div className={`${styles.section} bg-white my-16 px-2 py-8 rounded-lg`}>
        {/********heading********** */}
        <div className={`${styles.heading} font-[sans] capitalize font-[600]`}>
          <h1>best deels</h1>
        </div>

        {/*********products****** */}

        {data && data.length !== 0 ? (
          <>
            <div className="grid grid-cols-1 gap-[5px] md:grid-cols-2 md:gap-[10px] lg:grid-cols-4 lg:gap-[20px] xl:grid-cols-5 xl:gap-[20px]">
              {data &&
                data?.map((pro, index) => (
                  <ProductCard data={pro} key={index} />
                ))}
            </div>
          </>
        ) : (
          <h1 className="capitalize text-center text-[22px] text-gray-500 ">
            not any product exist.!
          </h1>
        )}
      </div>
    </>
  );
};

export default BestDeels;
