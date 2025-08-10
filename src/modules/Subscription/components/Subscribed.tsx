import { Dialog, DialogContent, DialogOverlay } from '@radix-ui/react-dialog';
import React from 'react';

import Image from 'next/image';

import { X } from 'lucide-react';

interface SubscribedProps {
  isSubscribedModalOpen: boolean;
  setIsSubscribedModalOpen: (value: boolean) => void;
}

const Subscribed: React.FC<SubscribedProps> = ({
  isSubscribedModalOpen,
  setIsSubscribedModalOpen,
}) => {
  return (
    <>
      {isSubscribedModalOpen && (
        <Dialog open={isSubscribedModalOpen} onOpenChange={setIsSubscribedModalOpen}>
          <DialogOverlay className="fixed inset-0 bg-[rgba(0,0,0,0.5)] transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in" />
          <DialogContent className="relative transform overflow-hidden rounded-[20px] bg-[#F8F8F8] transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-[1563px] data-closed:sm:translate-y-0 data-closed:sm:scale-95">
            <div className="bg-[#F8F8F8] px-4 pt-5 pb-4 sm:p-6 sm:pb-4 relative">
              <div className="flex flex-col lg:flex-row items-start justify-between gap-[25px] lg:gap-[20px] 2xl:gap-[32.5px] py-[66px] lg:py-[0px] px-[23px] 2xl:px-[0px] 2xl:pl-[92px] 2xl:pr-[98px] h-full 2xl:h-auto">
                <button
                  onClick={() => setIsSubscribedModalOpen(false)}
                  className="absolute top-[17px] lg:top-[24px] right-[17px] lg:right-[29px] bg-[#D9D9D9] rounded-full size-[24px] lg:size-[30px] xl:size-[50px] flex justify-center items-center cursor-pointer"
                >
                  <X className="text-black size-[14px] lg:size-[18px] xl:size-auto" />
                </button>
                <div className="w-full pt-[57px] px-4 sm:px-6 lg:px-8">
                  <div className=" mx-auto text-center">
                    <h1 className="text-2xl sm:text-3xl md:text-[32px] font-semibold text-[#000000] leading-[38px] mb-[18px]">
                      Welcome to RenewMe Premium!
                    </h1>
                    <p className="text-base sm:text-lg md:text-[24px] text-center text-[#484848] w-full max-w-[624px] mx-auto">
                      You’re in. Now enjoy RenewMe for the full range of Renewme features and
                      benefits.
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-16 px-4 md:px-10 xl:px-24">
                {/* Left Card */}
                <div className="bg-white pt-10 px-6 md:px-12 rounded-2xl flex flex-col items-center text-center">
                  <h2 className="text-2xl md:text-3xl font-semibold leading-[38px]  mb-8 w-full max-w-[437px]">
                    RenewMe iOS coming soon! Scan the QR code to download RenewMe health hub to-go
                  </h2>
                  <Image
                    src={'/assets/Renewme-home/sancer.png'}
                    alt="QR Code"
                    width={257}
                    height={257}
                    className="pt-8 mx-auto"
                  />
                  <div className="inline-flex items-center bg-black text-white px-6 py-3 rounded-lg mt-8 mb-10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="white"
                      viewBox="0 0 24 24"
                      className="mr-3"
                    >
                      <path d="M17.564 13.043c-.02-2.003 1.637-2.96 1.714-3.007-0.936-1.363-2.391-1.548-2.902-1.564-1.235-.125-2.41.727-3.036.727-.627 0-1.593-.71-2.623-.692-1.348.02-2.597.782-3.29 1.985-1.407 2.43-.359 6.017 1.012 7.99.667.963 1.46 2.04 2.5 2.002 1.01-.04 1.39-.644 2.607-.644 1.219 0 1.56.644 2.625.625 1.08-.02 1.76-.982 2.42-1.95.764-1.112 1.086-2.188 1.102-2.245-.023-.01-2.12-.82-2.14-3.228zm-2.557-6.102c.557-.67.937-1.61.834-2.541-.81.033-1.785.536-2.36 1.207-.519.6-.97 1.563-.847 2.48.895.07 1.816-.45 2.373-1.146z" />
                    </svg>
                    <div className="flex flex-col text-left leading-tight">
                      <span className="text-xs font-semibold mb-1 leading-none">
                        Coming soon to the
                      </span>
                      <span className="text-lg font-semibold">App Store</span>
                    </div>
                  </div>
                </div>

                {/* Right Card */}
                <div className="bg-white pt-10 px-6 md:px-12 rounded-2xl flex justify-center items-center">
                  <Image
                    src="/assets/Renewme-home/h-phone.png"
                    alt="Phone Image"
                    width={326}
                    height={665}
                  />
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

export default Subscribed;
