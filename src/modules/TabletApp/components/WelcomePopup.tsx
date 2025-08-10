import React from 'react';

import Image from 'next/image';

interface WelcomePopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const WelcomePopup: React.FC<WelcomePopupProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-lg shadow-xl w-full max-w-[480px] mx-4 overflow-hidden h-[700px]"
        onClick={e => e.stopPropagation()}
      >
        <div className="relative aspect-[3/5]">
          <Image
            src="/assets/TabletApp/tablet-app-popup-bg.png"
            alt="Background"
            fill
            className="object-cover"
            priority
          />

          <div className="absolute inset-x-0 top-[35%] z-10 px-6 flex flex-col items-center text-center">
            <div className="flex justify-start mb-6">
              <div className="flex items-center gap-2 bg-[#384169] rounded-full pr-4 pl-2 py-1">
                <div className="bg-white rounded-full p-1.5">
                  <Image
                    src="/assets/TabletApp/favicon-original-teal.svg"
                    alt="RenewMe Icon"
                    width={12}
                    height={12}
                    className="w-5 h-5"
                  />
                </div>
                <span className="text-white text-[10px]">RenewMe</span>
              </div>
            </div>
            <h2 className="text-[22px] font-semibold text-white mb-6">
              Take a Deep Breath - Your
              <br />
              Moment of Calm Awaits
            </h2>

            <p className="text-white text-[16px] mb-10 max-w-xs">
              Discover more guided meditations, soothing sounds, motivations, and mindful moments
              just for you.
            </p>

            <Image
              src="/assets/Soulscape/qr/qr-soulscape.jpeg"
              alt="QR Code"
              width={109}
              height={109}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePopup;
