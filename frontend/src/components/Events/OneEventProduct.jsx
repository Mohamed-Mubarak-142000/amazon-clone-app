import React, { useState } from "react";
import { Backend_Url } from "../../server";
import styles from "../../styles/styles";
import CountDown from "../CountDown/CountDown";

const OneEventProduct = ({ event }) => {
  const [selected, setSelected] = useState(0);

  return (
    <div className={`bg-white p-2 my-10 `}>
      <div className="w-ful grid grid-cols-1 gap-[10px] p-3 md:grid-cols-1 md:gap-[10px] lg:grid-cols-2 lg:gap-[10px] rounded-md">
        <div className="w-full h-[500px]">
          <div className="w-full h-[75%]">
            <img
              src={`${Backend_Url}${event.images[selected]}`}
              className="w-[100%] h-[100%] object-contain"
              alt=""
            />
          </div>

          <div className="w-full flex items-center justify-center gap-1">
            {event.images.map((image, index) => {
              return (
                <div
                  className="w-[120px] border h-[120px] cursor-pointer"
                  onClick={() => setSelected(index)}
                >
                  <img
                    className="w-full h-full object-contain"
                    src={`${Backend_Url}${event.images[index]}`}
                    alt=""
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className=" flex flex-col flex-wrap">
          <div className={`${styles.heading}`}>
            <h1> {event.name}</h1>
          </div>

          <div>
            <h1>{event.description} </h1>
          </div>

          <div className=" flex items-center p-1 justify-between flex-wrap w-full px-5 py-5">
            <div className="flex">
              <h5 className={`${styles.productDisccoutPrice}`}>
                {event.discountPrice}$
              </h5>
              <h4 className={`${styles.price}`}>{event.originalPrice}$</h4>
            </div>
            <div className="flex p-1 flex-col">
              <span className="font-[600] text-[18px] text-[#68d284]">
                ({event.stock}) stock
              </span>

              <span className="font-[600] text-[18px] text-[red]">
                ({event.sold_out}) sold out
              </span>
            </div>
          </div>
          <CountDown event={event} />
        </div>
      </div>
    </div>
  );
};

export default OneEventProduct;
