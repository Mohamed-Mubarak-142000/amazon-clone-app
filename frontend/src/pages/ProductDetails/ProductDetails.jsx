import Header from "../../components/header/Header";
import Footer from "../../components/Footer/Footer";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductDetailsContent from "../../components/ProductDetailsContent/ProductDetailsContent";
import RelatedProducts from "../../components/RelatedProducts/RelatedProducts";
import { useSelector } from "react-redux";
const ProductDetails = () => {
  const { name } = useParams();
  const { products } = useSelector((state) => state.product);
  const [dataProduct, setDataProduct] = useState(null);
  const productName = name.replace(/-/g, " ");

  useEffect(() => {
    const data = products.find((pro) => pro.name === productName);
    setDataProduct(data);
  }, []);
  return (
    <>
      <Header />
      <ProductDetailsContent dataProduct={dataProduct} />
      <RelatedProducts dataProduct={dataProduct} />
      <Footer />
    </>
  );
};

export default ProductDetails;
