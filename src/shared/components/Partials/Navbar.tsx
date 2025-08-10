import Auth from 'modules/SignUp/Auth';
import React, { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { ROUTES } from 'shared/constants/Routes';

import { useRouter } from 'next/router';
import { NavbarWrapper } from './Navbar.styled';

const Navbar: React.FC = () => {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
    const router = useRouter(); // Add this line

  // Determine if current route should have black text
  const blackTextRoutes = [ROUTES.GLOBAL_PARTNERS, ROUTES.PRIVACY, ROUTES.TERMS, ROUTES.NEWS, ROUTES.CONTACT.INDEX, 
    ROUTES.CONTACT.MEDIA_INQUIRIES, ROUTES.CONTACT.GLOBAL_PARTNERS,
   ];
  const isBlackText = blackTextRoutes.includes(router.pathname);

  // const router = useRouter();
  // const [show, setShow] = useState(false);
  // const [currentWidth, setCurrentWidth] = useState(0);

  // const { width } = useWindowSize();
  // const theme = useThemeStore(state => state.theme);

  // const isDesktop = useMemo(() => currentWidth && width >= screens.large, [width, currentWidth]);

  // const isActiveClass = (path: string) => {
  //   if (router.pathname !== path) return 'hover:bg-[#ffffff4c] hover:rounded-[100px]';
  //   return theme === Themes.Light && isTop
  //     ? 'bg-[#ffffff4c] rounded-[100px]'
  //     : 'bg-[#ffffff] rounded-[100px]';
  // };

  // const defaultLinkClass = classNames(
  //   `mt-0 px-4 py-1.5`,
  //   theme !== Themes.Light || !isTop ? 'nav-text-black-1' : 'text-white'
  // );

  // const mainClass = classNames(
  //   'top-0 z-20 w-full sticky transition-[top] duration-300',
  //   hide ? (show ? 'top-0' : 'top-[-64px]') : 'top-0',
  //   !isTop && !show ? 'backdrop-blur-2xl bg-[#ffffff99]' : ''
  // );

  // const renewMeClass = classNames(defaultLinkClass, isActiveClass(ROUTES.HOME));
  // const soulScapeClass = classNames(defaultLinkClass, isActiveClass(ROUTES.SOULSCAPE));
  // const spaScapeClass = classNames(defaultLinkClass, isActiveClass(ROUTES.SPASCAPE));
  // const globalPartnersClass = classNames(
  //   'hidden',
  //   defaultLinkClass,
  //   isActiveClass(ROUTES.GLOBAL_PARTNERS),
  //   `lg:block`
  // );
  // const inTheNewsClass = classNames(
  //   'hidden',
  //   defaultLinkClass,
  //   isActiveClass(ROUTES.NEWS),
  //   `lg:block`
  // );
  // const menuClass = classNames(
  //   `hidden bg-transparent w-full h-auto absolute left-0 top-[50%] translate-y-[-50%]`,
  //   `lg:block`
  // );
  // const menuPlaceholderClass = classNames(
  //   `mx-auto flex justify-center items-center gap-1 font-['Gilroy'] font-[500] text-sm`
  // );
  // const mobileMenuClass = classNames(
  //   `fixed w-full h-screen top-0 left-0 px-[15%] pt-[15%] text-white`,
  //   show ? 'block backdrop-blur-2xl bg-[rgba(83,158,216,0.5)]' : 'hidden',
  //   'lg:hidden'
  // );

  // const renderLogo = useMemo(() => {
  //   const logoClass = classNames(`w-auto h-full`, !isDesktop && show && 'hidden');

  //   if (theme !== Themes.Light || !isTop) return <LogoDarkSvg className={logoClass} />;
  //   return <LogoSvg className={logoClass} />;
  // }, [theme, isDesktop, show, isTop]);

  // const handleClick = () => setShow(!show);

  // useEffectOnce(() => {
  //   if (window) setCurrentWidth(window.innerWidth);
  // });

  // let mobileMainNavigationLink;
  // let mobileMainNavigationContent;

  // if (router.pathname === ROUTES.HOME) {
  //   mobileMainNavigationLink = ROUTES.SOULSCAPE;
  //   mobileMainNavigationContent = 'Soulscape';
  // } else if (router.pathname === ROUTES.SOULSCAPE) {
  //   mobileMainNavigationLink = ROUTES.SPASCAPE;
  //   mobileMainNavigationContent = 'Spascape';
  // } else if (router.pathname === ROUTES.SPASCAPE) {
  //   mobileMainNavigationLink = ROUTES.GLOBAL_PARTNERS;
  //   mobileMainNavigationContent = 'Partners';
  // } else if (router.pathname === ROUTES.GLOBAL_PARTNERS) {
  //   mobileMainNavigationLink = ROUTES.CONTACT.MEDIA_INQUIRIES;
  //   mobileMainNavigationContent = 'Media';
  // } else {
  //   mobileMainNavigationLink = ROUTES.HOME;
  //   mobileMainNavigationContent = 'RenewMe';
  // }

   return (
    <NavbarWrapper>
      <div>
        <div className="flex justify-between items-center container relative mx-auto h-16 px-6 md:px-24 lg:px-20 xl:px-40">
          <div className="flex">
            <button>
              <div
                className="z-[3] mr-3 flex cursor-pointer flex-col space-y-1 lg:hidden"
                onClick={() => setShow(!show)}
              >
                <span className={`h-0.5 w-5 block ${isBlackText ? 'bg-black' : 'bg-white'} ${show && 'hidden'}`}></span>
                <span className={`h-0.5 w-5 block ${isBlackText ? 'bg-black' : 'bg-white'} ${show && 'hidden'}`}></span>
                <span className={`h-0.5 w-5 block ${isBlackText ? 'bg-black' : 'bg-white'} ${show && 'hidden'}`}></span>
              </div>
            </button>
           {isBlackText ? (
            <Image
              src="/assets/Home/svg/logo-black.svg"
              alt="logo-white"
              width={194}
              height={36}
            />
          ) : (
            <Image
              src="/assets/Home/svg/logo-white.svg"
              alt="logo-black"
              width={194}
              height={36}
            />
          )}
            
          </div>
          <div className="lg:flex hidden gap-1 items-center absolute left-1/2 -translate-x-1/2">
            <Link
              href={ROUTES.HOME}
              className={`bg-[#ffffff4d] rounded-[40px] ${isBlackText ? 'nav-text-black' : 'text-white'} !font-['Gilroy'] font-medium text-sm p-[8px_12px]`}
            >
              RenewMe
            </Link>
            <Link
              href={ROUTES.SOULSCAPE}
              className={`${isBlackText ? 'nav-text-black' : 'text-white'} !font-['Gilroy'] font-medium text-sm p-[8px_12px]`}
            >
              Soulscape
            </Link>
            {/* <Link
              href={ROUTES.SPASCAPE}
              className={`${isBlackText ? 'nav-text-black' : 'text-white'} !font-['Gilroy'] font-medium text-sm p-[8px_12px]`}
            >
              Spascape
            </Link> */}
          </div>
          <div className="lg:flex hidden gap-1 items-center">
            <Link
              href={ROUTES.GLOBAL_PARTNERS}
              className={`${isBlackText ? 'nav-text-black' : 'text-white'} !font-['Gilroy'] font-medium text-sm p-[8px_12px]`}
            >
              Global Partners
            </Link>
            {/* <Link
              href={ROUTES.NEWS}
              className={`${isBlackText ? 'nav-text-black' : 'text-white'} !font-['Gilroy'] font-medium text-sm p-[8px_12px]`}
            >
              In the News
            </Link> */}
            {/* <button
              onClick={() => setOpen(true)}
              className={`${isBlackText ? 'nav-text-black' : 'text-white'} font-gilroy font-bold text-sm px-3 py-2 cursor-pointer z-10 relative`}
            >
              Log In / Join
            </button> */}

            
              <Link href="/login" className={`${isBlackText ? 'nav-text-black' : 'text-white'}  !font-['Gilroy'] font-medium text-sm p-[8px_12px]`}
       >
              Log In / Join
              </Link>
          </div>
        </div>
        {show && (
          <div className={`block backdrop-blur-2xl bg-[rgba(83,158,216,0.5)] lg:hidden fixed w-full h-screen top-0 left-0 px-[15%] pt-[15%] ${isBlackText ? 'nav-text-black' : 'text-white'} z-[1]`}>
            <div className="flex flex-col gap-7 font-['Gilroy'] text-xl font-[500]">
              <div
                className="flex h-[36px] w-[36px] cursor-pointer items-center justify-center rounded-[50%] bg-[#f07e58]"
                onClick={() => setShow(false)}
              >
                <Image
                  src={'/assets/Home/svg/close.svg'}
                  alt="close"
                  width={11}
                  height={11}
                  className="h-[11px] w-auto"
                />
              </div>
              <Link href={ROUTES.HOME} className="hover:underline">
                RenewMe
              </Link>
              <Link href={ROUTES.SOULSCAPE} className="hover:underline">
                Soulscape
              </Link>
              {/* <Link href={ROUTES.SPASCAPE} className="hover:underline">
                Spascape
              </Link> */}
              <div className="h-[1px] w-full bg-[#f2f2f2]"></div>
              <Link href={ROUTES.GLOBAL_PARTNERS} className="hover:underline">
                Global Partners
              </Link>
              {/* <Link href={ROUTES.NEWS} className="hover:underline">
                In the News
              </Link> */}
              <Link href="/login" className="hover:underline text-left"
                    >
                Log In / Join
              </Link>

              {/* <button
                onClick={() => {
                  setOpen(true);
                  setShow(false); // Hide menu on open login
                }}
                className="hover:underline text-left"
              >
                Log In
              </button> */}
            </div>
          </div>
        )}
        {open && <Auth open={open} setOpen={setOpen} />}
      </div>
    </NavbarWrapper>
  );
};

export default Navbar;
