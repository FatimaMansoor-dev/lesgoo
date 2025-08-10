import { CHECKLIST_CONTENTS } from 'modules/TravelChecklist/constants/checklist';

import Image from 'next/image';

import { imageDomainUrl } from 'shared/constants/Assets';

import SoulscapeFooter from 'src/components/ui/soulscape-footer';

const TravelChecklist = () => {
  return (
    <div className="relative flex w-screen flex-col items-center font-['Gilroy'] transition-all duration-150 ease-in-out">
      {/* <div className="w-full max-w-[375px]  mt-6   bg-white">
        <div className="flex items-center justify-between relative mb-0 border-b border-[#E5E9F2] pb-4 shadow-sm">
          <button
            onClick={() => router.back()}
            className="absolute left-0 p-2 rounded-full bg-[#F2F5FB] hover:bg-[#E5E9F2] transition-all duration-150"
          >
            <ChevronLeft className="text-[#4D5D71]" size={20} />
          </button>
          <h1 className="font-['Urbanist'] text-[16px] font-semibold text-[#303030] w-full text-center">
            Travel Checklist
          </h1>
        </div>
      </div> */}
      <div className="pb-9 pt-6  w-full max-w-[375px] bg-[#F7F9FA] h-screen">
        <div className="flex justify-start bg-[#F7F9FA] pl-4">
          <div className="flex items-center gap-2 bg-[#F0F0F0] rounded-full px-4 py-2">
            <Image
              src={`${imageDomainUrl}/Code/renewme-icon.png`}
              alt="RenewMe Icon"
              width={18}
              height={18}
            />
            <span className="font-['Urbanist'] text-[12px] text-[#000000]">RenewMe</span>
          </div>
        </div>
        <div className="px-2 mt-4">
          {CHECKLIST_CONTENTS.map((item, index) => (
            <div key={index} className="mb-[16px] bg-white rounded p-3 flex gap-3 items-start">
              <Image
                src={item.img}
                alt="img"
                width={105}
                height={105}
                className="w-[105px] h-[105px] object-cover rounded"
              />
              <div>
                <h5 className="h-[24px] font-['Urbanist'] text-[20px] font-bold leading-[24px] text-[#3A3A3B] mb-2 ml-[18px]">
                  {item.title}
                </h5>
                <ul className="ml-2 flex gap-[5px] flex-col">
                  {item.items.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 font-['Urbanist'] text-[14px] font-normal leading-[16px] text-[#4D5D71]"
                    >
                      <span className="block h-[2px] w-[2px] rounded-full bg-[#898787]"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <SoulscapeFooter
          title="Combine the joy of new horizons with the calm of inner peace"
          classes="max-w-[236px]"
          headerClasses="max-w-[360px]"
        />
      </div>
    </div>
  );
};

export default TravelChecklist;
