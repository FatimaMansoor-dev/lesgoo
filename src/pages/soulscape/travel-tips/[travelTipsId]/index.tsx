import Button from 'modules/TravelTipsPage/components/Button';
import { TRAVEL_TIPS } from 'modules/TravelTipsPage/constant/travel-tips';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import Image from 'next/image';

import SoulscapeFooter from 'src/components/ui/soulscape-footer';

interface TravelTipsPageProps {
  travelTips: (typeof TRAVEL_TIPS)[0];
  travelTipsIndex: number;
}

const TravelTipsId: NextPage<TravelTipsPageProps> = ({ travelTips, travelTipsIndex }) => {
  return (
    <div className="relative flex w-screen flex-col items-center font-['Gilroy'] transition-all duration-150 ease-in-out">
      <div className="mb-9 w-full max-w-[388px] px-3.5">
        <div className="bg-[#00CACB] rounded-b-[20px]">
          <div className="pt-1 relative z-[1]">
            <Button currentIndex={travelTipsIndex} data={TRAVEL_TIPS} />
          </div>
          <div className="relative">
            <div className="flex flex-col items-center justify-center pb-[73px] mt-[-16px]">
              <Image
                src={travelTips.coverIcon}
                alt="icon"
                width={31}
                height={27}
                className="text-center"
              />
              <p className="my-[13px] font-['Urbanist'] text-[20px] font-bold leading-[24px] text-[#FFFFFF]">
                {travelTips.title}
              </p>
              <p className="font-['Urbanist'] text-[14px] font-medium leading-[16.8px] text-center text-[#FFFFFF] max-w-[287px] mx-auto">
                {travelTips.description1}
              </p>
              <p className="font-['Urbanist'] text-[14px] font-medium leading-[16.8px] text-center text-[#FFFFFF] max-w-[288px] mx-auto">
                {travelTips.description2}
              </p>
            </div>
          </div>
        </div>
        {travelTips && travelTips.firstDiv && (
          <div>
            <div className="mx-[12px] rounded-[20px] bg-[#FFFFFF] px-[15px] shadow-[0px_2px_10px_0px_#00000015] mt-[-36px]">
              <h2 className="font-['Urbanist'] text-[14px] font-medium leading-[16.8px] text-[#4D5D71] text-center pt-[32px] pb-[15px]">
                {travelTips.firstDiv.title}
              </h2>
              {travelTips.firstDiv.items.map((item, index) => (
                <div
                  key={index}
                  className="relative flex border-b-[1px] border-[#00000011] py-[18px] last:border-b-0 last:pb-[24px]"
                >
                  <p className="font-['Urbanist'] text-[14px] leading-[14px] text-[#909CAF] tracking-[0.2px]">
                    {item.no}
                  </p>
                  <p className="absolute left-[50%] translate-x-[-50%] whitespace-nowrap text-center font-['Urbanist'] font-medium text-[14px] leading-[18px] text-[#3A3A3B]">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {travelTips && travelTips.secondDiv && (
          <div>
            <div className="mx-[12px] rounded-[20px] bg-[#FFFFFF] px-[15px] shadow-[0px_2px_10px_0px_#00000015] mt-[6px]">
              <h2 className="font-['Urbanist'] text-[14px] font-medium leading-[16.8px] text-[#4D5D71] text-center pt-[32px] pb-[15px]">
                {travelTips.secondDiv.title}
              </h2>
              {travelTips.secondDiv.items.map((item, index) => (
                <div
                  key={index}
                  className="relative flex border-b-[1px] border-[#00000011] last:border-b-0 py-[18px] last:pb-[24px]"
                >
                  <p className="font-['Urbanist'] text-[14px] leading-[14px] text-[#909CAF] tracking-[0.2px]">
                    {item.no}
                  </p>
                  <p className="absolute left-[50%] translate-x-[-50%] whitespace-nowrap text-center font-['Urbanist'] font-medium text-[14px] leading-[18px] text-[#3A3A3B]">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
        <SoulscapeFooter title={travelTips.quote} classes={travelTips.classes} />
      </div>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = () => {
  const paths = TRAVEL_TIPS.map(tip => ({
    params: { travelTipsId: tip.slug.toLowerCase() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = context => {
  const travelTipsId = context.params?.travelTipsId as string;

  // Find the travel tip case-insensitively
  const travelTipsIndex = TRAVEL_TIPS.findIndex(
    tip => tip.slug.toLowerCase() === travelTipsId.toLowerCase()
  );

  const travelTips = TRAVEL_TIPS[travelTipsIndex];

  // If no matching travel tip is found, return 404
  if (!travelTips || travelTipsIndex === -1) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      travelTips,
      travelTipsIndex,
    },
  };
};

export default TravelTipsId;
