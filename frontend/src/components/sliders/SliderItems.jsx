import React from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";

const SliderItems = ({ data }) => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 2,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "ease-in-out",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  const navigate = useNavigate();
  const handleSubmitCategories = (cat) => {
    navigate(`/product?category=${cat.title}`);
  };
  return (
    <Slider className="shadow-lg px-2 pt-8 rounded-md " {...settings}>
      {data &&
        data.map((cat, index) => {
          return (
            <div
              className=" w-[130px] h-[260px] shadow-lg cursor-pointer hover:opacity-50 hover:transition-all "
              onClick={() => handleSubmitCategories(cat)}
              key={index}
            >
              <img
                src={cat.image_Url}
                className=" rounded-md"
                style={{ height: "75%", width: "100%" }}
                alt=""
              />
              <h1 className="text-[20px] mt-2 font-[600] text-center ">
                {cat.title}
              </h1>
            </div>
          );
        })}
    </Slider>
  );
};

export default SliderItems;
