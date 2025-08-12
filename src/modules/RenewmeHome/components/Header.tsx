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
        <div className="bg-[#00000044] sm:p-[29px_84px_29px_52px] flex justify-between items-center flex-wrap">
          <div>
  <h2
    style={{
      fontFamily: 'Urbanist, sans-serif',
      fontStyle: 'normal',
      fontWeight: 400,
      color: 'rgb(255, 255, 255)',
      fontSize: '22px',
      lineHeight: '33px',
      margin: 0,
    }}
  >
    RenewMe
  </h2>

  <p
    style={{
      fontFamily: 'Urbanist, sans-serif',
      fontStyle: 'normal',
      fontWeight: 400,
      color: 'rgba(255, 255, 255, 0.55)',
      fontSize: '18px',
      lineHeight: '28px',
      marginTop: '9px',
    }}
  >
    RenewMe
  </p>
</div>

          <button
  className="bg-[#FFFFFF3D] h-[72px] rounded-[70px] px-[36px]"
  style={{
    fontFamily: 'Urbanist, sans-serif',
    fontStyle: 'normal',
    fontWeight: 500,
    color: 'rgb(255, 255, 255)',
    fontSize: '24px',
    lineHeight: '36px',
  }}
>
  Use Mobile App
</button>

        </div>
      </div>
      <div className="lg:hidden block">
        <div className="bg-[#00000044] px-[26px] py-[16px] flex justify-between items-center flex-wrap">
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
                <Link href="/user/renewme-home/sleep">Sleep</Link>
              </li>
              <li className="px-6 py-4 hover:bg-white/10">
                <Link href="/user/renewme-home/balance">Living in Balance</Link>
              </li>
              <li className="px-6 py-4 hover:bg-white/10">
                <Link href="/user/renewme-home/meditation">Meditation</Link>
              </li>
              <li className="flex items-center justify-between px-6 py-4 hover:bg-white/10">
                <Link href="/user/renewme-home/affirmations">Affirmations</Link>
              </li>
              <li className="px-6 py-4 hover:bg-white/10">
                <Link href="/user/renewme-home/confidence">Confidence</Link>
              </li>
              <li className="px-6 py-4 hover:bg-white/10">
                <Link href="/user/renewme-home/music">Music</Link>
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
