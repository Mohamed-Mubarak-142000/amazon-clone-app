import React from "react";
import { css } from "@emotion/react";
import { MoonLoader, PuffLoader } from "react-spinners";

import imageLoad from "../../assets/images/icon.jpg";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
const Spinner = () => {
  return (
    <div className="fixed top-[0px] left-0 w-full z-50 bg-[#000000c2] flex justify-center flex-col gap-2 capitalize items-center h-screen">
      <MoonLoader color="#3bc117" css={override} />
      {/* <img src={imageLoad} className="w-[100px] h-[50px] rounded-sm" alt="" /> */}
    </div>
  );
};

export default Spinner;
