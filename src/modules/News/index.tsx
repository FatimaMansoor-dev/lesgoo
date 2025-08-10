import React from 'react';

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import { imageDomainUrl } from 'shared/constants/Assets';
import { ROUTES } from 'shared/constants/Routes';

import Hero from './components/Hero';
import WhatPeopleAreSaying from './components/WhatPeopleAreSaying';

const inTheNewsContents = [
  {
    title: 'Media Sizzle Reel 2023 - Dr. Lisa Palmer',
    youtubeLink: 'https://www.youtube.com/embed/e_y1_kRQNRo?si=aHi7xEK6VElWsmU7',
  },
  {
    title: 'Media Sizzle Reel 2022 - Dr. Lisa Palmer',
    youtubeLink: 'https://www.youtube-nocookie.com/embed/MRUedr9zev4?si=MscKK3HKHY9p-syo',
  },
];

const featuredOnlineContents = [
  {
    title: '10 Entrepreneurs Leading the Business Frontier',
    description:
      'Dr. Lisa Palmer is a powerhouse in the fields of psychotherapy, mental health, and entrepreneurship. With her impressive credentials, including a Ph.D., LMFT, CHT, and CRRTT, she’s an unstoppable force in her field.',
    link: 'https://www.msn.com/en-us/money/other/10-entrepreneurs-leading-the-business-frontier/ar-BB1hAqFP',
  },
  {
    title: 'Dr. Palmer Inducted into Marquis Who’s Who in America',
    description:
      "Dr. Lisa C. Palmer has been included in Marquis Who's Who. As in all Marquis Who's Who biographical volumes, individuals profiled are selected on the basis of current reference value. Factors such as position, noteworthy accomplishments, visibility, and prominence in a field are all taken into account during the selection process.",
    link: 'https://www.24-7pressrelease.com/press-release/505175/dr-lisa-c-palmer-has-been-inducted-into-the-prestigious-marquis-whos-who-biographical-registry',
  },
  {
    title: 'Top Ten Treatment Centers for PTSD',
    description:
      'The Renew Center of Florida — Offers a portfolio of trauma programs. There exist few good programs for trauma, particularly those that are gender-specific. Many centers simply rely on medication and general psychology techniques. What makes Renew Center of Florida trauma programs world-class is that they encompass both the mind and body, carefully changing trauma-based negative belief systems through various psychotherapies.',
    link: 'https://www.newsmax.com/fastfeatures/post-traumatic-stress-disorder-treatment-centers/2017/11/08/id/370857/',
  },
];

