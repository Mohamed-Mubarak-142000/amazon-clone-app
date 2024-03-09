import React, { useEffect, useState } from "react";
import styles from "../../styles/styles";
import { AiFillMessage } from "react-icons/ai";
import { Backend_Url } from "../../server";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../redux/features/productSilce";

const ProductInfo = ({ dataProduct }) => {
  const [active, setActive] = useState(1);
  const { products } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts(dataProduct.shop._id));
  }, []);

  return (
    <div
      className={`${styles.section} bg-[#f4f4f4] my-[2rem] w-[80%] min-h-[400px] rounded-md`}
    >
      {/**********headers****** */}
      <div className="flex justify-between items-center px-3 border-b-2 py-3 ">
        <div className="relative">
          <h2
            onClick={() => setActive(1)}
            className="font-[700] capitalize text-[20px] cursor-pointer leading-5"
          >
            product details
          </h2>
          {active === 1 ? (
            <div className={`${styles.activeIndicator}`}></div>
          ) : null}
        </div>

        <div className="relative">
          <h2
            onClick={() => setActive(2)}
            className="font-[700] capitalize text-[20px] cursor-pointer leading-5"
          >
            product reviews
          </h2>
          {active === 2 ? (
            <div className={`${styles.activeIndicator}`}></div>
          ) : null}
        </div>

        <div className="relative">
          <h2
            onClick={() => setActive(3)}
            className="font-[700] capitalize text-[20px] cursor-pointer leading-5"
          >
            seller information
          </h2>
          {active === 3 ? (
            <div className={`${styles.activeIndicator}`}></div>
          ) : null}
        </div>
      </div>

      {/******contnet info********** */}

      {active === 1 ? (
        <div className="p-2 text-[18px] font-[400] flex flex-col">
          <p className="leading-10  whitespace-pre-line gap-5">
            {dataProduct.description}
          </p>
        </div>
      ) : null}

      {/***************review*** */}
      {active === 2 ? (
        <h1 className="text-center py-5 font-[700] text-[22px] text-gray-500">
          No Review Yet !
        </h1>
      ) : null}

      {/***************review*** */}
      {active === 3 ? (
        <>
          {/**************** shop******* */}
          <div className="flex justify-between gap-1 items-center py-8 px-5 ">
            {/************image shop***** */}
            <div className="w-[50%] leading-2">
              <div className=" flex gap-1">
                <Link
                  to={`/home-seller/${dataProduct.shop._id}`}
                  className=" w-[50px] h-[50px] rounded-full ml-1"
                >
                  <img
                    src={`${Backend_Url}${dataProduct.shop.avatar}`}
                    alt=""
                    className="w-[100%] h-[100%] rounded-full object-contain"
                  />
                </Link>
                {/********details shop******* */}
                <div>
                  <h3 className={`${styles.shopName}`}>
                    {dataProduct.shop.name.slice(0, 20)}
                  </h3>
                  <h3>(4.5) Ratings</h3>
                </div>
              </div>

              <div className="font-[400] text-[18px] mt-5">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptas consequuntur culpa quae nisi! Quae consequatur culpa
                Voluptas consequuntur culpa quae nisi! Quae consequatur culpa
                Voluptas consequuntur culpa quae nisi! Quae consequatur culpa
                Voluptas consequuntur culpa quae nisi! Quae consequatur culpa
                Voluptas consequuntur culpa quae nisi! Quae consequatur culpa
                recusandae deleniti sapiente maxime harum officia. Obcaecati
                praesentium nisi earum. Neque praesentium dolores blanditiis.
              </div>
            </div>
            {/************send message************ */}
            <div className="ml-2 my-4">
              <h1 className=" text-[20px]">
                <span className="font-[600] capitalize text-[20px]">
                  joined on:
                </span>{" "}
                {dataProduct.shop.createdAt}
              </h1>

              <h1 className=" text-[20px]">
                <span className="font-[600] capitalize text-[20px]">
                  Total Products:
                </span>
                ({products.length})product
              </h1>
              <h1 className=" text-[20px]">
                <span className="font-[600] capitalize text-[20px]">
                  Total Review :
                </span>{" "}
                132
              </h1>
              <div className={`${styles.button} text-white rounded-sm`}>
                <h1 className="flex items-center capitalize">
                  send message
                  <AiFillMessage className="ml-1" />
                </h1>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default ProductInfo;
