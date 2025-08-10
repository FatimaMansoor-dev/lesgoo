import { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu visibility when the button is clicked
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <div className="lg:block hidden">
        <div className="bg-[#00000024] sm:p-[29px_84px_29px_52px] flex justify-between items-center flex-wrap">
          <div>
            <h2 className="text-[22px] text-white">RenewMe</h2>
            <p className="text-lg text-[#FFFFFF8C] mt-[9px]">RenewMe</p>
          </div>
          <button className="bg-[#FFFFFF3D] h-[72px] text-white text-[24px] font-medium rounded-[70px] px-[36px]">
            Use Mobile App
          </button>
        </div>
      </div>
      <div className="lg:hidden block">
        <div className="bg-[#00000024] px-[26px] py-[16px] flex justify-between items-center flex-wrap">
          <div>
            <Image
              src={'/assets/Renewme-home/svg/white-logo.svg'}
              alt="logo"
              width={129}
              height={24}
            />
          </div>
          <div className="flex gap-[21px] items-center">
            <button className="bg-[#FFFFFF3D]  text-white text-[12px] font-medium rounded-[70px] px-[36px] py-[11px] leading-[14px]">
              Use Mobile App
            </button>
            <div>
              <button onClick={toggleMenu}>
                {isMenuOpen ? (
                  <Image
                    src={'/assets/images/landing/svg/close.svg'}
                    alt="close"
                    width={24}
                    height={24}
                  />
                ) : (
                  <Image
                    src={'/assets/Renewme-home/svg/menu.svg'}
                    alt="menu"
                    width={24}
                    height={24}
                  />
                )}
              </button>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="bg-white/15 text-white font-light text-lg">
            <ul className="divide-y divide-white/10">
              <li className="flex items-center justify-between px-6 py-4 hover:bg-white/10">
                <Link href="/home">Home</Link>
              </li>
              <li className="flex items-center justify-between px-6 py-4 hover:bg-white/10">
                <Link href="/sleep">Sleep</Link>
              </li>
              <li className="px-6 py-4 hover:bg-white/10">
                <Link href="/balance">Living in Balance</Link>
              </li>
              <li className="px-6 py-4 hover:bg-white/10">
                <Link href="/meditation">Meditation</Link>
              </li>
              <li className="flex items-center justify-between px-6 py-4 hover:bg-white/10">
                <Link href="/affirmations">Affirmations</Link>
              </li>
              <li className="px-6 py-4 hover:bg-white/10">
                <Link href="/confidence">Confidence</Link>
              </li>
              <li className="px-6 py-4 hover:bg-white/10">
                <Link href="/music">Music</Link>
              </li>
              <li className="px-6 py-4 hover:bg-white/10">
                <Link href="/profile">Profile</Link>
              </li>
              <li className="px-6 py-4 hover:bg-white/10">
                <Link href="/logout">Logout</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
