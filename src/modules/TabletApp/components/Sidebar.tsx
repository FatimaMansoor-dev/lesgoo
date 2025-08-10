import { gsap } from 'gsap';
import React, { useEffect, useRef } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { imageDomainUrl } from 'shared/constants/Assets';

import { cn } from 'src/lib/utils';

import { PlayCircle } from 'lucide-react';

import { sidebarItems as sidebarItemsBasic } from '../constants/sidebar-items';
import { sidebarItems as sidebarItemsPremium } from '../constants/sidebar-items-premium';
import { sidebarItems as sidebarItemsPremiumSoulscape } from '../constants/sidebar-items-premium-soulscape';
import { sidebarItems as sidebarItemsSoulscapeBasic } from '../constants/sidebar-items-soulscape';
import { SidebarItem, Track } from '../types';

interface SidebarProps {
  isPlayerVisible?: boolean;
  handleTrackClick?: (track: Track) => void;
  isPremium?: boolean;
  type?: 'renewme' | 'soulscape';
  activeMenuItem?: string | null;
  currentPlayingCategory?: string | null;
}

const SCROLL_POSITION_KEY = 'sidebarScrollPosition';

const Sidebar: React.FC<SidebarProps> = ({
  isPlayerVisible,
  handleTrackClick,
  isPremium = false,
  type = 'renewme',
  activeMenuItem,
  currentPlayingCategory,
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const logoTextRef = useRef<HTMLImageElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const sidebarItems: SidebarItem[] = (() => {
    if (isPremium) {
      return type === 'renewme' ? sidebarItemsPremium : sidebarItemsPremiumSoulscape;
    } else {
      return type === 'renewme' ? sidebarItemsBasic : sidebarItemsSoulscapeBasic;
    }
  })();

  const isHomePage = (): boolean => {
    const path = router.asPath.split('?')[0]; // Remove query parameters
    const slugs = path.split('/').filter(Boolean);
    return slugs.length <= 1; // Consider it homepage if there's only one or no slug
  };

  const getHomePagePath = (): string => {
    return isPremium
      ? type === 'renewme'
        ? '/tablet-app-premium'
        : '/tablet-app-premium-soulscape'
      : type === 'renewme'
      ? '/tablet-app'
      : '/tablet-app-soulscape';
  };

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const { scrollTop } = sectionRef.current;
        localStorage.setItem(SCROLL_POSITION_KEY, scrollTop.toString());
      }
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener('scroll', handleScroll);

      // Restore scroll position
      const savedScrollPosition = localStorage.getItem(SCROLL_POSITION_KEY);
      if (savedScrollPosition) {
        section.scrollTop = parseInt(savedScrollPosition, 10);
      }
    }

    return () => {
      if (section) {
        section.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  useEffect(() => {
    // Slide up animation for the logo
    gsap.fromTo(
      [logoRef.current, logoTextRef.current],
      {
        y: 20,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power2.out',
      }
    );

    // Logo spinning animation (slower)
    gsap.to(logoRef.current, {
      rotation: 360,
      duration: 30,
      repeat: -1,
      ease: 'linear',
    });
  }, []);

  useEffect(() => {
    const forcedScrollPaths = [
      '/tablet-app',
      '/tablet-app-premium',
      '/tablet-app-soulscape',
      '/tablet-app-premium-soulscape',
    ];
    const currentPath = router.asPath;

    // Check if the current path exactly matches one of the forced scroll paths
    // and doesn't contain any query parameters
    if (forcedScrollPaths.includes(currentPath) && !currentPath.includes('?')) {
      if (sectionRef.current) {
        sectionRef.current.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
        localStorage.setItem(SCROLL_POSITION_KEY, '0');
      }
    }
  }, [router.asPath]);

  const handleTrackClickInternal = (track: Track) => {
    const trackId = track.id;
    const currentPath = router.pathname;

    let redirectPath: string;
    if (type === 'renewme') {
      redirectPath = isPremium ? '/tablet-app-premium' : '/tablet-app';
    } else if (type === 'soulscape') {
      redirectPath = isPremium ? '/tablet-app-premium-soulscape' : '/tablet-app-soulscape';
    } else {
      // Fallback to default path if type is neither 'renewme' nor 'soulscape'
      redirectPath = '/tablet-app';
    }

    if (currentPath !== redirectPath) {
      router.push({
        pathname: redirectPath,
        query: { play: trackId },
      });
    } else if (handleTrackClick) {
      handleTrackClick(track);
    }
  };

  const handleItemHover = (target: HTMLElement) => {
    gsap.to(target, {
      scale: 1.02,
      duration: 0.05,
      ease: 'power2.out',
    });
  };

  const handleItemLeave = (target: HTMLElement) => {
    gsap.to(target, {
      scale: 1,
      duration: 0.05,
      ease: 'power2.out',
    });
  };

  const handleLogoInteraction = (isActive: boolean) => {
    gsap.to([logoRef.current, logoTextRef.current], {
      scale: isActive ? 1.05 : 1,
      duration: 0.2,
      ease: 'power2.out',
    });
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();

    // Scroll sidebar to top
    if (sectionRef.current) {
      sectionRef.current.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }

    // Scroll main page to top
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    // Set localStorage scroll position to 0
    localStorage.setItem(SCROLL_POSITION_KEY, '0');

    // Set activeMenuItem to 'home'
    if (typeof activeMenuItem === 'string') {
      activeMenuItem = 'home';
    }

    // Navigate to home page
    router.push(getHomePagePath());
  };

  const renderMindfulnessItem = (item: SidebarItem, index: number) => {
    const scrollToId = item.link?.split('#')[1] || '';
    const homePath = getHomePagePath();
    const isHome = isHomePage();

    const focusItem = item.title.toLowerCase();

    const handleClick = (e: React.MouseEvent) => {
      e.preventDefault();
      if (isHome) {
        // Scroll to the element
        const element = document.getElementById(scrollToId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
        // Update URL with focus parameter
        router.push(`${homePath}?focus=${focusItem}#${scrollToId}`, undefined, { shallow: true });
      } else {
        // Navigate to home page with focus parameter
        router.push(`${homePath}?focus=${focusItem}#${scrollToId}`);
      }
    };

    return (
      <a
        key={index}
        href={`${homePath}#${scrollToId}`}
        onClick={handleClick}
        className={cn(
          'flex gap-4 items-center transition-all duration-200 ease-in-out -mx-2 hover:bg-zinc-100 rounded-lg sidebar-item cursor-pointer',
          isActive(item) && 'bg-[#00C0C5] text-white hover:bg-[#48ced2]'
        )}
        onMouseEnter={e => handleItemHover(e.currentTarget)}
        onMouseLeave={e => handleItemLeave(e.currentTarget)}
      >
        <div className="flex items-center gap-4 px-2 py-1 w-[calc(100%+1rem)]">
          {item.icon}
          <p className="font-medium">{item.title}</p>
        </div>
      </a>
    );
  };

  const renderSidebarItem = (
    item: SidebarItem | Track | { title: string; link?: string; icon?: any },
    index: number
  ) => {
    if (item.title === 'Home') {
      // Render Home item and other regular items
      return (
        <div key={index} className={cn('flex flex-col gap-2 w-full px-4 sidebar-item')}>
          <Link
            href={item.link || getHomePagePath()}
            className={cn(
              'flex gap-4 items-center transition-all duration-200 ease-in-out -mx-2 hover:bg-zinc-100 rounded-lg sidebar-item',
              isActive(item) && 'bg-[#00C0C5] text-white hover:bg-[#48ced2]'
            )}
            onClick={e => {
              if (item.title === 'Home') {
                handleLogoClick(e);
              }
            }}
            onMouseEnter={e => handleItemHover(e.currentTarget)}
            onMouseLeave={e => handleItemLeave(e.currentTarget)}
          >
            <div className="flex items-center gap-4 px-2 py-1 w-[calc(100%+1rem)]">
              <div className={cn(isActive(item) && 'invert brightness-0')}>
                {item.icon && item.icon}
              </div>
              <p className="font-medium">{item.title}</p>
            </div>
          </Link>
        </div>
      );
    } else if ('items' in item) {
      // Render group of items
      return (
        <div key={index} className="flex flex-col gap-2 w-full px-4 sidebar-item">
          <hr className="w-full my-3 border-t border-zinc-300" />
          {item.title !== 'Home' && <p className="text-[#4A6086] font-medium">{item.title}</p>}
          {item.icon && item.link && (
            <Link
              href={item.link}
              className={cn(
                'flex gap-4 items-center transition-all duration-200 ease-in-out -mx-2 hover:bg-zinc-300 rounded-lg sidebar-item',
                isActive(item) && 'bg-[#00C0C5]'
              )}
              onMouseEnter={e => handleItemHover(e.currentTarget)}
              onMouseLeave={e => handleItemLeave(e.currentTarget)}
            >
              <div className="flex items-center gap-4 px-2 py-1 w-[calc(100%+1rem)]">
                {item.icon}
                <p className="font-medium">{item.title}</p>
              </div>
            </Link>
          )}
          {item.items?.map((subItem, subIndex) =>
            item.title === 'Mindfulness'
              ? renderMindfulnessItem(subItem, subIndex)
              : renderSidebarItem(subItem, subIndex)
          )}
        </div>
      );
    } else if ('id' in item && 'image' in item) {
      // Render track item (including MP3)
      const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        const trackItem = item;
        const scrollToId = trackItem.link?.split('#')[1] || trackItem.category.toLowerCase();
        const homePath = getHomePagePath();
        const isHome = isHomePage();
        const focusItem = trackItem.category.toLowerCase();

        // Call handleTrackClickInternal to play the track immediately
        handleTrackClickInternal(trackItem);

        if (isHome) {
          // Update URL with focus and play parameters
          router.push(
            `${homePath}?focus=${focusItem}&play=${trackItem.id}#${scrollToId}`,
            undefined,
            { shallow: true }
          );

          // Delay scrolling to allow layout updates
          setTimeout(() => {
            const element = document.getElementById(scrollToId);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }, 200); // Adjust this delay as needed
        } else {
          // Navigate to home page with focus and play parameters
          router.push(`${homePath}?focus=${focusItem}&play=${trackItem.id}#${scrollToId}`);
        }
      };

      return (
        <a
          key={index}
          href={`${getHomePagePath()}#${item.link?.split('#')[1] || item.category.toLowerCase()}`}
          onClick={handleClick}
          className={cn('cursor-pointer sidebar-item', isActive(item) && 'bg-[#00C0C5] rounded-lg')}
          onMouseEnter={e => handleItemHover(e.currentTarget)}
          onMouseLeave={e => handleItemLeave(e.currentTarget)}
        >
          <div className="relative overflow-hidden rounded-xl h-[100px] group">
            <Image
              className="h-full mb-2 rounded-xl object-cover brightness-75 transition-transform duration-200 ease-in-out transform group-hover:scale-125"
              src={`${imageDomainUrl}/TabletApp/Audio Banners/${item.image}`}
              alt={item.title}
              width={1000}
              height={400}
            />
            <PlayCircle className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-auto text-white" />
          </div>
          <p className="text-sm font-medium mt-2 text-zinc-600">{item.title}</p>
        </a>
      );
    } else if ('link' in item) {
      // Render regular item
      return (
        <div
          key={index}
          className={cn(item.title === 'Home' && 'flex flex-col gap-2 w-full px-4 sidebar-item')}
        >
          <Link
            href={item.link || '#'}
            className={cn(
              'flex gap-4 items-center transition-all duration-200 ease-in-out -mx-2 hover:bg-zinc-100 rounded-lg sidebar-item',
              isActive(item) && 'bg-[#00C0C5] text-white hover:bg-[#48ced2]'
            )}
            onMouseEnter={e => handleItemHover(e.currentTarget)}
            onMouseLeave={e => handleItemLeave(e.currentTarget)}
          >
            <div className="flex items-center gap-4 px-2 py-1 w-[calc(100%+1rem)]">
              <div className={cn(isActive(item) && 'invert brightness-0')}>
                {item.icon && item.icon}
              </div>
              <p className="font-medium">{item.title}</p>
            </div>
          </Link>
        </div>
      );
    }

    // If none of the above conditions are met, return null
    return null;
  };

  const isActive = (item: SidebarItem | Track): boolean => {
    const fullPath = router.asPath;
    const currentPath = fullPath.split('?')[0].split('#')[0];

    // Special case for Home
    if (item.title === 'Home') {
      return (
        (currentPath === getHomePagePath() && !activeMenuItem && !currentPlayingCategory) ||
        activeMenuItem === 'home'
      );
    }

    if (activeMenuItem && item.title && typeof activeMenuItem === 'string') {
      return activeMenuItem.toLowerCase() === item.title.toLowerCase();
    }

    if (router.query.focus && item.title && typeof router.query.focus === 'string') {
      return router.query.focus.toLowerCase() === item.title.toLowerCase();
    }

    if ('link' in item && item.link) {
      return currentPath.startsWith(item.link);
    }

    return false;
  };

  return (
    <aside
      ref={sidebarRef}
      className={cn(
        'flex-col items-center z-10 fixed top-0 left-0 w-[280px] px-4 pt-8 my-[1rem] mx-[1rem] bg-white border-2 border-zinc-200 rounded-3xl hidden md:flex transition-all duration-300 ease-in-out',
        isPlayerVisible ? 'h-[calc(100vh-11rem)]' : 'h-[calc(100vh-2rem)]'
      )}
    >
      <Link
        className="flex flex-col items-center mb-4"
        href={getHomePagePath()}
        onClick={handleLogoClick}
        onMouseEnter={() => handleLogoInteraction(true)}
        onMouseLeave={() => handleLogoInteraction(false)}
        onTouchStart={() => handleLogoInteraction(true)}
        onTouchEnd={() => handleLogoInteraction(false)}
      >
        <Image
          ref={logoRef}
          src={`${imageDomainUrl}/TabletApp/favicon-original-teal.svg`}
          alt="RenewMe Logo Teal"
          width={80}
          height={80}
        />
        <Image
          ref={logoTextRef}
          src={`${imageDomainUrl}/TabletApp/renewme-logo-text.svg`}
          alt="RenewMe Logo Blue"
          width={180}
          height={180}
        />
        <p className="text-base mb-2">Balance is better together.</p>
      </Link>
      <section
        ref={sectionRef}
        className="flex flex-col gap-4 items-start w-full overflow-y-scroll pb-8 relative"
      >
        {sidebarItems.map((item, index) => renderSidebarItem(item, index))}
      </section>
    </aside>
  );
};

export default Sidebar;
