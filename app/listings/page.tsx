/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import SideNavBar from "@/component/common/SideNavBar";
import TopNavBar from "@/component/common/TopNavBar";
import useRequest from "@/component/hook/use-req";
import Listings from "@/component/Listings";
import { ProfileData, Property } from "@/component/types";
import React, { useEffect, useState } from "react";

const ListingPage = () => {
  const userToken = localStorage.getItem("token");
  const [listings, setListings] = useState<Property[] | null>(null);
    const [rentedProperties, setRentedProperties] = useState<Property[] | null>(null);
  const { makeRequest: getListing } = useRequest("/properties", "GET", {
    Authorization: `Bearer ${userToken}`,
  });
    const { makeRequest: getProperties } = useRequest("/rent/rented", "GET", {
    Authorization: `Bearer ${userToken}`,
  });
    const [profile, setProfile] = useState<ProfileData | null>(null);
  
    const { makeRequest: getProfile } = useRequest(`/auth/me`, "GET", {
      Authorization: `Bearer ${userToken}`,
    });
  
    useEffect(() => {
      const fetchProfile = async () => {
        const [response] = await getProfile();
        if (response) {
          setProfile(response);
        }
      };
      fetchProfile();
    }, []);


  useEffect(() => {
    const fetchListing = async () => {
      const [response] = await getListing();
      if (response) {
        setListings(response);
      }
    };
    fetchListing();
  }, []);

    useEffect(() => {
    const fetchProperties = async () => {
      const [response] = await getProperties();
      if (response) {
        setRentedProperties(response);
      }
    };
    fetchProperties();
  }, []);

  console.log('rentedProperties', rentedProperties)



  return (
    <div className="min-h-screen flex">
      <nav className="bg-white w-80 flex flex-col gap-10 border-r border-slate-100 shadow-lg">
        <SideNavBar />
      </nav>
      <div className="right w-full flex gap-2 flex-col">
        <TopNavBar profile={profile} />
        {listings && <Listings listings={listings} />}
      </div>
    </div>
  );
};

export default ListingPage;
