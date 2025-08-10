import React from 'react';

import Image from 'next/image';
import { useRouter } from 'next/router';

import { imageDomainUrl } from 'shared/constants/Assets';

import Container from './Container';

const Header: React.FC = () => {
  const router = useRouter();
  // const logoRef = useRef<HTMLImageElement>(null);
  // const logoTextRef = useRef<HTMLImageElement>(null);

  // useEffect(() => {
  //   // Slide up animation for the logo
  //   gsap.fromTo(
  //     [logoRef.current, logoTextRef.current],
  //     {
  //       y: 20,
  //       opacity: 0,
  //     },
  //     {
  //       y: 0,
  //       opacity: 1,
  //       duration: 0.5,
  //       stagger: 0.1,
  //       ease: 'power2.out',
  //     }
  //   );

  //   // Logo spinning animation (slower)
  //   gsap.to(logoRef.current, {
  //     rotation: 360 * 2,
  //     duration: 40,
  //     repeat: -1,
  //     ease: 'linear',
  //   });

  //   // Fade in animation for sidebar items
  //   gsap.fromTo(
  //     '.sidebar-item',
  //     { opacity: 0 },
  //     {
  //       opacity: 1,
  //       duration: 0.2,
  //       stagger: 0.1,
  //       ease: 'power2.out',
  //     }
  //   );
  // }, []);

  // const handleLogoInteraction = (isActive: boolean) => {
  //   gsap.to([logoRef.current, logoTextRef.current], {
  //     scale: isActive ? 1.05 : 1,
  //     duration: 0.2,
  //     ease: 'power2.out',
  //   });
  // };

  return (
    <>
      <Container className="mb-[22px] w-full">
        {/* <div className="flex items-center bg-white shadow-sm pt-[10px] pb-[20px] px-2 gap-[106px]">
          <div className="bg-[#F2F5FB] w-[32px] h-[32px] flex justify-center items-center text-center rounded-full">
            <ChevronDown className="text-[#4D5D71]" />
          </div>
          <h2 className="text-[#3A3A3B] text-[16px] font-medium font-['Urbanist']">Health Hub</h2>
        </div> */}

        <div
          onClick={() => router.push('/')}
          className="mt-[22px] flex h-[27px] w-[89px] cursor-pointer items-center rounded-[24px] bg-[#F0F0F0] py-[3.38px]"
        >
          <div className="ml-[3.68px] flex h-[18.97px] w-[18.97px] items-center justify-center rounded-full bg-[#FFFFFF] text-center">
            <Image
              src={`${imageDomainUrl}/MoodHub/Icon/main/renewme-logo.svg`}
              alt="logo"
              height={13.86}
              width={13.86}
            />
          </div>
          <h4 className="ml-[5.38px] text-center font-['Urbanist'] pb-0 text-[11px] font-medium text-[#000000]">
            RenewMe
          </h4>
        </div>
        <div>
          <h2 className="text-[22px] font-semibold font-['Urbanist'] mt-[4px] text-[#303030] leading-[26.4px]">
            Daily Check-In
          </h2>
        </div>
      </Container>
      {/* <Link
        className="flex flex-col items-center mb-8"
        href="/health-hub"
        onMouseEnter={() => handleLogoInteraction(true)}
        onMouseLeave={() => handleLogoInteraction(false)}
        onTouchStart={() => handleLogoInteraction(true)}
        onTouchEnd={() => handleLogoInteraction(false)}
      >
        <Image
          className="brightness-[90%]"
          ref={logoRef}
          src={`${imageDomainUrl}/TabletApp/favicon-original-teal.svg`}
          alt="RenewMe Logo Teal"
          width={100}
          height={100}
        />
        <Image
          ref={logoTextRef}
          src={`${imageDomainUrl}/TabletApp/renewme-logo-text.svg`}
          alt="RenewMe Logo Blue"
          width={210}
          height={210}
        />
      </Link> */}
    </>
  );
};

export default Header;
