import React from "react";
import ShopLayout from "../../components/shopLayout/ShopLayout";
import SideBarDashboard from "../../components/shopLayout/SideBarDashboard";

const Dashboard = () => {
  return (
    <ShopLayout>
      <div className="flex justify-between gap-1">
        <div className="sticky top-0 left-0 w-[60px] 800px:w-[300px] shadow-md h-screen bg-white">
          <SideBarDashboard active={1} />
        </div>

        <div className="sticky top-0 left-0 w-[85%] h-screen">
          <h1>content</h1>
        </div>
      </div>
    </ShopLayout>
  );
};

export default Dashboard;
