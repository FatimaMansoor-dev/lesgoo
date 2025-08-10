import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { imageDomainUrl } from 'shared/constants/Assets';

interface Option {
  label: string;
  value: string;
}

interface DRDetailsProps {
  selected: Option;
  setSelected: Dispatch<SetStateAction<Option>>;
  options: Option[];
}

const socialLinks = [
  {
    href: 'https://www.instagram.com/drlisapalmer/',
    imgSrc: `${imageDomainUrl}/DrLisaPalmer/Icon/instagram.svg`,
    alt: 'instagram',
  },
  {
    href: 'https://x.com/drlisacpalmer?s=21',
    imgSrc: `${imageDomainUrl}/DrLisaPalmer/Icon/twitter.svg`,
    alt: 'twitter',
  },
  {
    href: 'https://linktr.ee/Renewyourlife?utm_source=linktree_profile_share&ltsid=ffdf2b6a-9dde-4368-af8a-4d389ece5d24',
    imgSrc: `${imageDomainUrl}/DrLisaPalmer/Icon/linktree.svg`,
    alt: 'link',
  },
  {
    href: 'https://www.linkedin.com/in/drlisapalmer/',
    imgSrc: `${imageDomainUrl}/DrLisaPalmer/Icon/linkedin.svg`,
    alt: 'linked-in',
  },
  {
    href: 'https://www.imdb.com/title/tt36150464/',
    imgSrc: `${imageDomainUrl}/DrLisaPalmer/Icon/imdb.svg`,
    alt: 'imdb',
  },
];

