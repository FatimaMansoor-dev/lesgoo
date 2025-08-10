/* eslint-disable no-console */
import classNames from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import { useWindowSize } from 'react-use';

import Image from 'next/image';

import CarouselArrow from 'shared/assets/svg/carousel-arrow.svg';

import { WELLNESS } from '../constants';
import { WellnessWrapper } from './Wellness.styled';

interface Props {
  className?: string;
}

const WellnessMobile: React.FC = () => {
  const imageOption = {
    gap: 50,
    left: 0,
    width: 0,
  };

  return (
    <>
      {WELLNESS.map((wellness, wellnessIdx) => (
        <WellnessWrapper
          key={wellnessIdx}
          className={classNames(
            `relative flex h-full w-screen flex-col items-center justify-between gap-[40px] overflow-hidden px-5 pt-[40px] pb-[40px]`,
            `lg:gap-[80px] lg:pt-[58px] lg:pb-[80px]`,
            wellnessIdx === 0 && 'mt-[60px]'
          )}
          style={{ background: wellness.bgColor }}
          imageOption={imageOption}
        >
          <div className="container grid w-full max-w-[1110px] gap-y-[30px] md:grid-cols-[repeat(2,1fr)]">
            <div className="font-['Gilroy'] text-4xl font-medium text-black-1 text-center transition-all duration-1000 ease-in-out">
              {wellness.title} <br />
              {wellness.subtitle}
            </div>
            <div className="font-['Gilroy'] text-base font-regular text-black-1 text-justify transition-all duration-1000 ease-in-out">
              {wellness.description}
            </div>
          </div>
          <div className="relative grid w-full">
            <div
              className="relative left-0 flex h-full w-full transition-[left] duration-1000 ease-in-out"
              style={{ left: -imageOption.left }}
            >
              <div className="relative h-screen max-h-[400px] w-full overflow-hidden rounded-[20px]">
                <Image
                  className="absolute top-0 h-full w-full object-cover object-top"
                  src={wellness.image.url}
                  height={wellness.image.height}
                  width={wellness.image.width}
                  alt={wellness.image.alt}
                  priority
                />
              </div>
            </div>
          </div>
        </WellnessWrapper>
      ))}
    </>
  );
};

const Wellness: React.FC<Props> = ({ className }) => {
  const [currentWidth, setCurrentWidth] = useState<number>(0);
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [imageOption, setImageOption] = useState<{ gap: number; left: number; width: number }>({
    gap: 0,
    left: 0,
    width: 0,
  });

  const lifestyleRef = useRef<HTMLDivElement | null>(null);
  const hospitalityRef = useRef<HTMLDivElement | null>(null);
  const employeesRef = useRef<HTMLDivElement | null>(null);
  const respondersRef = useRef<HTMLDivElement | null>(null);
  const studentsRef = useRef<HTMLDivElement | null>(null);
  const detailRef = useRef<HTMLDivElement | null>(null);

  const refArr = [lifestyleRef, hospitalityRef, employeesRef, respondersRef, studentsRef];

  const { width } = useWindowSize();

  const handleNext = () => {
    if (activeIdx < WELLNESS.length - 1) setActiveIdx(activeIdx + 1);
    return;
  };

  const handleBack = () => {
    if (activeIdx !== 0) return setActiveIdx(activeIdx - 1);
    return;
  };

  useEffect(() => {
    if (detailRef.current) {
      const imageGap = width > 1280 ? 50 : (width - detailRef.current.clientWidth) / 2;

      // * We added this because of the center alignment
      const addedLength = (imageGap + detailRef.current.clientWidth) * 2;

      const imageLeft = activeIdx
        ? activeIdx * detailRef.current.clientWidth + activeIdx * imageGap - addedLength
        : 0 - addedLength;

      const imageWidth = width > 1280 ? 1110 : detailRef.current.clientWidth;

      setImageOption(prevImageOption => ({
        ...prevImageOption,
        gap: imageGap,
        left: imageLeft,
        width: imageWidth,
      }));
    }

    setCurrentWidth(width);
  }, [activeIdx, width]);

  if (currentWidth && currentWidth < 768) return <WellnessMobile />;

  return (
    <WellnessWrapper
      className={classNames(
        `relative mt-[80px] flex h-full w-screen flex-col items-center justify-between gap-[60px] overflow-hidden px-5 pt-[80px] pb-[70px]`,
        `lg:mt-[80px] lg:gap-[80px] lg:pt-[58px] lg:pb-[80px]`,
        className
      )}
      style={{ background: WELLNESS[activeIdx].bgColor }}
      imageOption={imageOption}
    >
      <div className="absolute bottom-[35%] z-10 flex w-screen justify-between">
        <div
          className="relative cursor-pointer [&>svg>g>path]:hover:fill-orange-1 [&>svg>g>circle]:hover:stroke-orange-1"
          onClick={handleBack}
        >
          <CarouselArrow className="h-[45px] w-[45px]" />
        </div>
        <div
          className="relative cursor-pointer [&>svg>g>path]:hover:fill-orange-1 [&>svg>g>circle]:hover:stroke-orange-1"
          onClick={handleNext}
        >
          <CarouselArrow className="absolute right-0 top-[-2px] h-[45px] w-[45px] origin-center rotate-180" />
        </div>
      </div>
      <div
        ref={detailRef}
        className="container grid w-full max-w-[1110px] gap-y-[30px] md:grid-cols-[repeat(2,1fr)]"
      >
        <div className="font-['Gilroy'] text-4xl font-[600] text-black-1 transition-all duration-1000 ease-in-out md:text-5xl lg:text-[60px] lg:leading-[72px]">
          {WELLNESS[activeIdx].title} <br />
          {WELLNESS[activeIdx].subtitle}
        </div>
        <div className="font-['Gilroy'] text-base font-[500] text-black-1 transition-all duration-1000 ease-in-out md:max-w-[538px] md:text-lg lg:text-[20px] lg:leading-[32px] ">
          {WELLNESS[activeIdx].description}
        </div>
      </div>
      <div className="relative grid">
        <div
          className="wellness-img-placeholder relative left-0 flex h-full w-full transition-[left] duration-1000 ease-in-out"
          style={{ left: -imageOption.left }}
        >
          {WELLNESS.map((wellness, wellnessIdx) => {
            return (
              <div
                key={wellnessIdx}
                className="relative h-screen max-h-[589px] w-screen overflow-hidden rounded-[20px] "
                ref={refArr[wellnessIdx]}
              >
                <Image
                  className="absolute top-0 h-full w-full object-cover object-top"
                  src={wellness.image.url}
                  height={wellness.image.height}
                  width={wellness.image.width}
                  alt={wellness.image.alt}
                  priority
                />
              </div>
            );
          })}
        </div>
      </div>
    </WellnessWrapper>
  );
};

export default Wellness;
