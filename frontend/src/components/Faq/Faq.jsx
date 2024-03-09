import React, { useState } from "react";
import styles from "../../styles/styles";
import { IoIosArrowForward } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

const Faq = () => {
  const [activeTap, setActiveTap] = useState(0);
  const toggleTap = (tap) => {
    if (activeTap === tap) {
      setActiveTap(0);
    } else {
      setActiveTap(tap);
    }
  };
  return (
    <>
      <div className={`${styles.section} bg-white p-2 my-[2rem]`}>
        <div
          className={`${styles.heading} capitalize font-[600] font-[sans] text-[35px]`}
        >
          faq
        </div>

        <div className="flex flex-col gap-[15px]">
          {/****************single faq****** */}
          <div>
            <button
              className=" w-full flex items-center justify-between p-3 border-b-2"
              onClick={() => toggleTap(1)}
            >
              <span className="font-[500] text-[20px] capitalize">
                how do i track my order ?
              </span>
              {activeTap === 1 ? (
                <IoMdClose size={25} />
              ) : (
                <IoIosArrowForward size={25} />
              )}
            </button>

            {activeTap === 1 && (
              <div className=" shadow-md p-2 rounded-md">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Veniam rem, accusamus quo obcaecati, eaque qui cumque animi
                  assumenda numquam exercitationem tempora porro unde
                  repellendus, aliquam officiis placeat molestiae explicabo
                  voluptatibus.
                </p>
              </div>
            )}
          </div>

          {/****************single faq****** */}
          <div>
            <button
              className=" w-full flex items-center justify-between p-3 border-b-2"
              onClick={() => toggleTap(2)}
            >
              <span className="font-[500] text-[20px] capitalize">
                how do i track my order ?
              </span>
              {activeTap === 2 ? (
                <IoMdClose size={25} />
              ) : (
                <IoIosArrowForward size={25} />
              )}
            </button>

            {activeTap === 2 && (
              <div className=" shadow-md p-2 rounded-md">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Veniam rem, accusamus quo obcaecati, eaque qui cumque animi
                  assumenda numquam exercitationem tempora porro unde
                  repellendus, aliquam officiis placeat molestiae explicabo
                  voluptatibus.
                </p>
              </div>
            )}
          </div>

          {/****************single faq****** */}
          <div>
            <button
              className=" w-full flex items-center justify-between p-3 border-b-2"
              onClick={() => toggleTap(3)}
            >
              <span className="font-[500] text-[20px] capitalize">
                how do i track my order ?
              </span>
              {activeTap === 3 ? (
                <IoMdClose size={25} />
              ) : (
                <IoIosArrowForward size={25} />
              )}
            </button>

            {activeTap === 3 && (
              <div className=" shadow-md p-2 rounded-md">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Veniam rem, accusamus quo obcaecati, eaque qui cumque animi
                  assumenda numquam exercitationem tempora porro unde
                  repellendus, aliquam officiis placeat molestiae explicabo
                  voluptatibus.
                </p>
              </div>
            )}
          </div>

          {/****************single faq****** */}
          <div>
            <button
              className=" w-full flex items-center justify-between p-3 border-b-2"
              onClick={() => toggleTap(5)}
            >
              <span className="font-[500] text-[20px] capitalize">
                how do i track my order ?
              </span>
              {activeTap === 5 ? (
                <IoMdClose size={25} />
              ) : (
                <IoIosArrowForward size={25} />
              )}
            </button>

            {activeTap === 5 && (
              <div className=" shadow-md p-2 rounded-md">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Veniam rem, accusamus quo obcaecati, eaque qui cumque animi
                  assumenda numquam exercitationem tempora porro unde
                  repellendus, aliquam officiis placeat molestiae explicabo
                  voluptatibus.
                </p>
              </div>
            )}
          </div>

          {/****************single faq****** */}
          <div>
            <button
              className=" w-full flex items-center justify-between p-3 border-b-2"
              onClick={() => toggleTap(6)}
            >
              <span className="font-[500] text-[20px] capitalize">
                how do i track my order ?
              </span>
              {activeTap === 6 ? (
                <IoMdClose size={25} />
              ) : (
                <IoIosArrowForward size={25} />
              )}
            </button>

            {activeTap === 6 && (
              <div className=" shadow-md p-2 rounded-md text-[20px]  text-gray-500">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Veniam rem, accusamus quo obcaecati, eaque qui cumque animi
                  assumenda numquam exercitationem tempora porro unde
                  repellendus, aliquam officiis placeat molestiae explicabo
                  voluptatibus.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
