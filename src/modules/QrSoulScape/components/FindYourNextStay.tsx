import React, { useState } from 'react';

import Image from 'next/image';

import { imageDomainUrl } from 'shared/constants/Assets';

const FindYourNextStay: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="max-w-[375px] mb-[49.5px] w-full px-[18px] border-b border-b-[#E7E7E7] pb-[44.5px]">
        <div className="bg-[#132979] rounded-[15px] pt-[13px] px-4 pb-[50px]">
          <div className="flex justify-end mb-[8.43px]">
            <button onClick={handleOpenModal}>
              <Image
                src={`${imageDomainUrl}/KarmaTravelDemo/Icon/top-arrow-white.svg`}
                width={24}
                height={24}
                alt="destination-plane"
              />
            </button>
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

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative w-[90vw] h-[90vh] bg-white rounded-lg">
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
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
              src="https://www.booking.com"
              className="w-full h-full rounded-lg"
              title="Booking.com"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default FindYourNextStay;
