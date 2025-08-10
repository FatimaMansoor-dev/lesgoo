import { ELEMENTS_CONTENTS, ElementContentsItem } from 'modules/Elements/constants/elementContents';
import React, { useState } from 'react';

import Image from 'next/image';
import { useRouter } from 'next/router';

import { ChevronLeft, Loader2, Minus, Plus } from 'lucide-react';

const ElementDetail: React.FC = () => {
  const router = useRouter();
  const { element } = router.query;
  const [expandedItem, setExpandedItem] = useState<number | null>(null);

  const elements: ElementContentsItem | undefined = ELEMENTS_CONTENTS.find(
    item => item.element === element
  );

  if (!elements) {
    return (
      <section className="flex w-screen items-center justify-center text-[#00C0C5]">
        <Loader2 className="h-12 w-12 animate-spin" />
      </section>
    );
  }

  const handleToggle = (index: number) => {
    setExpandedItem(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <div>
      <div className="relative flex w-screen flex-col items-center font-['Gilroy'] transition-all duration-150 ease-in-out">
        <div className="relative w-full max-w-[375px]">
          {elements && (
            <>
              <Image
                src={`${elements?.img1}`}
                width={375}
                height={320}
                alt="bg"
                className="h-[336px] object-cover object-bottom rounded-[20px]"
              />
              <div className="absolute top-0 left-0 right-0">
                <div className="bg-white rounded-b-[20px] px-4 py-3">
                  <div className="flex items-center relative py-2">
                    <button
                      onClick={() => router.push('/elements')}
                      className="absolute left-0 z-[1] flex h-[32px] w-[32px] items-center justify-center rounded-full bg-[#F5F5F5]"
                    >
                      <ChevronLeft className="text-[#333] h-5 w-5" />
                    </button>
                    <span className="text-[18px] font-semibold text-[#1C1B1F] flex-1 text-center">
                      Coping
                    </span>
                  </div>
                </div>
              </div>
              <div className="absolute top-[90px] w-full px-4">
                <div className="flex items-center justify-center">
                  <Image src={`${elements?.img2}`} width={68} height={68} alt="icon" />
                </div>
                <p className="mt-[11px] text-center font-['Urbanist'] text-[24px] font-bold text-white leading-[29px] px-8">
                  {elements.title}
                </p>
                <div className="mt-[11px] flex justify-center gap-3">
                  {elements.badge.map((item, index) => (
                    <div
                      key={index}
                      className="flex h-[24px] w-[78px] items-center justify-center rounded-xl bg-[rgba(249,251,252,0.2)] font-['Urbanist'] text-[12px] font-medium text-white backdrop:blur-[13px]"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
        <div className="w-full max-w-[375px] bg-[#F9FBFC]">
          <div className="z-1 relative mx-5 mt-[-52px]">
            <div className="rounded-[20px] bg-white shadow-[0px_2px_10px_rgba(0,0,0,0.0809659)]">
              {elements &&
                elements.contents.map((item, index) => (
                  <div
                    key={index}
                    className={`${
                      expandedItem === index
                        ? 'rounded-[20px] border-0 bg-[rgba(0,0,0,0.05)] before:absolute before:left-0 before:top-[-1px] before:h-[1px] before:w-full before:bg-[#fff] before:content-[""] first:before:hidden'
                        : 'after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:bg-[#0000000d] after:content-[""] last:after:hidden'
                    } relative px-[22.86px] py-[17px]`}
                  >
                    <div className="flex justify-between">
                      <h2
                        className={`${
                          expandedItem === index ? '!font-semibold' : ''
                        } font-['Urbanist'] font-medium text-[16px]`}
                      >
                        {item.title}
                      </h2>
                      {expandedItem !== index && (
                        <button onClick={() => handleToggle(index)} className="text-[24px]">
                          <Plus />
                        </button>
                      )}
                    </div>
                    {expandedItem === index && (
                      <>
                        <p className="mt-[13px] h-[75px] font-['Urbanist'] text-[15px]">
                          {item.description}
                        </p>
                        <div className="flex justify-end">
                          <button onClick={() => handleToggle(index)} className="text-[24px]">
                            <Minus />
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElementDetail;
