import React from 'react';

import { GlobalMissionWrapper } from './GlobalMission.styled';

const GlobalMission: React.FC = () => {
  return (
    <GlobalMissionWrapper className="z-[2] flex justify-center">
      <div className="mx-auto flex h-full max-w-[340px] flex-col items-center gap-10 pt-[80px] md:max-w-[550px] md:pt-[120px] lg:max-w-[860px] lg:pt-[160px] xl:max-w-[900px] xl:gap-12">
        <h1 className="w-64 text-center font-['Gilroy'] text-3xl font-[600] text-black-1 md:w-full md:text-4xl lg:text-5xl xl:text-6xl">
          Life Balance is Better Together.
        </h1>
        <p className="text-justify font-['Gilroy'] text-base font-[400] text-black-1 md:text-lg lg:text-xl">
          {"Meet RenewMe, your go-to buddy on the journey to mental well-being! We're not just a brand; we're on a mission to spread mental health awareness and bring the best of psychology and technology together for everyone, whether you're hustling at work or exploring the world."}
        </p>
        <p className="hidden text-justify font-['Gilroy'] text-base font-[400] text-black-1 md:block md:text-lg lg:text-xl">
          {"Crafted by tech-savvy millennials who've got an eye on the future, RenewMe is all about tapping into your inner strengths for a more balanced life. It's not just your typical mindfulness app; it's a self-growth powerhouse for the next generation. Picture this: a chic and trendy app with a user-friendly interface that's as unique as you are."}
        </p>
        
        <p className="hidden text-justify font-['Gilroy'] text-base font-[400] text-black-1 md:block md:text-lg lg:text-xl">
          Join us in this exciting journey with RenewMe – where technology meets renewal and self-growth!
        </p>
        <span className="relative mt-5 flex h-auto w-64 justify-center text-center md:w-full">
          <h1 className="font-['Gilroy'] text-2xl font-[600] text-black-1 md:text-3xl">
            Our mission of mental health awareness
          </h1>
        </span>
      </div>
    </GlobalMissionWrapper>
  );
};

export default GlobalMission;
