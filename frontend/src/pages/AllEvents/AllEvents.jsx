import React, { useEffect } from "react";
import ShopLayout from "../../components/shopLayout/ShopLayout";
import SideBarDashboard from "../../components/shopLayout/SideBarDashboard";
import { useDispatch, useSelector } from "react-redux";
import { getAllEvents } from "../../redux/features/eventSlice";
import OneEventProduct from "./OneEventProduct";
import Spinner from "../../components/spinner/Spinner";

const AllEvents = () => {
  const dispatch = useDispatch();
  const { OneSeller } = useSelector((state) => state.seller);
  const { OneEvent, loading } = useSelector((state) => state.event);

  useEffect(() => {
    dispatch(getAllEvents(OneSeller?._id));
  }, [dispatch]);

  return (
    <>
      {loading === true ? (
        <Spinner />
      ) : (
        <>
          <ShopLayout>
            <div className="flex justify-between gap-1">
              <div className="sticky top-0 left-0 w-[60px] 800px:w-[300px] shadow-md h-screen bg-white">
                <SideBarDashboard active={5} />
              </div>

              <div className=" w-[85%] ">
                <div className="border-b-2 w-full flex justify-between items-center px-5 py-2">
                  <h1 className="p-1 text-[red] border-gray-300 capitalize font-[600] font-Roboto text-[25px]">
                    all Events
                  </h1>

                  <div className="bg-black text-white h-[45px] w-[130px] text-[18px] font-[600px] flex justify-center items-center capitalize rounded-sm">
                    {OneEvent && <h1>{`(${OneEvent.length}) products`}</h1>}
                  </div>
                </div>
                {OneEvent && OneEvent.length ? (
                  <>
                    <div className=" w-[95%] mx-auto my-3 ">
                      {OneEvent &&
                        OneEvent.map((event, index) => {
                          return <OneEventProduct data={event} key={index} />;
                        })}
                    </div>
                  </>
                ) : (
                  <h1 className="text-[30px] capitalize text-gray-500 text-center">
                    not any event exist.!
                  </h1>
                )}
              </div>
            </div>
          </ShopLayout>
        </>
      )}
    </>
  );
};

export default AllEvents;
