import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import styles from "../../styles/styles";
import { Backend_Url, server_Url } from "../../server";
import ProductCard from "../../components/ProductCard/ProductCard";
import { logoutShop } from "../../redux/features/sellerSlice";
import axios from "axios";
import Spinner from "../../components/spinner/Spinner";
import { getAllProducts } from "../../redux/features/productSilce";

const ShopHome = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${server_Url}/shop/get-shop-info/${id}`)
      .then((res) => {
        setData(res?.data?.shop);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });

    dispatch(getAllProducts(id));
  }, []);

  return (
    <>
      {isLoading === true ? (
        <Spinner />
      ) : (
        <>
          <div className={`${styles.section} my-[2rem]`}>
            <div className=" sticky top-2 left-0 z-10 w-full flex rounded-md justify-between ">
              <div className="w-[350px] rounded-md shadow-sm h-[95vh] bg-white">
                <SidebarInfoShop isOwner={true} data={data} />
              </div>

              <div className=" w-[76%] min-h-[90vh] ">
                <ContentShop />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default ShopHome;

const SidebarInfoShop = ({ isOwner, data }) => {
  const { isAuthenticated } = useSelector((state) => state.seller);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutShop({ navigate }));
  };

  return (
    <div className="w-full h-full py-[3rem] flex items-center justify-center flex-col gap-5">
      <div className="w-[120px] h-[120px] rounded-full object-cover">
        <img
          src={`${Backend_Url}${data?.avatar}`}
          className="w-full h-full rounded-full object-cover"
          alt=""
        />
      </div>

      <div className=" w-full flex justify-center items-center capitalize">
        <h1 className="text-[20px] font-[700]">{data?.name}</h1>
      </div>

      <div className=" w-full p-2">
        <div className=" w-full my-5">
          <h1 className="font-[700] capitalize"> Description</h1>
          <h2>
            {data?.description ? (
              data?.description
            ) : (
              <h1 className="text-center text-gray-400 font-[600]">
                Not Found Bio
              </h1>
            )}
          </h2>
        </div>
        <div className=" w-full my-5">
          <h1 className="font-[700] capitalize">email address</h1>
          <h2>{data?.email}</h2>
        </div>
        <div className=" w-full  my-5">
          <h1 className="font-[700] capitalize">phone number</h1>
          <h2>{data?.phoneNumber}</h2>
        </div>
        <div className=" w-full my-5">
          <h1 className="font-[700] capitalize">total products</h1>
          <h2>10</h2>
        </div>
        <div className=" w-full my-5">
          <h1 className="font-[700] capitalize">shop reting</h1>
          <h2>4.5</h2>
        </div>
        <div className=" w-full my-5">
          <h1 className="font-[700] capitalize">joined on</h1>
          <h2>{data?.createdAt}</h2>
        </div>
      </div>

      {isAuthenticated && (
        <>
          <div className="w-[95%] mx-auto h-[45px] bg-black flex justify-center items-center rounded-md ">
            <span className="text-white text-[20px] capitalize">edit shop</span>
          </div>

          <div
            onClick={handleLogout}
            className="w-[95%] mx-auto h-[45px] bg-black flex justify-center items-center rounded-md cursor-pointer"
          >
            <span className="text-white text-[20px] capitalize">log out</span>
          </div>
        </>
      )}
    </div>
  );
};

const ContentShop = () => {
  const [active, setActive] = useState(1);
  const { products } = useSelector((state) => state.product);

  return (
    <div className="w-full">
      <div className="flex justify-between px-5 mb-2 pb-2 items-center border-b-2 border-gray-400 ">
        <div className="flex justify-between gap-4 items-center">
          <div
            className="flex items-center justify-center cursor-pointer"
            onClick={() => setActive(1)}
          >
            <h1
              className={`${
                active === 1 ? "text-red-600" : "text-[#555]"
              } font-[700] text-[20px] capitalize`}
            >
              shop products
            </h1>
          </div>

          <div
            className="flex items-center justify-center cursor-pointer"
            onClick={() => setActive(2)}
          >
            <h1
              className={`${
                active === 2 ? "text-red-600" : "text-[#555]"
              } font-[700] text-[20px] capitalize`}
            >
              running events
            </h1>
          </div>

          <div
            className="flex items-center justify-center cursor-pointer"
            onClick={() => setActive(3)}
          >
            <h1
              className={`${
                active === 3 ? "text-red-600" : "text-[#555]"
              } font-[700] text-[20px] capitalize`}
            >
              shop reviews
            </h1>
          </div>
        </div>

        <div className="h-[45px] w-[130px] flex items-center justify-center font-[600]  rounded-sm bg-black text-white capitalize">
          <Link to={"/dashboard"}>go dashboard</Link>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4">
        {products &&
          products.map((pro, index) => {
            return <ProductCard data={pro} key={index} />;
          })}
      </div>
    </div>
  );
};
