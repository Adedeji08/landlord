import ImageCard from "@/component/common/ImageCard";
import SideNavBar from "@/component/common/SideNavBar";
import TopNavBar from "@/component/common/TopNavBar";
import SettingsForm from "@/component/SettingsForm";
import React from "react";

const SettingsPage = () => {
  return (
    <div className="min-h-screen flex">
      <nav className="bg-white w-80 flex flex-col gap-10 border-r border-slate-100 shadow-lg">
        <SideNavBar />
      </nav>
      <div className="right w-full flex gap-2 flex-col">
        <TopNavBar />
        <div className="bg-white shadow-2xl rounded-lg p-4 mx-5 my-10">
          <ImageCard />
          <SettingsForm />
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
