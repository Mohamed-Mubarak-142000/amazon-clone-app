import React, { useEffect, useState } from "react";
import styles from "../../styles/styles";
import { useDispatch, useSelector } from "react-redux";
import { getAllEventsForUser } from "../../redux/features/eventSlice";
import { useLocation } from "react-router-dom";
import OneEventProduct from "./OneEventProduct";

const Events = () => {
  const { OneEvent } = useSelector((state) => state.event);
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(getAllEventsForUser());
    if (location.pathname === "/events") {
      setData(OneEvent);
    } else {
      if (location.pathname === "/home") {
        const data = OneEvent && OneEvent.slice(0, 1);
        setData(data);
      }
    }
  }, []);

  return (
    <div className={`${styles.section}`}>
      <h1 className={`${styles.heading} capitalize font-[sans] font-[600]`}>
        events product
      </h1>
      {data.map((event, index) => {
        return <OneEventProduct event={event} key={index} />;
      })}
    </div>
  );
};

export default Events;
