import Image from 'next/image';

import { imageDomainUrl } from 'shared/constants/Assets';

export default function SoulscapeBanner() {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-[30px]">
      <div className="relative p-10 rounded-3xl w-full border-2 border-zinc-100 flex flex-col overflow-hidden min-h-[174px]">
        <Image
          fill
          className="object-cover -z-10 object-right-top"
          src={`${imageDomainUrl}/TravelTips/soulscape-banner.svg`}
          alt="Welcome Banner"
          // quality={100}
        />
        <div>
          {/* <Image
          className="mb-4 w-48 md:w-60"
          src={`${imageDomainUrl}/TabletApp/soulscape-header.svg`}
          alt="RenewMe Welcome Header"
          width={240}
          height={240}
        /> */}
          <h2 className="text-[45px] font-semibold leading-[55.13px] text-white font-['Gilroy'] text-center">
            Soulscape
          </h2>
          <p className="max-w-[454px] font-medium text-white text-base font-['Urbanist'] text-center mx-auto">
            A soothing experience for the mindful traveler to stay relaxed and balanced on their
            journeys.
          </p>
        </div>
      </div>
      <div className="w-full md:w-52 p-3 border-2 border-zinc-100 rounded-3xl bg-[#00C0C5] flex flex-col justify-between">
        <div className="mb-2 flex items-center justify-center w-full h-full">
          <div className="p-2 bg-white rounded-2xl w-full h-full">
            <Image
              src={`${imageDomainUrl}/TabletApp/travel-soulscape.png`}
              alt="QR Code"
              width={300}
              height={300}
            />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex gap-[3px] items-center">
            <h4 className="text-white text-[10px] text-center flex gap-1 font-bold font-['Gilroy'] leading-[12.38px]">
              Download RenewMe
            </h4>
            <Image
              src={`${imageDomainUrl}/TabletApp/Icons/download.svg`}
              alt="download"
              width={12}
              height={12}
            />
          </div>
          <p className="text-white text-center text-[10px] leading-[12.13px] font-medium">
            Listen on-the-go!
          </p>
        </div>
      </div>
    </div>
  );
}
