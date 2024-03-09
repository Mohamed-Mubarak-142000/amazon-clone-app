import React from "react";
import ShopHeader from "./ShopHeader";
import ShopFooter from "./ShopFooter";

const ShopLayout = ({ children }) => {
  return (
    <>
      <ShopHeader />
      <div className="min-h-screen">{children}</div>
      <ShopFooter />
    </>
  );
};

export default ShopLayout;