const News: React.FC = () => {
  return (
    <>
      <Head>
        <title>In the News | RenewMe</title>

        {/* <!--  Primary --> */}
        <meta
          name="Discover RenewMe's latest news and innovations. Stay informed about our advancements in technology and wellness solutions."
          content="In the News | RenewMe"
        />
      </Head>

      {/* <NewsWrapper className="flex flex-col bg-white"> */}
      {/* <Image
        className="hidden lg:block object-cover absolute top-0 opacity-20 object-top z-50"
        src={`${imageDomainUrl}/News/in-the-news-guide-desktop.png`}
        quality={100}
        width={1920}
        height={1080}
        alt="In the News Desktop Guide"
      /> */}
      {/* <Image
        className="block md:hidden object-cover absolute top-0 opacity-20 object-top z-50"
        src={`${imageDomainUrl}/News/in-the-news-guide-mobile.png`}
        quality={100}
        width={1920}
        height={1080}
        alt="In the News Desktop Guide"
      /> */}

      <Hero />

      {/* In the News */}
      <section className="flex flex-col items-start mb-8 md:mb-40 w-full">
        <h2 className="text-left font-['Gilroy'] text-base md:text-4xl w-full font-medium leading-10 text-black-1 mb-[14px] md:mb-[22px] px-[30px] md:px-[50px] lg:px-[164px]">
          In the News
        </h2>
        <div className="flex overflow-x-auto gap-4 md:gap-7 items-start w-screen px-[30px] md:px-[50px] lg:px-[164px]">
          {inTheNewsContents.map((content, index) => (
            <div key={index} className="flex-shrink-0 w-[300px] md:w-[690px] h-fit">
              <iframe
                className="w-full aspect-video mb-3 md:mb-7 rounded-xl md:rounded-3xl"
                src={content.youtubeLink}
                title=""
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="no-referrer"
                allowFullScreen
              />
            </div>
          ))}
        </div>
      </section>

      {/* Featured Online */}
      <section className="flex flex-col items-start w-screen font-['Gilroy'] mb-8 md:mb-40">
        <div className="md:px-[50px] lg:px-[164px] flex justify-between items-start gap-120 w-full mb-[14px] md:mb-[22px] pl-[30px]">
          <h2 className="text-left font-['Gilroy'] text-base md:text-4xl w-full font-medium leading-10 text-black-1">
            Featured Online
          </h2>
          <p className="text-xl hidden md:block w-full text-justify">
            Recognized as one of the Top 10 Entrepreneurs Leading Business Frontier by MSN.com and
            as one of the Top 8 Inspiring Business Leaders in Florida, Dr. Palmer&apos;s impact is
            widely acknowledged.
          </p>
        </div>
        <div className="flex overflow-x-auto gap-4 md:gap-7 items-start w-screen px-[30px] md:px-[50px] lg:px-[164px]">
          {featuredOnlineContents.map((content, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[300px] md:w-[600px] h-fit border-[1px] border-zinc-300 p-4 md:p-8 rounded-xl md:rounded-3xl"
            >
              <h2 className="text-left text-base md:text-4xl font-medium md:leading-10 text-black-1 mb-[16px]">
                {content.title}
              </h2>
              <p className="text-base md:text-xl w-full text-justify mb-[16px] line-clamp-3">
                {content.description}
              </p>
              <a
                href={content.link}
                className="text-base md:text-xl text-zinc-400 mt-8"
                target="_blank"
                rel="noreferrer"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Quote Section */}
      <section className="flex flex-col items-center w-screen font-['Gilroy'] mb-8 md:mb-40  px-[30px] md:px[50px] lg:px-[164px]">
        <Image
          className="w-12 h-16 mb-10"
          src={`${imageDomainUrl}/News/Icon/quote-icon.svg`}
          width={600}
          height={600}
          alt="Quote Icon"
        />

        <h1 className="text-center text-xl md:text-4xl font-medium md:leading-10 text-black-1 mb-10 max-w-[800px]">
          “Technology when infused with psychology can help people lead more balanced lives.”
        </h1>
        <p className="text-base md:text-2xl w-full text-center">Dr. Lisa Palmer, CEO of RenewMe</p>
      </section>

      {/* About the Founder */}
      <section className="flex flex-col items-center md:items-start w-full md:flex-row px-[30px] md:px-[50px] lg:px-[164px] gap-10 font-['Gilroy'] mb-10 md:mb-40">
        <Image
          className="w-full md:w-1/2 object-cover"
          src={`${imageDomainUrl}/News/about-the-founder-image.png`}
          alt="About the Founder, Lisa Image"
          width={1080 * 2}
          height={1920 * 2}
          quality={100}
        />
        <div className="w-full flex flex-col items-center md:items-start md:w-1/2">
          <Image
            className="w-7 md:w-12 mb-4 md:mb-12"
            src={`${imageDomainUrl}/News/Icon/info-icon.svg`}
            width={600}
            height={600}
            alt="Info Icon"
          />
          <h1 className="className text-center md:text-left text-xl md:text-4xl font-medium mb-4 md:mb-8 w-full">
            About the Founder
          </h1>
          <p className="text-base md:text-xl text-justify mb-4 md:mb-8 w-full">
            Dr. Lisa Palmer, PhD, LMFT, CHT, CRRTT, is an esteemed psychotherapist renowned for her
            expertise in PTSD and eating disorder treatment.
          </p>
          <p className="text-base md:text-xl text-justify mb-4 md:mb-8 w-full">
            As the founder of{' '}
            <span className="underline underline-offset-4">
              <a
                className="hover:text-orange-400"
                href="https://www.therenewcenter.com/"
                target="_blank"
                rel="noreferrer"
              >
                The Renew Center of Florida
              </a>
            </span>
            , she has earned the prestigious distinction of being ranked #1 for PTSD treatment in
            the US by Newsmax. Dr. Palmer is also the driving force behind RenewMe, a tech company
            dedicated to fostering happier and more balanced lives.
          </p>
          <p className="text-base md:text-xl text-justify mb-0 md:mb-8 w-full">
            Her advocacy for mental health awareness extends to national and international
            television networks, where she regularly appears to promote her global mission.
          </p>
        </div>
      </section>

      {/* Apple Engineer * Miss Vermont USA */}
      <section className="flex flex-col md:flex-row md:items-start px-[30px] items-center md:px-[50px] lg:px-[164px] gap-10 font-['Gilroy'] mb-8 md:mb-40">
        {/* Apple Engineer */}
        <div className="w-full flex flex-col items-center md:items-start md:w-1/2">
          <Image
            className="w-8 md:w-12 mb-4 md:mb-12"
            src={`${imageDomainUrl}/News/Icon/code-icon.svg`}
            width={600}
            height={600}
            alt="Info Icon"
          />
          <h1 className="className text-center md:text-left text-xl md:text-4xl font-medium mb-4 md:mb-8 w-full">
            With Former Apple Engineers
          </h1>
          <p className="text-base md:text-xl text-justify mb-4 md:mb-8 w-full">
            Teaming up with former Apple engineers, Dr. Palmer is poised to make history as the
            first psychotherapist and minority woman tech founder to develop mindfulness
            applications for corporate and hospitality brands.
          </p>
          <p className="text-base md:text-xl text-justify mb-0 md:mb-8 w-full">
            These applications aim to enhance the wellness experience for customers, aligning with
            her overarching goal of promoting mental health awareness and life balance worldwide.
          </p>
        </div>

        {/* Miss Vermont */}
        <div className="w-full flex flex-col items-center md:items-start md:w-1/2">
          <Image
            className="w-8 md:w-12 mb-4 md:mb-12"
            src={`${imageDomainUrl}/News/Icon/crown-icon.svg`}
            width={600}
            height={600}
            alt="Info Icon"
          />
          <h1 className="className text-center md:text-left text-xl md:text-4xl font-medium mb-4 md:mb-8 w-full">
            Former Miss Vermont USA
          </h1>
          <p className="text-base md:text-xl text-justify mb-10 md:mb-8 w-full">
            As a former Miss Vermont USA, Dr. Palmer brings a unique blend of passion, innovation,
            and leadership to her endeavors, ensuring her contributions leave a lasting impact on
            the field of mental health and beyond.
          </p>

          <div className="w-full flex flex-col items-center md:items-start">
            <Image
              className="w-8 md:w-12 mb-3"
              src={`${imageDomainUrl}/News/Icon/mail-icon.svg`}
              width={600}
              height={600}
              alt="Info Icon"
            />
            <h2 className="text-xl w-full font-medium leading-[100%] text-center md:text-left">
              Send Us A Message?
            </h2>

            <Link
              href={ROUTES.CONTACT.MEDIA_INQUIRIES}
              className="underline underline-offset-2 text-base mt-2 md:mt-0 md:text-xl hover:text-orange-400"
            >
              Media Inquiries
            </Link>
          </div>
        </div>
      </section>

      {/* <OtherVideos /> */}
      <WhatPeopleAreSaying />
      {/* </NewsWrapper> */}
    </>
  );
};

export default News;
