import SideNavBar from "@/component/common/SideNavBar";
import TopNavBar from "@/component/common/TopNavBar";
import OccupancySection from "@/component/dashboard-ui/OccupancySection";
import StatsSection from "@/component/dashboard-ui/StatsSection";
import TopCards from "@/component/dashboard-ui/TopCards";
import React from "react";

const DashboardPage = () => {
  return (
    <div className="min-h-screen flex bg-gray-50">
      <nav className="bg-white w-80 flex flex-col gap-10 border-r border-slate-100 shadow-lg">
        <SideNavBar />
      </nav>
      <div className="right w-full flex gap-2 flex-col">
        <TopNavBar />
        <TopCards />
        <StatsSection />
        <OccupancySection />
      </div>
    </div>
  );
};

export default DashboardPage;
