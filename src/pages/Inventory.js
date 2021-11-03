import React from "react";
import DashboardLink from "../components/DashboardLink";
import TopInfoBar from "../components/TopInfoBar";
import SideNav from "../components/SideNav";

const Inventory = () => {
  return (
    <main className="dashboard">
      <div className="inventory-page">
        <TopInfoBar />
        <SideNav />
        <div className="inventory-page-review">
          <h1>review inventory</h1>
        </div>
      </div>
    </main>
  );
};

export default Inventory;
