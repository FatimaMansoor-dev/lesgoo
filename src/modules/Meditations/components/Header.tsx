import React from 'react';

import Image from 'next/image';
import { useRouter } from 'next/router';

import { imageDomainUrl } from 'shared/constants/Assets';

const Header: React.FC = () => {
  const router = useRouter();
  // const [isOpen, setIsOpen] = useState(false);

  // const handleLogout = () => {
  //   localStorage.removeItem('authToken');
  //   router.push('/log-in');
  // };

  return (
    <>
      {/* <div className="flex justify-between w-full max-w-[375px] px-5 items-center mb-[31px] mt-[23px]"> */}
      <div className="flex justify-between w-full max-w-[375px] px-5 mb-[31px] mt-[23px]">

        <div>
          <div
            onClick={() => router.push('/')}
            className="flex h-[27px] w-[89px] cursor-pointer items-center rounded-[24px] bg-[#F0F0F0] py-[3.38px]"
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
            <h2 className="text-[22px] font-semibold font-['Urbanist'] mt-[4px] text-[#303030] leading-[26px]">
              Meditate & Motivate
            </h2>
          </div>
        </div>
        <div className="relative">
           <button className="min-w-[32px] min-h-[32px] rounded-full bg-[#000000] opacity-25 flex justify-center items-center" onClick={() => router.back()}>
            <Image
              src={`${imageDomainUrl}/Meditations/Icon/back.png`}
              alt="back-icon"
              height={14}
              width={8}
            />
          </button>
         {/*  <button onClick={() => setIsOpen(!isOpen)}>
            <Image
              src={`${imageDomainUrl}/Meditations/Icon/ellipse-vertical.svg`}
              alt="ellipse-vertical"
              height={20}
              width={20}
            />
          </button>
          {isOpen && (
            <div className="absolute right-0 top-[30px] w-[141px] bg-white rounded-[7px] shadow-[0px_2px_9.3px_0px_#00000024]">
              <ul>
                <li
                  onClick={() => router.push('/profile')}
                  className="p-[10px_19px_9px_19px] cursor-pointer text-black font-['Urbanist'] text-sm font-medium leading-[17px]"
                >
                  Profile
                </li>
                <li
                  onClick={handleLogout}
                  className="p-[9px_19px_18px_19px] cursor-pointer text-[#A850B2] font-['Urbanist'] text-sm font-medium leading-[17px]"
                >
                  Logout
                </li>
              </ul>
            </div>
          )} */}
        </div>
      </div>
    </>
  );
};

export default Header;
