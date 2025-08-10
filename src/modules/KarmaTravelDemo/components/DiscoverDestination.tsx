import React, { useState } from 'react';

import Image from 'next/image';

import { imageDomainUrl } from 'shared/constants/Assets';

const DiscoverDestination: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="max-w-[375px] mb-[30px] w-full px-[18px]">
        <div className="mb-[33px]">
          <h1 className="font-semibold text-[22px] mb-[9px] text-[#303030] leading-[26.4px] font-['Urbanist']">
            Soulscape
          </h1>
          <p className="text-sm text-[#707070] font-medium font-['Urbanist'] leading-[16.8px]">
            Balance for the mindful traveler.
          </p>
        </div>
        <div className="bg-[#132979] rounded-[15px] pt-[36px] pb-[40px]">
          <div className="flex justify-center">
            <Image
              src={`${imageDomainUrl}/KarmaTravelDemo/Icon/destination-plane.svg`}
              width={55}
              height={55}
              alt="destination-plane"
            />
          </div>
          <h2 className="text-white text-[22px] font-semibold leading-[26.4px] mt-3 mb-2 text-center">
            Discover Destinations
          </h2>
          <p className="text-[#F7F7F7] text-[14px] font-medium leading-[16.8px] text-center">
            Travel the world and explore{' '}
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-[#fff] text-[#000] max-w-[212px] justify-center font-semibold mx-auto w-full rounded-[12px] h-[41px] flex items-center gap-[7px] text-sm mt-3"
          >
            Explore{' '}
            <Image
              src={`${imageDomainUrl}/KarmaTravelDemo/Icon/top-arrow-black.svg`}
              width={13}
              height={13}
              alt="top-arrow"
            />
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-4 w-[90%] h-[90%] relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 bg-gray-200 rounded-full p-2 hover:bg-gray-300"
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
              src="https://www.travelersatlas.org"
              className="w-full h-full rounded-lg"
              title="Travelers Atlas"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default DiscoverDestination;
