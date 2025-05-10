import SideNavBar from "@/component/common/SideNavBar";
import TopNavBar from "@/component/common/TopNavBar";
import React from "react";

const ManageShortletPage = () => {
  return (
    <div className="min-h-screen flex">
      <nav className="bg-white w-80 flex flex-col gap-10 border-r border-slate-100 shadow-lg">
        <SideNavBar />
      </nav>
      <div className="right w-full flex gap-2 flex-col">
        <TopNavBar />
        <h1>Coming Soon</h1>
      </div>
    </div>
  );
};

export default ManageShortletPage;
