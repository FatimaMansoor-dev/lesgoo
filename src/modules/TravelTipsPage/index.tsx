import Image from 'next/image';
import { useRouter } from 'next/router';

import SoulscapeFooter from 'src/components/ui/soulscape-footer';
import SoulscapeWelcomeBanner from 'src/components/ui/soulscape-welcome-banner';

import { MoveRight } from 'lucide-react';

import { TRAVEL_TIPS } from './constant/travel-tips';

const TravelTipsPage = () => {
  const router = useRouter();

  return (
    <div className="relative flex w-screen flex-col items-center py-4 font-['Gilroy'] transition-all duration-150 ease-in-out">
      <div className="mb-9 w-full max-w-[360px] px-3.5">
        <SoulscapeWelcomeBanner header="Travel Tips" />
        <div className="mx-[17px] mb-[38px] flex cursor-pointer flex-col gap-[29px]">
          {TRAVEL_TIPS.map((item, index) => (
            <div
              key={index}
              onClick={() => router.push(`/soulscape/travel-tips/${item.slug}`)}
              className="w-[100%] rounded-[14px] border-[2px] border-[#E8E8E8] bg-[#FFFFFF] shadow-[0px_5.53px_8.29px_0px_#0000000A]"
            >
              <div className="flex items-center gap-[20px] p-[13px]">
                <div className="flex h-[41.44px] w-[100%] max-w-[41.44px] items-center justify-center rounded-full bg-[#BFF2F233] text-center">
                  <Image src={item.icon} alt="icon" height={20.72} width={23.48} />
                </div>
                <div className="max-w-[207px]">
                  <div className="flex items-center justify-between">
                    <h2 className="font-['Urbanist'] text-[12.43px] leading-[14px] text-[#3A3A3B]">
                      {item.title}
                    </h2>
                    <button>
                      <MoveRight className="h-[15px] w-[15x] font-['Urbanist'] text-[10px] text-[#49B1B1]" />
                    </button>
                  </div>
                  <p className="mt-[6.91px] font-['Urbanist] text-[9.67px] leading-[11px] text-[#898787]">
                    {item.description1}
                    <br />
                    {item.description2}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <SoulscapeFooter
          title="Everywhere you go, be balanced."
          classes="font-semibold max-w-[156px]"
        />
      </div>
    </div>
  );
};

export default TravelTipsPage;
