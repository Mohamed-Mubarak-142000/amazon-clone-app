import React, { useEffect, useState } from "react";
import ShopLayout from "../../components/shopLayout/ShopLayout";
import SideBarDashboard from "../../components/shopLayout/SideBarDashboard";
import { categoriesData } from "../../static/data";
import styles from "../../styles/styles";
import { CiSquarePlus } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { createProduct } from "../../redux/features/productSilce";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const CreateProduct = () => {
  return (
    <ShopLayout>
      <div className="flex justify-between gap-1">
        <div className="sticky top-0 left-0 w-[60px] 800px:w-[300px] shadow-md h-screen bg-white">
          <SideBarDashboard active={4} />
        </div>

        <div className="sticky top-0 left-0 w-[85%] ">
          <CreateProductContent />
        </div>
      </div>
    </ShopLayout>
  );
};

const CreateProductContent = () => {
  const { OneSeller } = useSelector((state) => state.seller);

  const [images, setImages] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [originalPrice, setOriginalPrice] = useState();
  const [discountPrice, setDiscountPrice] = useState();
  const [tags, setTags] = useState("");
  const [stock, setStock] = useState();
  const [category, setCategory] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleImagesChange = (e) => {
    e.preventDefault();
    let files = Array.from(e.target.files);
    setImages((prevImages) => [...prevImages, ...files]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    const formData = new FormData();
    images.forEach((image) => {
      formData.append("images", image);
    });
    formData.append("name", name);
    formData.append("description", description);
    formData.append("originalPrice", originalPrice);
    formData.append("discountPrice", discountPrice);
    formData.append("tags", tags);
    formData.append("stock", stock);
    formData.append("category", category);
    formData.append("shopId", OneSeller?._id);

    dispatch(createProduct({ formData, config, navigate }));
  };

  return (
    <div className="bg-white w-[100%]  800px:w-[60%] m-auto min-h-[80vh] rounded-sm shadow-md p-3 my-5 ">
      <h1 className="text-[25px] font-Roboto font-[600] capitalize text-center">
        create product
      </h1>
      <hr />

      {/*******form create product**** */}
      <form onSubmit={handleSubmit} className="my-[1rem]">
        <div className="w-full leading-7">
          <label htmlFor="name" className="font-[600] capitalize">
            name <span className="text-[red]">*</span>
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full capitalize border-gray-300 border-2 rounded-md py-1 px-2 outline-none focus:border-indigo-500 transition duration-200"
            placeholder="Enter product name.."
          />
        </div>
        <br />

        <div className="w-full leading-7">
          <label htmlFor="description" className="font-[600] capitalize">
            description <span className="text-[red]">*</span>
          </label>
          <textarea
            required
            cols={30}
            rows={5}
            type="text"
            name="description"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full capitalize border-gray-300 border-2 rounded-md py-1 px-2 outline-none focus:border-indigo-500 transition duration-200"
            placeholder="Enter product description.."
          />
        </div>
        <br />

        <div className="w-full leading-7">
          <label htmlFor="category" className="font-[600] capitalize">
            category <span className="text-[red]">*</span>
          </label>
          <select
            name="category"
            id="category"
            onChange={(e) => setCategory(e.target.value)}
            value={category}
            className="w-full capitalize border-gray-300 border-2 rounded-md py-1 px-2 outline-none focus:border-indigo-500 transition duration-200"
          >
            <option
              className="bg-[#000000d0] rounded-lg text-white"
              value="choose a category"
            >
              choose a category
            </option>
            {categoriesData &&
              categoriesData.map((cat, index) => {
                return (
                  <option
                    className="bg-[#000000d0] text-white "
                    value={cat.title}
                    key={index}
                  >
                    {cat.title}
                  </option>
                );
              })}
          </select>
        </div>
        <br />

        <div className="w-full leading-7">
          <label htmlFor="tag" className="font-[600] capitalize">
            tags <span className="text-[red]">*</span>
          </label>
          <input
            type="text"
            name="tag"
            id="tag"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            className="w-full capitalize border-gray-300 border-2 rounded-md py-1 px-2 outline-none focus:border-indigo-500 transition duration-200"
            placeholder="Enter product tag.."
          />
        </div>
        <br />

        <div className="w-full leading-7">
          <label htmlFor="originalprice" className="font-[600] capitalize">
            original price<span className="text-[red]">*</span>
          </label>
          <input
            type="number"
            name="originalprice"
            id="originalprice"
            value={originalPrice}
            onChange={(e) => setOriginalPrice(e.target.value)}
            className="w-full capitalize border-gray-300 border-2 rounded-md py-1 px-2 outline-none focus:border-indigo-500 transition duration-200"
            placeholder="Enter product original price.."
          />
        </div>
        <br />

        <div className="w-full leading-7">
          <label htmlFor="discountPrice" className="font-[600] capitalize">
            price (with discount)<span className="text-[red]">*</span>
          </label>
          <input
            type="number"
            name="discountPrice"
            id="discountPrice"
            value={discountPrice}
            onChange={(e) => setDiscountPrice(e.target.value)}
            className="w-full capitalize border-gray-300 border-2 rounded-md py-1 px-2 outline-none focus:border-indigo-500 transition duration-200"
            placeholder="Enter product original price.."
          />
        </div>
        <br />

        <div className="w-full leading-7">
          <label htmlFor="stock" className="font-[600] capitalize">
            stock<span className="text-[red]">*</span>
          </label>
          <input
            type="number"
            name="stock"
            id="stock"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            className="w-full capitalize border-gray-300 border-2 rounded-md py-1 px-2 outline-none focus:border-indigo-500 transition duration-200"
            placeholder="Enter product original price.."
          />
        </div>
        <br />

        <div className="w-full">
          <label htmlFor="images" className="capitalize font-[600]">
            upload images <span className="text-[red]">*</span>
          </label>
          <input
            accept=".png,.jpg , .jpeg"
            type="file"
            name="images"
            id="images"
            multiple
            className="hidden"
            onChange={handleImagesChange}
          />
        </div>
        <label htmlFor="images">
          <CiSquarePlus size={50} color="gray" className="cursor-pointer" />
        </label>
        <div className=" flex items-center justify-start gap-2">
          {images &&
            images.map((image, index) => {
              return (
                <img
                  src={URL.createObjectURL(image)}
                  key={index}
                  alt=""
                  className="h-[120px] w-[120px] object-cover rounded-md"
                />
              );
            })}
        </div>
        <br />

        <button
          type="submit"
          className={`${styles.button} text-white w-[50%] m-auto text-[22px] capitalize !rounded-md`}
        >
          create product
        </button>
      </form>
    </div>
  );
};

export default CreateProduct;
