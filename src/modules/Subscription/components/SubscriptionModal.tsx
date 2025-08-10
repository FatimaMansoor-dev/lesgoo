'use client';

// import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { Dialog, DialogContent, DialogOverlay } from '@radix-ui/react-dialog';
import React, { useState } from 'react';

import Image from 'next/image';

import { X } from 'lucide-react';

import Subscribed from './Subscribed';
import Wellness from './Wellness';

// import Wellness from "./Wellness";
// import Wellness from "./wellness";

interface SubscriptionModalProps {
  isSubscriptionModalOpen: boolean;
  setIsSubscriptionModalOpen: (value: boolean) => void;
}

const SubscriptionModal: React.FC<SubscriptionModalProps> = ({
  isSubscriptionModalOpen,
  setIsSubscriptionModalOpen,
}) => {
  const [isSubscribedModalOpen, setIsSubscribedModalOpen] = useState(false);

  return (
    <>
      <Dialog open={isSubscriptionModalOpen} onOpenChange={setIsSubscriptionModalOpen}>
        <DialogOverlay className="fixed inset-0 bg-[rgba(0,0,0,0.5)] transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in" />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 !px-3">
            <DialogContent className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:max-w-[90%] md:max-w-[75%] lg:max-w-[70%] xl:max-w-[1563px] w-full max-w-[100%] mx-auto">
              <div className="bg-[#F8F8F8] px-4 pt-5 pb-4 sm:p-6 sm:pb-4 relative h-[94vh] overflow-auto">
                <div className="flex flex-col xl:flex-row items-start justify-between gap-[25px] lg:gap-[20px] 2xl:gap-[32.5px] py-[66px] lg:py-[0px] px-[23px] 2xl:px-[0px] 2xl:pl-[92px] 2xl:pr-[98px] h-full 2xl:h-auto">
                  <button
                    onClick={() => setIsSubscriptionModalOpen(false)}
                    className="absolute top-[17px] lg:top-[24px] right-[17px] lg:right-[29px] bg-[#D9D9D9] rounded-full size-[24px] lg:size-[30px] xl:size-[50px] flex justify-center items-center cursor-pointer"
                  >
                    <X className="text-black size-[14px] lg:size-[18px] xl:size-auto" />
                  </button>
                  <Wellness />
                  <div className="order-1 xl:order-2 flex items-center xl:w-1/2 w-full lg:pt-[106px]">
                    <div className=" flex flex-col gap-[30px] sm:gap-[41px] justify-center items-center">
                      <div className="bg-[#ffffff] rounded-[35px] w-full max-w-[646px] sm:px-[55px] px-[26px] pt-[66px] pb-[31px]">
                        <h2 className="text-[24px] font-semibold leading-[29px] mb-[39px]">
                          1. Confirm Your Plan
                        </h2>
                        <p className="text-[24px] leading-[24px]">
                          Don’t worry, you can cancel at any time.
                        </p>
                        <div className="grid xl:grid-cols-2 grid-cols-1 gap-[20px] pt-[40px] mb-[32px]">
                          <div className="relative inline-block">
                            <div className="absolute top-0 right-[-44px] transform -translate-x-1/2 -translate-y-1/2 bg-[#A850B2] text-white text-[15px] font-semibold rounded-[5px] px-3 py-[5px]">
                              3-Day Free Trial
                            </div>

                            <div className="border-2 border-black rounded-[14px] px-[17px] py-[13px] flex items-center justify-between">
                              <div className="flex flex-col">
                                <span className="text-[20px] font-semibold text-black leading-[24px]">
                                  Yearly
                                </span>
                                <span className="text-[15px] leading-[18px] font-semibold text-black mt-[11px]">
                                  $69.99/yr
                                </span>
                              </div>

                              <div>
                                <span className="text-[18px] font-bold text-black leading-[22px]">
                                  $5.83/mo
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="border-2 border-[#D7D7D7] rounded-[14px] px-[17px] py-[13px] flex items-center justify-between">
                            <div className="flex !justify-between items-center gap-11">
                              <h2 className="text-[20px] font-semibold text-black leading-[24px]">
                                Yearly
                              </h2>
                              <h2 className="text-[18px] leading-[22px] font-bold text-black">
                                $69.99/yr
                              </h2>
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-between items-center border-t border-t-[#000000] pt-[26px]">
                          <p className="text-[20px] font-semibold leading-[24px]">
                            Total due today
                          </p>
                          <p className="text-[20px] font-semibold leading-[24px]">$0.00</p>
                        </div>

                        <p className="text-[14px] leading-[23px] font-semibold text-[#989898] w-full max-w-[523px] mt-[21px]">
                          If your total is $0.00, credit, discount, or coupon code was applied
                          automatically. Some taxes may apply.
                        </p>
                      </div>
                      <div className="bg-[#ffffff] rounded-[35px] w-full max-w-[646px] sm:px-[55px] px-[26px] pt-[66px] pb-[66px]">
                        <h2 className="text-[24px] font-semibold leading-[29px] mb-[33px]">
                          2. Choose your payment method
                        </h2>
                        <button className="bg-black w-full rounded-full flex justify-center items-center gap-[25px]">
                          <Image
                            src={'/assets/Renewme-home/gpay.png'}
                            alt="gpay"
                            width={118}
                            height={36}
                          />
                          <p className="text-white text-[24px] font-semibold">.... 5889</p>
                        </button>
                        <button className="bg-[#F4C657] mt-[17px] w-full rounded-full flex justify-center items-center gap-[25px] py-3">
                          <Image
                            src={'/assets/Renewme-home/paypal.png'}
                            alt="paypal"
                            width={110}
                            height={36}
                          />
                        </button>
                        <div className="max-w-md mx-auto space-y-4">
                          <p className="text-[16px] leading-[19px] text-[#878787] text-center mt-6">
                            Or
                          </p>
                          <label className="block">
                            <input
                              type="text"
                              placeholder="Name on Card"
                              className="mt-1 block w-full border border-[#BFBFBF] rounded-lg p-4 placeholder-[#636363] focus:outline-none"
                            />
                          </label>
                          <div className="relative">
                            <input
                              type="text"
                              placeholder="Card number"
                              className="block w-full border border-[#BFBFBF] rounded-lg p-4 placeholder-[#636363] focus:outline-none"
                            />
                            <div className="absolute inset-y-0 right-4 flex items-center space-x-1">
                              <Image
                                src={'/assets/Renewme-home/card.png'}
                                alt="card"
                                width={84}
                                height={26}
                              />
                            </div>
                          </div>

                          <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
                            <input
                              type="text"
                              placeholder="Expiration date"
                              className="block w-full border border-[#BFBFBF] rounded-lg p-4 placeholder-[#636363] focus:outline-none"
                            />
                            <input
                              type="text"
                              placeholder="Security code"
                              className="block w-full border border-[#BFBFBF] rounded-lg p-4 placeholder-[#636363] focus:outline-none"
                            />
                          </div>

                          <div className="grid grid-cols-2 gap-4 items-end">
                            <label className="block">
                              <div className="mt-1 relative">
                                <select className="block w-full appearance-none border border-[#BFBFBF] rounded-lg p-4 placeholder-[#636363] focus:outline-none">
                                  <option>United States</option>
                                </select>
                                <svg
                                  className="w-4 h-4 absolute top-1/2 right-4 transform -translate-y-1/2 pointer-events-none text-gray-400"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 9l-7 7-7-7"
                                  />
                                </svg>
                              </div>
                            </label>
                            <input
                              type="text"
                              placeholder="ZIP code"
                              className="block w-full border border-[#BFBFBF] rounded-lg p-4 placeholder-[#636363] focus:outline-none"
                            />
                          </div>

                          <p className="text-[15px] font-medium text-[#9F9F9F] leading-[28px] w-full max-w-[526px]">
                            By providing your card information, you allow Renewme to charge your
                            card for future payments in accordance with their terms.
                          </p>

                          <button
                            onClick={() => {
                              setIsSubscribedModalOpen(true); // Only set the modal to open
                            }}
                            className="w-full bg-gray-300 text-white py-[20px] rounded-full text-[20px] font-bold"
                          >
                            Start Your Trial
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </DialogContent>
          </div>
        </div>
      </Dialog>

      <Subscribed
        isSubscribedModalOpen={isSubscribedModalOpen}
        setIsSubscribedModalOpen={setIsSubscribedModalOpen}
      />
    </>
  );
};

export default SubscriptionModal;
