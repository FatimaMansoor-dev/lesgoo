import React, { useState } from 'react';

import Image from 'next/image';

import { imageDomainUrl } from 'shared/constants/Assets';

const FindYourNextStay: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="max-w-[375px] mb-[49.5px] w-full px-[18px] border-b border-b-[#E7E7E7] pb-[44.5px]">
        <div 
          className="bg-[#132979] rounded-[15px] pt-[13px] px-4 pb-[50px] cursor-pointer hover:bg-[#1a357e] transition-colors"
          onClick={handleOpenModal}
        >
          <div className="flex justify-end mb-[8.43px]">
            <Image
              src={`${imageDomainUrl}/KarmaTravelDemo/Icon/top-arrow-white.svg`}
              width={24}
              height={24}
              alt="destination-plane"
            />
          </div>
          <div className="flex justify-center">
            <Image
              src={`${imageDomainUrl}/KarmaTravelDemo/Icon/stay-bed.svg`}
              width={55}
              height={55}
              alt="destination-plane"
            />
          </div>
          <h2 className="text-white text-[22px] font-medium leading-[26.4px] mt-[17.48px] mb-[9px] text-center">
            Find your next stay
          </h2>
          <p className="text-[#F7F7F7] text-[14px] font-medium leading-[16.8px] text-center">
            Search deals on hotels, flights, and more
          </p>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg w-[90%] h-[90%] relative">
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 bg-gray-200 hover:bg-gray-300 rounded-full p-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <iframe
              src="https://luxurytraveldr.com/tour-category/hotels"
              className="w-full h-full rounded-lg"
              title="Luxury Travel Hotels"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default FindYourNextStay;
