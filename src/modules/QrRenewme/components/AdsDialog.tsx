import React, { useEffect, useRef, useState } from 'react';

import Image from 'next/image';

import { imageDomainUrl } from 'shared/constants/Assets';

import { Button } from 'src/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from 'src/components/ui/dialog';
import { cn } from 'src/lib/utils';

import { X } from 'lucide-react';

interface AdsDialogProps {
  canShow: boolean;
}

interface AdContent {
  id: string;
  title?: string;
  description?: string[];
  imageUrl?: string;
  logoUrl?: string;
  logoUrlWidth?: number;
  logoUrlHeight?: number;
  videoUrl?: string;
  ctaLink?: string;
  ctaText?: string;
  ctaColor?: string;
  fitHeight?: boolean;
}

const adsContent: AdContent[] = [
  {
    id: 'bkfc',
    title: 'Bare Knuckle Fighting Championship',
    description: [
      'Join the excitement and intensity of Bare Knuckle Fighting Championship events. Experience the thrill of the fight with BKFC, the premier bare-knuckle fighting organization in the world.',
      "Get tickets and watch live events featuring the toughest fighters in the sport. Don't miss out on the action and entertainment of BKFC.",
    ],
    imageUrl: `${imageDomainUrl}/YourBrandSample/Ads/bkfc-banner.jpg`,
    logoUrl: `${imageDomainUrl}/YourBrandSample/Ads/bkfc-logo.png`,
    logoUrlWidth: 80,
    logoUrlHeight: 80,
    ctaLink: 'https://www.bkfc.com/events',
    ctaText: 'Get Tickets',
    ctaColor: '#000000',
  },
  {
    id: 'renewme',
    videoUrl: 'https://utfs.io/f/f3c7a541-c89f-4c7c-a3e5-4eeddd2d3f89-7ea5jg.mov',
    fitHeight: true,
  },
];

const AdsDialog: React.FC<AdsDialogProps> = ({ canShow }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [showTopGradient, setShowTopGradient] = useState(false);
  const [showBottomGradient, setShowBottomGradient] = useState(true);
  const [currentAd, setCurrentAd] = useState<AdContent | null>(null);
  const [parallaxOffset, setParallaxOffset] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const bannerRef = useRef<HTMLDivElement>(null);

  const initialDelay = 20000; // 20 seconds
  const extendedDelay = 240000; // 4 minutes

  useEffect(() => {
    setIsMounted(true);

    const adAcknowledged = localStorage.getItem('adAcknowledged');
    const lastShownAdId = localStorage.getItem('lastShownAdId');
    const delay = adAcknowledged ? extendedDelay : initialDelay;

    const timer = setTimeout(() => {
      if (canShow) {
        const availableAds = adsContent.filter(ad => ad.id !== lastShownAdId);
        const selectedAd = availableAds[Math.floor(Math.random() * availableAds.length)];
        setCurrentAd(selectedAd);
        setIsOpen(true);
        localStorage.setItem('lastShownAdId', selectedAd.id);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [canShow]);

  const handleScroll = () => {
    if (contentRef.current && bannerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = contentRef.current;
      setShowTopGradient(scrollTop > 0);
      setShowBottomGradient(scrollTop + clientHeight < scrollHeight - 1);

      const bannerHeight = bannerRef.current.offsetHeight;
      const scrollPercentage = Math.min(scrollTop / bannerHeight, 1);
      setParallaxOffset(scrollPercentage * 50);
    }
  };

  useEffect(() => {
    const currentRef = contentRef.current;
    if (currentRef) {
      currentRef.addEventListener('scroll', handleScroll);
      handleScroll();
    }
    return () => {
      if (currentRef) {
        currentRef.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem('adAcknowledged', 'true');
  };

  const renderVideo = () => {
    if (!currentAd?.videoUrl) return null;

    const isYouTube = currentAd.videoUrl.includes('youtube');
    const videoClassName = cn(
      'w-full h-full object-cover object-center',
      isVideoOnly ? '' : 'rounded-2xl bg-white'
    );

    return isYouTube ? (
      <iframe
        className={videoClassName}
        src={currentAd.videoUrl}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    ) : (
      <video className={videoClassName} playsInline autoPlay loop>
        <source src={currentAd.videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    );
  };

  if (!isMounted || !currentAd) {
    return null;
  }

  const isVideoOnly = currentAd.videoUrl && !currentAd.title && !currentAd.description;

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent
        hideCloseButton
        className={cn(
          "p-0 overflow-hidden rounded-2xl md:rounded-3xl max-w-[300px] bg-white font-['Gilroy'] border-[2px] flex flex-col",
          isVideoOnly ? '' : 'h-[60vh]'
        )}
      >
        <div className="aspect-square p-2 absolute top-4 right-4 z-10 bg-black/10 rounded-full">
          <X className="cursor-pointer text-white" size={16} onClick={handleClose} />
        </div>
        {isVideoOnly ? (
          <div className="w-full h-full">{renderVideo()}</div>
        ) : (
          <div ref={contentRef} className="overflow-y-auto h-full" onScroll={handleScroll}>
            {currentAd.imageUrl && (
              <div ref={bannerRef} className="h-[200px] relative overflow-hidden">
                <div
                  className="absolute inset-0"
                  style={{
                    transform: `translateY(${parallaxOffset}px)`,
                    transition: 'transform 0.1s ease-out',
                  }}
                >
                  <Image
                    className="object-cover w-full h-[250px] object-center"
                    src={currentAd.imageUrl}
                    width={400}
                    height={400}
                    alt={currentAd.title || ''}
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/40 to-transparent pointer-events-none transition-all duration-300 ease-in-out z-10" />
              </div>
            )}
            <section className="p-6">
              {currentAd.logoUrl && (
                <Image
                  className="object-center object-cover mb-6"
                  src={currentAd.logoUrl}
                  width={currentAd.logoUrlWidth || 100}
                  height={currentAd.logoUrlHeight || 100}
                  alt={`${currentAd.title} Logo`}
                />
              )}
              {currentAd.title && (
                <DialogHeader className="text-center">
                  <DialogTitle className="text-3xl max-w-xs font-bold text-left">
                    {currentAd.title}
                  </DialogTitle>
                </DialogHeader>
              )}
              <div className="text-left flex flex-col gap-2">
                {currentAd.description && (
                  <div className="my-2 flex flex-col gap-2">
                    {currentAd.description.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                )}
                {currentAd.videoUrl && <div className="mb-4">{renderVideo()}</div>}
              </div>
              {currentAd.ctaLink && currentAd.ctaText && (
                <div className="flex gap-2 mt-2">
                  <Button
                    onClick={handleClose}
                    variant="secondary"
                    className="bg-zinc-200 px-4 py-2 rounded-md"
                  >
                    Close
                  </Button>
                  <a
                    href={currentAd.ctaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button
                      className="w-full text-white"
                      style={{ backgroundColor: currentAd.ctaColor }}
                      onClick={handleClose}
                    >
                      {currentAd.ctaText}
                    </Button>
                  </a>
                </div>
              )}
            </section>
          </div>
        )}
        {!isVideoOnly && (
          <>
            <div
              className={cn(
                'absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white to-transparent pointer-events-none opacity-0 transition-all duration-300 ease-in-out',
                showTopGradient && 'opacity-100',
                currentAd.fitHeight && 'opacity-0'
              )}
            />
            <div
              className={cn(
                'absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none transition-all duration-300 ease-in-out',
                showBottomGradient ? 'opacity-100' : 'opacity-0',
                currentAd.fitHeight && 'opacity-0'
              )}
            />
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default AdsDialog;
