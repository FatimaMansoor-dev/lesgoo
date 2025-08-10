import React, { useState } from 'react';

import { ChevronDown } from 'lucide-react';

import { HELPLIST_STATITICS_CONTENTS } from '../constants/statiticsDetails';

const HelpHubStatiticsDetails: React.FC = () => {
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);
  const [selectedSubItemIndex, setSelectedSubItemIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setSelectedItemIndex(selectedItemIndex === index ? null : index);
    setSelectedSubItemIndex(null);
  };

  const toggleSubItem = (index: number) => {
    setSelectedSubItemIndex(selectedSubItemIndex === index ? null : index);
  };
  return (
    <div className="rounded-[10px] bg-[#FFFFFF] shadow-[0px_4px_7.1px_4px_rgba(0,0,0,0.05)]">
      {HELPLIST_STATITICS_CONTENTS?.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-between border-b-[1px] border-b-[#D9D9D9] last:border-none"
        >
          <div
            onClick={() => toggleItem(index)}
            className={`${
              selectedItemIndex === index ? '' : 'pb-[20px]'
            } flex w-[100%] cursor-pointer justify-between pl-[15.95px] pr-[14.46px] pt-[14px] items-center`}
          >
            <p className="font-['Urbanist'] text-[16px] font-semibold text-[#000000]">
              {item.title}
            </p>
            <ChevronDown
              className={`h-[24px] w-[24px] text-[#C3C3C3] ${
                selectedItemIndex === index ? 'rotate-180' : ''
              }`}
            />
          </div>
          {selectedItemIndex === index && (
            <div className="w-full">
              {item.helpList?.map((list, index) => (
                <div key={index}>
                  {list.subtitle ? (
                    <>
                      <div
                        onClick={() => toggleSubItem(index)}
                        className={`mt-[20px] flex w-full cursor-pointer justify-between border-t-[1px] border-t-[#D9D9D9] px-[16px] pt-[14px] ${
                          selectedSubItemIndex === index ? '' : 'pb-[11px]'
                        }`}
                      >
                        <div className="flex items-center">
                          <span className="block min-h-[6px] min-w-[6px] rounded-full bg-[#F07E59]"></span>
                          <p className="px-[12px] font-['Urbanist'] text-[12px] font-medium text-[#000000]">
                            {list.subtitle}
                          </p>
                        </div>
                        <ChevronDown
                          className={`h-[24px] w-[24px] text-[#C3C3C3] ${
                            selectedSubItemIndex === index ? 'rotate-180 text-black' : ''
                          }`}
                        />
                      </div>
                      {selectedSubItemIndex === index && (
                        <div className="mt-[7px] px-[16px]">
                          {list.description?.map((item, index) => (
                            <div key={index} className="mb-[15px]">
                              <p className="font-['Urbanist'] text-[12px] font-medium text-[#4D5D71]">
                                {item.text1}
                                <span className="font-['Urbanist'] text-[12px] font-bold text-[#4D5D71]">
                                  {item.number1}
                                </span>
                                <span className="font-['Urbanist'] text-[12px] font-medium text-[#4D5D71]">
                                  {item.text2}
                                </span>
                                <span className="font-['Urbanist'] text-[12px] font-bold text-[#4D5D71]">
                                  {item.number2}
                                </span>
                                <span className="font-['Urbanist'] text-[12px] font-medium text-[#4D5D71]">
                                  {item.text3}
                                </span>
                              </p>
                            </div>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="mt-[7px] px-[16px]">
                      {list.description?.map((item, index) => (
                        <div key={index} className="mb-[15px]">
                          <p className="font-['Urbanist'] text-[12px] font-medium text-[#4D5D71]">
                            {item.text1}
                            <span className="font-['Urbanist'] text-[12px] font-bold text-[#4D5D71]">
                              {item.number1}
                            </span>
                            <span className="font-['Urbanist'] text-[12px] font-medium text-[#4D5D71]">
                              {item.text2}
                            </span>
                            <span className="font-['Urbanist'] text-[12px] font-bold text-[#4D5D71]">
                              {item.number2}
                            </span>
                            <span className="font-['Urbanist'] text-[12px] font-medium text-[#4D5D71]">
                              {item.text3}
                            </span>
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default HelpHubStatiticsDetails;
