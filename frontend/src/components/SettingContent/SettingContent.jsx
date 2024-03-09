import React, { useState } from "react";
import { Backend_Url } from "../../server";
import { useSelector } from "react-redux";
import styles from "../../styles/styles";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import { DataGrid } from "@material-ui/data-grid";
import { MdOutlineTrackChanges } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { MdPayment } from "react-icons/md";
import { HiReceiptRefund } from "react-icons/hi";
import { BiSolidBasket } from "react-icons/bi";

const SettingContent = ({ setActive, active }) => {
  const { Oneuser } = useSelector((state) => ({ ...state.auth }));
  const [name, setName] = useState(Oneuser && Oneuser?.user?.name);
  const [email, setEmail] = useState(Oneuser && Oneuser?.user?.email);
  const [phone, setPhone] = useState(Oneuser && Oneuser?.user?.phone);
  const [zipCode, setZipCode] = useState(Oneuser && Oneuser?.user?.zipCode);
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");

  const handleUpdate = (e) => {
    e.preventDefault();
  };
  return (
    <div className="w-[90%] 800px:w-[75%]  ">
      {active === 1 ? (
        <>
          <form onSubmit={handleUpdate}>
            <div className="flex flex-col gap-3 w-full my-[1rem] items-center">
              {/*****image**** */}
              <div className="w-[200px] h-[200px] rounded-full border-[#4cd964] border-2">
                <img
                  src={`${Backend_Url}${Oneuser.user.avatar}`}
                  className="w-full h-full rounded-full object-contain"
                  alt=""
                />
              </div>

              {/***********inputs******* */}
              <div className="flex flex-col justify-center gap-4 w-full md:flex-col lg:flex-row">
                <div className="w-[100%] p-2 md:w-[100%] lg:w-[50%]">
                  <label htmlFor="name" className="capitalize font-[700]">
                    Full Name:
                  </label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    id="name"
                    className={`${styles.input} bg-white rounded-md w-full outline-none mt-3 border-2 px-2 focus:border-indigo-600`}
                  />
                </div>

                <div className="w-[100%] p-2 md:w-[100%] lg:w-[50%]">
                  <label htmlFor="email" className=" capitalize font-[700]">
                    E-Mail address:
                  </label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    id="name"
                    className={`${styles.input} bg-white rounded-md w-full outline-none mt-3 border-2 px-2 focus:border-indigo-600`}
                  />
                </div>
              </div>

              {/***********inputs******* */}
              <div className="flex flex-col justify-center gap-4 w-full md:flex-col lg:flex-row">
                <div className="w-[100%] p-2 md:w-[100%] lg:w-[50%]">
                  <label htmlFor="name" className="capitalize font-[700]">
                    phone number:
                  </label>
                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    type="text"
                    id="name"
                    className={`${styles.input} bg-white rounded-md w-full outline-none mt-3 border-2 focus:border-indigo-600`}
                  />
                </div>

                <div className="w-[100%] p-2 md:w-[100%] lg:w-[50%]">
                  <label htmlFor="email" className=" capitalize font-[700]">
                    zip code:
                  </label>
                  <input
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                    type="text"
                    id="name"
                    className={`${styles.input} bg-white rounded-md w-full outline-none mt-3 border-2 focus:border-indigo-600`}
                  />
                </div>
              </div>

              {/***********inputs******* */}
              <div className="flex flex-col justify-center gap-4 w-full md:flex-col lg:flex-row">
                <div className="w-[100%] p-2 md:w-[100%] lg:w-[50%]">
                  <label htmlFor="name" className="capitalize font-[700]">
                    address:
                  </label>
                  <input
                    value={address1}
                    onChange={(e) => {
                      setAddress1(e.target.value);
                    }}
                    type="text"
                    id="name"
                    className={`${styles.input} bg-white rounded-md w-full outline-none mt-3 border-2 focus:border-indigo-600`}
                  />
                </div>

                <div className="w-[100%] p-2 md:w-[100%] lg:w-[50%]">
                  <label htmlFor="email" className=" capitalize font-[700]">
                    other address:
                  </label>
                  <input
                    value={address2}
                    onChange={(e) => {
                      setAddress2(e.target.value);
                    }}
                    type="text"
                    id="name"
                    className={`${styles.input} bg-white rounded-md w-full outline-none mt-3 border-2 focus:border-indigo-600`}
                  />
                </div>
              </div>

              <div className="flex w-full p-1">
                <button
                  type="submit"
                  className="border-2 w-[250px] h-[45px] text-[22px] rounded-sm border-indigo-500 px-2 hover:bg-[#3221c8e5] hover:border-none transition duration-300 hover:text-white  "
                >
                  update
                </button>
              </div>
            </div>
          </form>
        </>
      ) : null}

      {active === 2 ? (
        <div>
          <AllOrders />
        </div>
      ) : null}

      {active === 3 ? (
        <div>
          <RefundOrder />
        </div>
      ) : null}

      {active === 5 ? (
        <div>
          <TrackOrder />
        </div>
      ) : null}

      {active === 6 ? (
        <div>
          <PaymentMethod />
        </div>
      ) : null}

      {active === 7 ? (
        <div>
          <AddAddress />
        </div>
      ) : null}

      {active === 8 ? <div></div> : null}
    </div>
  );
};

