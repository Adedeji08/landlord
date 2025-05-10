"use client";
import { MapPin, PencilIcon, Trash2Icon, CircleXIcon } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import EditPropertyForm from "../forms/EditPropertyForm";

const listings = Array(8).fill({
  title: "Real Estate",
  price: "₦19,000,000",
  location: "Lokongoma, Abuja",
  image: "/assets/img/jodex-image-1.jpg",
});

const ListingCard = ({ title, price, location, image }: typeof listings[number]) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-white rounded-md flex flex-col text-gray-900 shadow-lg">
      <div className="p-2">
        <Image src={image} alt={title} width={500} height={500} />
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
            <PencilIcon className="w-3 h-3 cursor-pointer" onClick={handleOpenModal} />
            <Trash2Icon className="w-3 h-3 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-md shadow-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className='flex justify-between items-center mb-4'>
              <h2 className="text-lg font-bold mb-4 text-center">Edit Listed Property</h2>
              <button
                className=" px-4 py-2 rounded-4xl cursor-pointer"
                onClick={handleCloseModal}
              >
              <CircleXIcon width="24px" height="24px" className='text-blue-950' />
              </button>
              
            </div>
            <EditPropertyForm />
          
          </div>
        </div>
      )}
    </div>
  );
};

const ListingsCards = () => {
  return (
    <div className="grid grid-cols-4 md:grid-cols-2 lg:grid-cols-4 gap-4 p-6 bg-[#F2F5F8] shadow-sm rounded-md">
      {listings.map((listing, index) => (
        <ListingCard key={index} {...listing} />
      ))}
    </div>
  );
};

export default ListingsCards;
