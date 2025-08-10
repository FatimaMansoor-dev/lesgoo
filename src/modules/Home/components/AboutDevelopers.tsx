import React, { useMemo } from 'react';

import Image from 'next/image';

import HeartSvg from 'shared/assets/svg/heart.svg';

import { cn } from 'src/lib/utils';

import { HOME_IMAGES } from '../constants';
import { AboutDevelopersWrapper } from './AboutDevelopers.styled';

interface ContentSection {
  title: string;
  content: string;
}

interface Props {
  className?: string;
}

const HeaderWithHeart: React.FC<{ isMobile: boolean }> = ({ isMobile }) => (
  <h1 className={cn(
    "font-['Gilroy'] text-3xl font-[600] text-black-1 md:text-4xl lg:text-5xl xl:text-6xl",
    "flex items-center gap-2",
    isMobile ? "md:hidden justify-start" : "hidden md:flex md:justify-center"
  )}>
    <span className="inline-block">Made with </span>
    {isMobile ? (
      <span className="inline-block">
        L<HeartSvg className={cn(
          "inline-block h-auto w-full max-w-[19px] [&>path]:fill-[#3A3A3B]",
          "lg:max-w-[29px]",
          "xl:max-w-[37px]"
        )} />ve.
      </span>
    ) : (
      <>
        <HeartSvg className={cn(
          "inline-block h-auto w-full max-w-[19px] [&>path]:fill-[#3A3A3B]",
          "lg:max-w-[29px]",
          "xl:max-w-[37px]"
        )} />
        <span className="inline-block">Love.</span>
      </>
    )}
  </h1>
);

// Separate component for content sections
const ContentSectionItem: React.FC<ContentSection> = ({ title, content }) => (
  <div className="flex w-full flex-col items-center">
    <p className={cn(
      "mb-2 min-w-full text-left md:text-center",
      "font-['Gilroy'] text-xl font-[700] text-[#3A3A3B] md:text-2xl"
    )}>
      {title}
    </p>
    <p
      className={cn(
        "text-justify font-['Gilroy'] text-lg font-[400] text-[#7B7C7D]"
      )}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  </div>
);

const AboutDevelopers: React.FC<Props> = ({ className }) => {
  const contentSections = useMemo(() => [
    {
      title: "Wellness Meets Technology",
      content: "RenewMe collections blends mindfulness with technology. Our mission is to inspire you to lead happier and more balanced life."
    },
    {
      title: "Mission of Mental Health Awareness",
      content: "RenewMe was created by Dr. Lisa Palmer to redefine mental wellness through innovation and expertise. Our mission is to provide transformative tools that inspire balance, resilience, and well-being, helping you to thrive in today’s fast-paced world."
    },
    {
      title: "Elevate Wellness and Drive Engagement",
      content: "Discover RenewMe&rsquo;s innovative wellness and white-label solutions are designed to enhance guest experiences, drive customer engagement, and seamlessly integrate wellness into commercial and consumer spaces. Our <b> Wellness Software on Tablets </b>   brings mindfulness tools, guided relaxation, and mental wellness resources to hotels, recovery centers, and hospitality brands. Our interactive content and exclusive rewards promotes mental well-being while strengthening brand loyalty."
    }
  ], []);

  return (
    <AboutDevelopersWrapper
      className={cn(
        "flex flex-col items-center justify-center w-full bg-[#FAFAFA]",
        "pt-[40px] md:pt-[40px]",
        "min-[575px]:h-[1500px]",
        "md:px-10",
        "xl:h-[1024px] xl:flex-row-reverse relative mb-5 md:mb-0",
        className
      )}
      id="about-developers"
    >
      <div className={cn('flex flex-col gap-6 px-6 h-fit xl:basis-full', 'xl:gap-10')}>
        <HeaderWithHeart isMobile={false} />
        <HeaderWithHeart isMobile={true} />

        {contentSections.map((section, index) => (
          <ContentSectionItem
            key={index}
            title={section.title}
            content={section.content}
          />
        ))}

        <Image
          className="absolute bottom-0 right-0 hidden md:block"
          src={HOME_IMAGES?.radial?.url}
          alt={HOME_IMAGES.radial.alt}
          width={HOME_IMAGES.radial.width}
          height={HOME_IMAGES.radial.height}
        />
      </div>

      <div className="relative basis-full">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <Image
            className="object-contain max-w-[800px] sm:max-w-[1000px] md:max-w-[1200px] hidden md:block"
            src={HOME_IMAGES?.team?.url}
            alt={HOME_IMAGES.team.alt}
            width={HOME_IMAGES.team.width}
            height={HOME_IMAGES.team.height}
          />
        </div>
      </div>
    </AboutDevelopersWrapper>
  );
};

export default AboutDevelopers;
