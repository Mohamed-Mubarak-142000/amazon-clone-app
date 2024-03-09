import React, { useEffect, useState } from "react";
import ShopLayout from "../../components/shopLayout/ShopLayout";
import SideBarDashboard from "../../components/shopLayout/SideBarDashboard";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../redux/features/productSilce";
import ProductCard from "./ProductCard";
import Spinner from "../../components/spinner/Spinner";

const AllProducts = () => {
  const dispatch = useDispatch();
  const { OneSeller } = useSelector((state) => state.seller);
  const { products, loading } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getAllProducts(OneSeller?._id));
  }, [dispatch]);

  return (
    <>
      {loading === true ? (
        <Spinner />
      ) : (
        <>
          <ShopLayout>
            <div className="flex justify-between gap-1">
              <div className="sticky top-0 left-0 w-[60px] 800px:w-[300px] shadow-md bg-white">
                <SideBarDashboard active={3} />
              </div>

              <div className="w-[80%] ">
                <div className="border-b-2 w-full flex justify-between items-center px-5 py-2">
                  <h1 className="p-1 text-[red] border-gray-300 capitalize font-[600] font-Roboto text-[25px]">
                    all products
                  </h1>

                  <div className="bg-black text-white h-[45px] w-[130px] text-[18px] font-[600px] flex justify-center items-center capitalize rounded-sm">
                    {products && <h1>{`(${products.length}) products`}</h1>}
                  </div>
                </div>

                <div className=" w-full py-2">
                  <div className="flex justify-center 800px:justify-start flex-wrap gap-3">
                    {products &&
                      products?.map((pro, index) => {
                        return <ProductCard data={pro} key={index} />;
                      })}
                  </div>
                </div>
              </div>
            </div>
          </ShopLayout>
        </>
      )}
    </>
  );
};

export default AllProducts;