export default SettingContent;

const AllOrders = () => {
  const orders = [
    {
      _id: "jnja6sda56fsdasd44sds",
      ordersItems: [
        {
          name: "Iphone 14 pro max",
        },
      ],
      totalPrice: 1050,
      orderStatus: "processing",
    },
    {
      _id: "jnja6ssa56fsdasd44sds",
      ordersItems: [
        {
          name: "Iphone 14 pro max",
        },
      ],
      totalPrice: 1050,
      orderStatus: "processing",
    },
  ];

  const columns = [
    { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.7 },
    {
      field: "status",
      headerName: "Status",
      minWidth: 130,
      flex: 0.8,
      cellClassName: (params) => {
        return params.getValue(params.id, "Status") === "Delivered"
          ? "greenColor"
          : "redColor";
      },
    },
    {
      field: "itemsQty",
      headerName: "Items Quantity",
      minWidth: 150,
      type: "number",
      flex: 0.7,
    },
    {
      field: "total",
      headerName: "Total Order",
      minWidth: 150,
      type: "number",
      flex: 0.8,
    },
    {
      field: " ",
      headerName: " ",
      minWidth: 150,
      type: "number",
      flex: 1,
      sortAble: false,
      renderCell: (params) => {
        return (
          <div className="border w-full flex justify-center items-center">
            <Link to={`/order/${params.id}`}>
              <button>
                <FaArrowRight size={25} />
              </button>
            </Link>
          </div>
        );
      },
    },
  ];

  const row = [];

  orders &&
    orders.forEach((item) => {
      row.push({
        id: item._id,
        itemsQty: item.ordersItems.length,
        total: "$" + item.totalPrice,
        status: item.orderStatus,
      });
    });

  return (
    <>
      <h1 className="text-[25px] font-[700] capitalize flex items-center gap-1 mb-[2rem]">
        <span>
          <BiSolidBasket size={30} color="#3321c8" />
        </span>
        <span>track order</span>
      </h1>
      <div>
        <DataGrid
          rows={row}
          columns={columns}
          pageSize={10}
          disableSelectionOnClick
          autoHeight
        />
      </div>
    </>
  );
};
const RefundOrder = () => {
  const orders = [
    {
      _id: "jnja6sda56fsdasd44sds",
      ordersItems: [
        {
          name: "Iphone 14 pro max",
        },
      ],
      totalPrice: 1050,
      orderStatus: "processing",
    },
    {
      _id: "jnja6ssa56fsdasd44sds",
      ordersItems: [
        {
          name: "Iphone 14 pro max",
        },
      ],
      totalPrice: 1050,
      orderStatus: "processing",
    },
  ];

  const columns = [
    { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.7 },
    {
      field: "status",
      headerName: "Status",
      minWidth: 130,
      flex: 0.8,
      cellClassName: (params) => {
        return params.getValue(params.id, "Status") === "Delivered"
          ? "greenColor"
          : "redColor";
      },
    },
    {
      field: "itemsQty",
      headerName: "Items Quantity",
      minWidth: 150,
      type: "number",
      flex: 0.7,
    },
    {
      field: "total",
      headerName: "Total Order",
      minWidth: 150,
      type: "number",
      flex: 0.8,
    },
    {
      field: " ",
      headerName: " ",
      minWidth: 150,
      type: "number",
      flex: 1,
      sortAble: false,
      renderCell: (params) => {
        return (
          <div className="border w-full flex justify-center items-center">
            <Link to={`/order/${params.id}`}>
              <button>
                <FaArrowRight size={25} />
              </button>
            </Link>
          </div>
        );
      },
    },
  ];

  const row = [];

  orders &&
    orders.forEach((item) => {
      row.push({
        id: item._id,
        itemsQty: item.ordersItems.length,
        total: "$" + item.totalPrice,
        status: item.orderStatus,
      });
    });

  return (
    <>
      <h1 className="text-[25px] font-[700] capitalize flex items-center gap-1 mb-[2rem]">
        <span>
          <HiReceiptRefund size={30} color="#3321c8" />
        </span>
        <span> refunds order</span>
      </h1>
      <div>
        <DataGrid
          rows={row}
          columns={columns}
          pageSize={10}
          disableSelectionOnClick
          autoHeight
        />
      </div>
    </>
  );
};
const TrackOrder = () => {
  const orders = [
    {
      _id: "jnja6sda56fsdasd44sds",
      ordersItems: [
        {
          name: "Iphone 14 pro max",
        },
      ],
      totalPrice: 1050,
      orderStatus: "processing",
    },
    {
      _id: "jnja6ssa56fsdasd44sds",
      ordersItems: [
        {
          name: "Iphone 14 pro max",
        },
      ],
      totalPrice: 1050,
      orderStatus: "processing",
    },
  ];

  const columns = [
    { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.7 },
    {
      field: "status",
      headerName: "Status",
      minWidth: 130,
      flex: 0.8,
      cellClassName: (params) => {
        return params.getValue(params.id, "Status") === "Delivered"
          ? "greenColor"
          : "redColor";
      },
    },
    {
      field: "itemsQty",
      headerName: "Items Quantity",
      minWidth: 150,
      type: "number",
      flex: 0.7,
    },
    {
      field: "total",
      headerName: "Total Order",
      minWidth: 150,
      type: "number",
      flex: 0.8,
    },
    {
      field: " ",
      headerName: " ",
      minWidth: 150,
      type: "number",
      flex: 1,
      sortAble: false,
      renderCell: (params) => {
        return (
          <div className="border w-full flex justify-center items-center">
            <Link to={`/order/${params.id}`}>
              <button>
                <MdOutlineTrackChanges size={25} />
              </button>
            </Link>
          </div>
        );
      },
    },
  ];

  const row = [];

  orders &&
    orders.forEach((item) => {
      row.push({
        id: item._id,
        itemsQty: item.ordersItems.length,
        total: "$" + item.totalPrice,
        status: item.orderStatus,
      });
    });

  return (
    <>
      <h1 className="text-[25px] font-[700] capitalize flex items-center gap-1 mb-[2rem]">
        <span>
          <MdOutlineTrackChanges size={30} color="#3321c8" />
        </span>
        <span>track order</span>
      </h1>
      <div>
        <DataGrid
          rows={row}
          columns={columns}
          pageSize={10}
          disableSelectionOnClick
          autoHeight
        />
      </div>
    </>
  );
};
const PaymentMethod = () => {
  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-[25px] font-[700] capitalize flex items-center gap-1">
          <span>
            <MdPayment size={30} color="#3321c8" />
          </span>
          <span>payment methods</span>
        </h1>
        <span className="bg-black cursor-pointer text-white rounded-md w-[120px] h-[45px] capitalize flex items-center justify-center font-[600]">
          add new
        </span>
      </div>

      <div className="flex flex-col">
        <div className="shadow-lg px-5 my-[1rem] py-2 rounded-lg flex flex-col  items-start gap-2 justify-between 800px:flex-row 800px:items-center">
          <div className="flex gap-2 items-center">
            <div className="w-[100px] h-[50px] flex gap-3">
              <img
                src="data:image/png;base64,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"
                alt=""
                className="w-[80%] h-full object-contain"
              />
            </div>
            <h1 className="text-[15px] capitalize font-[700]">
              mohamed mubarak omar
            </h1>
          </div>

          <div className="flex gap-2 font-[600] text-[18px] items-center">
            <span>1254</span>
            <span>****</span>
            <span>****</span>
            <span>**23</span>
          </div>

          <div className="flex gap-2 font-[600] text-[18px] items-center">
            <span>18/2/2024</span>
          </div>

          <div>
            <MdDelete
              className="hover:text-red-500 transition duration-150 cursor-pointer"
              size={30}
            />
          </div>
        </div>

        <div className="shadow-lg px-5 my-[1rem] py-2 rounded-lg flex flex-col  items-start gap-2 justify-between 800px:flex-row 800px:items-center">
          <div className="flex gap-2 items-center">
            <div className="w-[100px] h-[50px] flex gap-5">
              <img
                src="data:image/png;base64,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"
                alt=""
                className="w-[75%] h-full object-contain"
              />
            </div>
            <h1 className="text-[15px] capitalize font-[700]">
              mohamed mubarak omar
            </h1>
          </div>

          <div className="flex gap-2 font-[600] text-[18px] items-center">
            <span>1254</span>
            <span>****</span>
            <span>****</span>
            <span>**23</span>
          </div>
          <div className="flex gap-2 font-[600] text-[18px] items-center">
            <span>18/3/2024</span>
          </div>

          <div>
            <MdDelete
              className="hover:text-red-500 transition duration-150 cursor-pointer"
              size={30}
            />
          </div>
        </div>
      </div>
    </>
  );
};
const AddAddress = () => {
  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-[25px] font-[700] capitalize flex items-center gap-1">
          <span>
            <IoLocation size={30} color="#3321c8" />
          </span>
          <span>My Address</span>
        </h1>
        <span className="bg-black cursor-pointer text-white rounded-md w-[120px] h-[45px] capitalize flex items-center justify-center font-[600]">
          add new
        </span>
      </div>

      <div className="flex flex-col">
        <div className="shadow-lg px-5 my-[1rem] py-2 rounded-lg flex flex-col  items-start gap-2 justify-between 800px:flex-row 800px:items-center">
          <div className="flex gap-2 items-center">
            <h1 className="text-[15px] capitalize font-[700]">default</h1>
          </div>

          <div className="flex gap-2 font-[600] text-[18px] items-center">
            <h1>Al-Rawda Village - Birkat Al-Sabaa - Menoufia</h1>
          </div>

          <div>
            <MdDelete
              className="hover:text-red-500 transition duration-150 cursor-pointer"
              size={30}
            />
          </div>
        </div>
      </div>
    </>
  );
};
