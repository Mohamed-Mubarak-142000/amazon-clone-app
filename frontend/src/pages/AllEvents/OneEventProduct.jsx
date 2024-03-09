import React, { useEffect, useState } from "react";
import { Backend_Url } from "../../server";
import styles from "../../styles/styles";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import CountDown from "../../components/CountDown/CountDown";
import { CiEdit } from "react-icons/ci";
import { deleteEvent, getAllEvents } from "../../redux/features/eventSlice";

const OneEventProduct = ({ data }) => {
  const [selectImg, setSelectImg] = useState(0);
  const { OneSeller } = useSelector((state) => state.seller);
  const dispatch = useDispatch();

  const handleDeleteEvent = () => {
    dispatch(deleteEvent(data._id));
    dispatch(getAllEvents(OneSeller?._id));
  };

  return (
    <div className="grid grid-cols-1 gap-2 800px:grid-cols-2 my-3 bg-white rounded-md shadow-md">
      {/************all image********* */}
      <div className="cursor-pointer">
        {/************image main***** */}
        <div className="w-full h-[300px] md:h-[400px] lg:h-[400px]">
          <img
            src={`${Backend_Url}${data.images[selectImg]}`}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        {/********small image************* */}
        <div className="w-full h-[120px] flex justify-center gap-4 items-center">
          {data &&
            data.images?.map((img, index) => {
              return (
                <>
                  {/*****one image***/}
                  <div
                    className={`${
                      selectImg === index ? "border" : "none"
                    } w-[120px] h-[110px] `}
                  >
                    <img
                      src={`${Backend_Url}${data.images[index]}`}
                      alt=""
                      className="w-full h-full object-cover"
                      onClick={() => setSelectImg(index)}
                    />{" "}
                  </div>
                </>
              );
            })}
        </div>
      </div>

      {/*****details******/}
      <div className="w-full py-2">
        <div className="w-full">
          <h1 className="capitalize text-gray-500 font-[600] ">
            name product <span className="text-[red]">*</span>
          </h1>
          <h1 className={`${styles.heading} capitalize`}>{data.name}</h1>
        </div>

        <div className="w-full">
          <h1 className="capitalize text-gray-500 font-[600] ">
            description product<span className="text-[red]">*</span>
          </h1>
          <h1 className="text-[18px]">
            {data.description.slice(0, 300) + "..."}
          </h1>
        </div>

        <div className="w-full my-2">
          <h1 className="capitalize text-gray-500 font-[600] ">
            Category of product <span className="text-[red]">*</span>
          </h1>
          <h1>{data.category}</h1>
        </div>

        <div className="w-full my-2 flex items-center justify-between px-2">
          <div>
            <h1 className="capitalize text-gray-500 font-[600] ">
              price of product <span className="text-[red]">*</span>
            </h1>
            <div className="flex my-2">
              <h1 className={`${styles.discountPrice} font-[700]`}>
                {data.discountPrice}
              </h1>

              <h1 className={`${styles.price} font-[700]`}>
                {data.originalPrice}
              </h1>
            </div>
          </div>

          <div>
            <h1 className="text-[#17dd1f] font-[600]">{data.stock} stock</h1>
            <h1 className="text-[red] font-[600]">{data.sold_out} sold Out</h1>
          </div>
        </div>

        {/***shop**** */}
        <div className="w-full flex justify-between px-3 items-center">
          <div className="flex items-center gap-1">
            {/****image shop**** */}
            <div className="w-[70px] h-[70px] rounded-full">
              <img
                src={`${Backend_Url}${data?.shop?.avatar}`}
                alt=""
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <h1 className={`${styles.shopName} font-[700]`}>
              {data?.shop?.name}
            </h1>
          </div>

          <div className="w-[120px] h-[45px] rounded-md font-[600] capitalize bg-black text-white flex justify-center items-center">
            <Link to={`/home-seller/${OneSeller?.seller?._id}`}>
              visit shop
            </Link>
          </div>
        </div>
        <div className="w-full flex justify-around items-center">
          <CountDown start={data?.startDate} end={data?.finishDate} />
          <div className="flex flex-col justify-center items-center gap-2">
            <button
              onClick={handleDeleteEvent}
              type="button"
              className=" text-white bg-[red] w-[160px] h-[45px] text-[18px] flex justify-center items-center gap-1 rounded-md capitalize"
            >
              delete product
              <MdDelete size={25} color="white" />
            </button>

            <button
              type="button"
              className=" text-white bg-blue-500 w-[160px] h-[45px] text-[18px] flex justify-center items-center gap-1 rounded-md capitalize"
            >
              edit product
              <CiEdit size={25} color="white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneEventProduct;
