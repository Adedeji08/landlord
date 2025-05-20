/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { MapPin, PencilIcon, Trash2Icon, CircleXIcon } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import EditPropertyForm from "../forms/EditPropertyForm";
import { Property } from "../types";
import PlaceHolder from "../../public/assets/img/house-placeholder.jpg";
import useRequest from "../hook/use-req";

interface ListingCardProps {
  listings: Property;
}

const ListingCard = ({ listings }: ListingCardProps) => {
  const userToken = localStorage.getItem("token");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { address, rent, city, pictures, id, state, propertyType, user } =
    listings;
  const title = `${propertyType} - ${user?.businessName ?? "No Name"}`;
  const price = `₦${rent?.toLocaleString() ?? "0"}`;
  const location = `${address}, ${city}, ${state}`;
  const displayImage =
    pictures && pictures.length > 1 ? pictures[0] : PlaceHolder;

  const [singleListing, setSingleListing] = useState<Property | null>(null);
  const { makeRequest: getSingleListing } = useRequest(
    `/properties/${id}`,
    "GET",
    {
      Authorization: `Bearer ${userToken}`,
    }
  );

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const fetchListing = async () => {
      const [response] = await getSingleListing();
      if (response) {
        setSingleListing(response);
      }
    };
    fetchListing();
  }, []);

  console.log("fjbnjfjbs", singleListing);
  return (
    <div className="bg-white rounded-md flex flex-col text-gray-900 shadow-lg">
      <div className="flex overflow-x-auto gap-2">
        <Image
          src={displayImage}
          alt={`pictures`}
          width={500}
          height={500}
          className="rounded-md object-cover h-48 w-full"
        />
      </div>

      <div className="p-3">
        <div className="flex items-center justify-between mb-2">
          <div>
            <p className="text-[15px] font-medium">{title}</p>
            <p className="text-[14px] font-light text-[#FF5B19]">{price}</p>
            <div className="flex items-center mt-5 gap-1">
              <MapPin className="w-4 h-4" />
              <p className="text-xs text-[#7F7F7F]">{location}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <PencilIcon
              className="w-4 h-4 cursor-pointer"
              onClick={handleOpenModal}
            />
            <Trash2Icon className="w-4 h-4 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-md shadow-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold mb-4 text-center">
                Edit Listed Property
              </h2>
              <button
                className="px-4 py-2 rounded-4xl cursor-pointer"
                onClick={handleCloseModal}
              >
                <CircleXIcon
                  width="24px"
                  height="24px"
                  className="text-blue-950"
                />
              </button>
            </div>
            {singleListing && (
              <EditPropertyForm singleListing={singleListing} />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

interface ListingsCardsProps {
  listings: Property[];
}
const ListingsCards = ({ listings }: ListingsCardsProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-6 bg-[#F2F5F8] shadow-sm rounded-md">
      {listings.map((listing) => (
        <ListingCard key={listing.id} listings={listing} />
      ))}
    </div>
  );
};

export default ListingsCards;
