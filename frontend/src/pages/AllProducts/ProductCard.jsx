import React from "react";
import styles from "../../styles/styles";
import { MdOutlineStarOutline } from "react-icons/md";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { IoIosCloseCircle } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProduct,
  getAllProducts,
} from "../../redux/features/productSilce";
import { Backend_Url } from "../../server";

const ProductCard = ({ data }) => {
  const { OneSeller } = useSelector((state) => state.seller);
  const dispatch = useDispatch();
  const handleDeleteProduct = () => {
    dispatch(deleteProduct(data._id));
    dispatch(getAllProducts(OneSeller?._id));
  };
  return (
    <div className="relative bg-white w-full 800px:w-[300px]  h-[450px] rounded-md shadow-md">
      {/***image product****/}
      <div className="w-full h-[40%]">
        <img
          src={`${Backend_Url}${data.images[0]}`}
          alt=""
          className="h-full w-full object-cover"
        />
      </div>

      {/***detailes */}
      <div className="w-full px-1">
        <h1 className={`${styles.shopName}`}>{data.shop.name}</h1>
      </div>

      <div className="w-full px-1">
        <h1 className="capitalize text-[18px] font-[600]">{data.name}</h1>
      </div>

      <div className="w-full px-1 h-[75px] ">
        <h1 className="text-[13px] font-[500] text-gray-500">
          {data.description.slice(0, 100) + "..."}
        </h1>
      </div>

      <div className="w-full p-1 flex gap-1">
        <MdOutlineStarPurple500 size={25} color="#f6ba00" />
        <MdOutlineStarPurple500 size={25} color="#f6ba00" />
        <MdOutlineStarPurple500 size={25} color="#f6ba00" />
        <MdOutlineStarOutline size={25} color="#f6ba00" />
        <MdOutlineStarOutline size={25} color="#f6ba00" />
      </div>

      <div className="w-full flex justify-between items-center p-1">
        <div className=" flex ">
          <h1 className={`${styles.discountPrice} font-[600]`}>
            {data.discountPrice}
          </h1>
          <h1 className={`${styles.price}`}>{data.originalPrice}</h1>
        </div>

        <h1 className="text-[#68d284] font-[600]">
          {data.stock} <span className="text-black font-[600]">sold</span>
        </h1>
      </div>

      <div className="w-full flex justify-center items-start">
        <button
          onClick={() => console.log(data._id)}
          className="w-[90%] py-2 rounded-md text-white capitalize font-[600] bg-blue-600 hover:bg-blue-700 transition duration-150"
          type="button"
        >
          edit product
        </button>
      </div>

      <IoIosCloseCircle
        onClick={handleDeleteProduct}
        size={30}
        color="red"
        className="absolute top-0 right-0 cursor-pointer"
      />
    </div>
  );
};

export default ProductCard;