const DRDetails: React.FC<DRDetailsProps> = ({ selected, setSelected, options }) => {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div>
      <div className="pl-[25px] pr-[20px]">
        <div
          onClick={() => router.push('/')}
          className="mt-[40.5px] mb-[30.5px] flex h-[27px] max-w-[89px] w-full mx-auto cursor-pointer items-center rounded-[24px] bg-[#F0F0F0] py-[3.38px]"
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
        <div className="mb-[39px] flex flex-col items-center">
          <Image
            src={`${imageDomainUrl}/DrLisaPalmer/Icon/dr-lisa-palmer.png`}
            alt="logo"
            height={244}
            width={245}
            className="rounded-full border-[1px] border-[#213559]"
          />
          <h2 className="mt-[26px] text-[20px] font-semibold leading-[24px] text-black">
            Dr. Lisa Palmer
          </h2>
          <p className="mt-[6px] text-[15px] leading-[22px] text-black">PhD, LMFT, CHT, CRRTT</p>
        </div>
        <div className="mt-[39px]">
          <h2 className="font-bold leading-[19px] mb-[17px]">About</h2>
          <p className="text-[14px] leading-[22px]">
            Dr. Lisa C. Palmer, PhD, LMFT, is a renowned psychotherapist, national media
            personality, and founder of The Renew Center of Florida, which was ranked #1 in the U.S.
            for PTSD treatment in US. As a tech innovator and the creator of RenewMe, she is on a
            mission to advance mental health. She is also the first psychotherapist to pioneer
            wellness technology for brands and their customers.
          </p>
        </div>
        <div className="flex gap-2.5 items-center">
          <div className="mt-[15px] w-[60%]">
            <h2 className="font-bold leading-[19px] mb-[11px]">Companies</h2>
            <div className="flex flex-col gap-[7px]">
              <div className="flex gap-2.5 items-center">
                <span className="bg-[#4F65CC] w-[6px] h-[6px] rounded-full"></span>
                <p className="text-[15px] leading-[18px]">Renew Center of Florida</p>
              </div>
              <div className="flex gap-2.5 items-center">
                <span className="bg-[#4F65CC] w-[6px] h-[6px] rounded-full"></span>
                <p className="text-[15px] leading-[18px]">RenewMe</p>
              </div>
            </div>
          </div>
          <div className="mt-[15px] w-[30%]">
            <Image
              src={`${imageDomainUrl}/DrLisaPalmer/Icon/dr-lisa-palmer-influencer-qr.png`}
              alt="logo"
              height={244}
              width={245}
            />
            <p className="text-center justify-center text-sm">share my info</p>
          </div>
        </div>
        <div className="mt-[46px]">
          <h2 className="font-bold leading-[19px] mb-[17px]">Contact Details</h2>
          <div className="mt-[17px] flex flex-col gap-[14px]">
            <div className="flex gap-[15px] items-center">
              <Image
                src={`${imageDomainUrl}/DrLisaPalmer/Icon/global.svg`}
                alt="global"
                height={20}
                width={20}
              />
              <Link href={'https://www.therenewcenter.com/'}>www.therenewcenter.com</Link>
            </div>
            <div className="flex gap-[15px] items-center">
              <Image
                src={`${imageDomainUrl}/DrLisaPalmer/Icon/email.svg`}
                alt="email"
                height={20}
                width={20}
              />
              <Link href={'mailto:info@therenewcenter.com'}>info@therenewcenter.com</Link>
            </div>
            <div className="flex gap-[15px] items-center">
              <Image
                src={`${imageDomainUrl}/DrLisaPalmer/Icon/phone.svg`}
                alt="phone"
                height={20}
                width={20}
              />
              <Link href={'tel:800-509-0244'}>800-509-0244</Link>
            </div>
          </div>
          <div className="mt-[30px] flex flex-col gap-[14px]">
            <div className="flex gap-[15px] items-center">
              <Image
                src={`${imageDomainUrl}/DrLisaPalmer/Icon/global.svg`}
                alt="global"
                height={20}
                width={20}
              />
              <Link href={'https://www.myrenewme.com/'}>www.myrenewme.com</Link>
            </div>
            <div className="flex gap-[15px] items-center">
              <Image
                src={`${imageDomainUrl}/DrLisaPalmer/Icon/email.svg`}
                alt="email"
                height={20}
                width={20}
              />
              <Link href={'mailto:info@myrenewme.com'}>info@myrenewme.com</Link>
            </div>
          </div>
        </div>
        <div className="mt-[53px]">
          <h2 className="font-bold leading-[19px] mb-[19px]">Social Media</h2>
          <div className="flex gap-[13px] items-center">
            {socialLinks.map(({ href, imgSrc, alt }, index) => (
              <Link
                onClick={e => {
                  e.preventDefault();
                  let width = 800;
                  let height = 600;
                  if (window.matchMedia('(max-width: 480px)').matches) {
                    width = 320;
                    height = 450;
                  } else if (window.matchMedia('(max-width: 768px)').matches) {
                    width = 400;
                    height = 550;
                  } else if (window.matchMedia('(max-width: 1024px)').matches) {
                    width = 500;
                    height = 600;
                  }
                  const left = window.screen.width / 2 - width / 2;
                  const top = window.screen.height / 2 - height / 2;

                  window.open(
                    href,
                    '_blank',
                    `width=${width},height=${height},scrollbars=yes,resizable=yes,top=${top},left=${left}`
                  );
                }}
                key={index}
                href={href}
                className="bg-[#F1F1F1] w-[55px] h-[55px] rounded-lg flex justify-center items-center"
              >
                <Image src={imgSrc} alt={alt} height={30} width={30} />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="px-[19px] mt-[23px]">
        <div ref={dropdownRef} className="relative w-full mx-auto mb-[34px]">
          <div
            className="flex justify-between items-center p-2 cursor-pointer border-b border-gray-300 h-[56px]"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="text-[22px] font-semibold text-[#303030] leading-[26px]">
              {selected.label}
            </span>
            <Image
              src={`${imageDomainUrl}/DrLisaPalmer/Icon/arrow.svg`}
              alt="arrow"
              height={8}
              width={15}
              className={isOpen ? 'rotate-180' : ''}
            />
          </div>
          {isOpen && (
            <ul className="absolute left-0 w-full bg-white border border-gray-300 rounded-md shadow-md mt-2 z-20 h-[202px] overflow-auto">
              {options.map(option => (
                <li
                  key={option.value}
                  className="p-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    setSelected(option);
                    setIsOpen(false);
                  }}
                >
                  {option.label}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default DRDetails;
