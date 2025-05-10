import SideNavBar from "@/component/common/SideNavBar";
import TopNavBar from "@/component/common/TopNavBar";
import Listings from "@/component/Listings";
import React from "react";

const ListingPage = () => {
  return (
    <div className="min-h-screen flex">
      <nav className="bg-white w-80 flex flex-col gap-10 border-r border-slate-100 shadow-lg">
        <SideNavBar />
      </nav>
      <div className="right w-full flex gap-2 flex-col">
        <TopNavBar />
        <Listings />
      </div>
    </div>
  );
};

export default ListingPage;
