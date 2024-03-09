import React, { useState } from "react";
import { Footer, Header } from "../../routes/Routers";
import styles from "../../styles/styles";
import SideBar from "../../components/SideBar/SideBar";
import SettingContent from "../../components/SettingContent/SettingContent";

const Setting = () => {
  const [active, setActive] = useState(1);
  return (
    <>
      <Header />
      <div className={`${styles.section} py-[3rem] flex gap-5`}>
        <div className="w-[50px] h-[600px] 800px:w-[300px] mt-[5rem] 800px:mt-0 ">
          <SideBar setActive={setActive} active={active} />
        </div>

        <SettingContent active={active} setActive={setActive} />
      </div>
      <Footer />
    </>
  );
};

export default Setting;
