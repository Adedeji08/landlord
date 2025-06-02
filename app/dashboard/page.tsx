/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import SideNavBar from "@/component/common/SideNavBar";
import TopNavBar from "@/component/common/TopNavBar";
// import OccupancySection from "@/component/dashboard-ui/OccupancySection";
import StatsSection from "@/component/dashboard-ui/StatsSection";
import TopCards from "@/component/dashboard-ui/TopCards";
import useRequest from "@/component/hook/use-req";
import { ChartData, MetricData, ProfileData } from "@/component/types";
import React, { useEffect, useState } from "react";

const DashboardPage = () => {
  const userToken = localStorage.getItem("token");
  const [chart, setChart] = useState<ChartData | null>(null);
  const [metrics, setMetrics] = useState<MetricData | null>(null);
  const [profile, setProfile] = useState<ProfileData | null>(null);
  const { makeRequest: getDashboard } = useRequest("/user/dashboard", "GET", {
    Authorization: `Bearer ${userToken}`,
  });

  const { makeRequest: getProfile } = useRequest(`/auth/me`, "GET", {
    Authorization: `Bearer ${userToken}`,
  });

  useEffect(() => {
    const fetchDashboard = async () => {
      const [response] = await getDashboard();
      if (response) {
        setChart(response.data?.charts);
        setMetrics(response.data?.metrics);
      }
    };
    fetchDashboard();
  }, []);

  useEffect(() => {
    const fetchProfile = async () => {
      const [response] = await getProfile();
      if (response) {
        setProfile(response);
      }
    };
    fetchProfile();
  }, []);

  return (
    <div className="min-h-screen flex bg-gray-50">
      <nav className="bg-white w-80 flex flex-col gap-10 border-r border-slate-100 shadow-lg">
        <SideNavBar />
      </nav>
      <div className="right w-full flex gap-2 flex-col">
        <TopNavBar profile={profile} />
        {metrics && <TopCards metrics={metrics} />}

        {chart && <StatsSection chart={chart} />}

        {/* <OccupancySection /> */}
      </div>
    </div>
  );
};

export default DashboardPage;
