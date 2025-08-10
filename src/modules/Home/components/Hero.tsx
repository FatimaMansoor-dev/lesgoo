import React, { useState } from 'react';

import Auth from 'modules/SignUp/Auth';
import Image from 'next/image';

import Navbar from 'shared/components/Partials/Navbar';

import { useRouter } from 'next/router';
import { HeroWrapper } from './Hero.styled';

const Hero: React.FC = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  
  
  return (
    <HeroWrapper className="relative">
      <div className="bg-[url(/assets/Home/h-bg.png)] bg-no-repeat bg-cover pb-[40px] cust-bg-shade ">
        <div className="">
         <Navbar />
        </div>
        <div className="container isolate mx-auto px-6 pt-10">
          <div className="flex h-full flex-col items-center">
            <span className="border-white text-white p-[8px_15px] border rounded-full text-sm font-medium !font-['Gilroy'] flex justify-center items-center sm:mb-[70px] mb-[40px]">
              Coming Soon!
            </span>
            <h2 className="text-white !font-['Gilroy'] font-medium md:text-[70px] text-5xl mb-[20px] text-center">
              A World of Balance{' '}
            </h2>
            <p className="text-white lg:text-[20px] text-base !font-['Gilroy'] font-medium text-center max-w-[517px] mx-auto sm:leading-[30px]">
              A new and refreshing wellness brand inspiring you to lead a happier and more balanced
              life.
            </p>
            <button 
              className="bg-white font-['Urbanist'] rounded-[70px] md:my-[77px] my-[56px] md:max-w-[309px] max-w-[200px] w-full font-medium md:h-[72px] h-[50px] md:text-2xl text-lg cursor-pointer mx-auto" 
              onClick={() => router.push('/login')}>
              Get Started Now
            </button>
          </div>
        </div>
             {open && <Auth open={open} setOpen={setOpen} />}
        <div className="relative flex h-[500px] w-full justify-center overflow-hidden lg:h-[650px] xl:h-[700px]">
          <div className="flex justify-center items-center absolute gap-[20px] lg:gap-[20px] xl:gap-[70px]">
            <Image
              src={'/assets/Home/h-phone-s1-1.png'}
              alt="h-phone-1"
              width={326}
              height={665}
              className="h-auto w-full max-w-[230px] lg:max-w-[300px] xl:max-w-[326px]"
            />
            <Image
              src={'/assets/Home/h-phone-s1-2.png'}
              alt="h-phone-2"
              width={326}
              height={665}
              className="h-auto w-full max-w-[230px] lg:max-w-[300px] xl:max-w-[326px]"
            />
            {/* <Image
              src={'/assets/Home/h-phone-3.png'}
              alt="h-phone-3"
              width={326}
              height={665}
              className="h-auto w-full max-w-[230px] lg:max-w-[300px] xl:max-w-[326px]"
            /> */}
          </div>
        </div>
      </div>
    </HeroWrapper>
  );
};

export default Hero;
