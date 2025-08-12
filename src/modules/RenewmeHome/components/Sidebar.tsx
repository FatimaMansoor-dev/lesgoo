import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const menu = [
  { href: '/user/renewme-home', icon: '/assets/Renewme-home/svg/home.svg', label: 'Home' },
  { href: '/user/renewme-home/balance', icon: '/assets/Renewme-home/svg/side-menu.svg', label: 'Balance' },
  { href: '/user/renewme-home/sleep', icon: '/assets/Renewme-home/svg/side-menu.svg', label: 'Sleep' },
  { href: '/user/renewme-home/meditation', icon: '/assets/Renewme-home/svg/side-menu.svg', label: 'Meditation' },
  { href: '/user/renewme-home/affirmations', icon: '/assets/Renewme-home/svg/side-menu.svg', label: 'Affirmations' },
  { href: '/user/renewme-home/confidence', icon: '/assets/Renewme-home/svg/side-menu.svg', label: 'Confidence' },
  { href: '/user/renewme-home/soulscape', icon: '/assets/Renewme-home/svg/side-menu.svg', label: 'Soulscape' },
  { href: '/user/renewme-home/music', icon: '/assets/Renewme-home/svg/side-menu.svg', label: 'Music' },
  { href: '/user/renewme-home/profile', icon: '/assets/Renewme-home/svg/profile.svg', label: 'Profile' },
  { href: '/logout', icon: '/assets/Renewme-home/svg/logout.svg', label: 'Logout' },
];

const urbanistStyle = { fontFamily: "Urbanist, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, Arial" };

const Sidebar = () => {
  return (
    <div className="bg-[#00000054] h-screen overflow-auto lg:block hidden">
      {/* Logo + left-aligned heading */}
      <div className="py-[47px] pl-8 pr-8.5 flex flex-col items-start">

        <div className="flex items-center">
          <Image src={'/assets/Renewme-home/svg/logo.svg'} alt="logo" width={193} height={36} />
         
        </div>
      </div>

      <nav>
        {menu.map((m) => (
          <Link
            key={m.href}
            href={m.href}
            className="p-[21px_46px] flex items-center justify-start gap-6"
          >
            <Image src={m.icon} alt={m.label} width={54} height={54} />
            <span
              className="text-[24px] leading-[36px] text-white font-normal"
              style={urbanistStyle}
            >
              {m.label}
            </span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
