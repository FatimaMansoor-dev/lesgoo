import React, { useState } from 'react';

import { ChevronDown } from 'lucide-react';

import { HELPLIST_GENERAL_CONTENTS } from '../constants/generalDetails';

const HelpHubGeneralDetails: React.FC = () => {
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);
  const [selectedSubItemIndex, setSelectedSubItemIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setSelectedItemIndex(selectedItemIndex === index ? null : index);
    setSelectedSubItemIndex(null);
  };

  const toggleCountry = (index: number) => {
    setSelectedSubItemIndex(selectedSubItemIndex === index ? null : index);
  };
  return (
    <div className="rounded-[10px] bg-[#FFFFFF] shadow-[0px_4px_7.1px_4px_rgba(0,0,0,0.05)]">
      {HELPLIST_GENERAL_CONTENTS?.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-between border-b-[1px] border-b-[#D9D9D9] last:border-none"
        >
          <div
            onClick={() => toggleItem(index)}
            className={`${
              selectedItemIndex === index ? '' : 'pb-[20px]'
            } flex w-[100%] cursor-pointer justify-between pl-[15.9px] pr-[14.41px] pt-[14px] items-center`}
          >
            <p className="font-['Urbanist'] text-[16px] font-semibold text-[#000000] leading-[100%]">
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
              <p className="mb-[20px] mt-[7px] w-full px-[16px] font-['Urbanist'] text-[12px] leading-[19px] text-[#4D5D71]">
                {' '}
                {item.description}
              </p>
              {item.helpList?.map((list, index) => (
                <div key={index}>
                  <div
                    onClick={() => toggleCountry(index)}
                    className="flex w-full cursor-pointer justify-between border-t-[1px] border-t-[#D9D9D9] px-[16px] pb-[11px] pt-[16px]"
                  >
                    <div className="flex items-center">
                      <span className="block min-h-[6px] min-w-[6px] rounded-full bg-[#F07E59]"></span>
                      <p className="px-[12px] font-['Urbanist'] text-[12px] font-medium text-[#000000]">
                        {list.country}
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
                      {list.services?.map((item, index) => (
                        <div key={index} className="mb-[15px]">
                          <p className="font-['Urbanist'] text-[12px] font-medium text-[#4D5D71]">
                            {item.name}
                            <a
                              href={`tel:${item.phone}`}
                              className="font-['Urbanist'] text-[12px] font-medium text-[#F07E59]"
                            >
                              {item.phone}
                            </a>
                            <span className="font-['Urbanist'] text-[12px] font-medium text-[#4D5D71]">
                              {item.text}
                            </span>
                            {item.link1 && (
                              <a
                                href={item.url1}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-['Urbanist'] text-[12px] font-medium text-[#F07E59]"
                              >
                                {item.link1}
                              </a>
                            )}
                            <span className="font-['Urbanist'] text-[12px] font-medium text-[#4D5D71]">
                              {item.linkDes1}
                            </span>
                          </p>
                          <p className="break-words font-['Urbanist'] text-[12px] font-medium text-[#4D5D71]">
                            {item.description}
                            {item.link2 && (
                              <a
                                href={item.url2}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-['Urbanist'] text-[12px] font-medium text-[#F07E59]"
                              >
                                {item.link2}
                              </a>
                            )}
                            <span className="font-['Urbanist'] text-[12px] font-medium text-[#4D5D71]">
                              {item.linkDes2}
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

export default HelpHubGeneralDetails;
