import React, { useEffect, useRef, useState } from 'react';

import Image from 'next/image';

import { imageDomainUrl } from 'shared/constants/Assets';

import { Button } from 'src/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from 'src/components/ui/dialog';
import { cn } from 'src/lib/utils';

import { X } from 'lucide-react';

interface FollowUpAdDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FollowUpAdContent {
  id: string;
  title: string;
  description: string[];
  imageUrl: string;
  logoUrl: string;
  logoUrlWidth: number;
  logoUrlHeight: number;
  videoUrl: string;
  ctaLink: string;
  ctaText: string;
  ctaColor: string;
}

const followUpAdContent: FollowUpAdContent = {
  id: 'karma-water',
  title: 'Stay Hydrated with KARMA Water!',
  description: [
    'Try the KARMA Water Hydration Kit - your ultimate hydration solution. Enjoy the convenience and savings of Karma Water delivered directly to your home.',
    'Customize your kit with Probiotic, Energy, or CBD options. Mix and match your favorites with flexible scheduling for refills every two weeks or monthly. Get email alerts before your order ships to confirm or adjust, ensuring no surprises.',
  ],
  imageUrl: `${imageDomainUrl}/YourBrandSample/Ads/karma-hydration.webp`,
  logoUrl: `${imageDomainUrl}/YourBrandSample/Ads/karma-water-logo.png`,
  logoUrlWidth: 100,
  logoUrlHeight: 100,
  videoUrl: 'https://www.youtube.com/embed/ZX_m3aD0pUo?si=kWwpRr6HVbGNd2ZS',
  ctaLink: 'https://drinkkarma.com/pages/hydration-kit',
  ctaText: 'Learn More',
  ctaColor: '#38AE6A',
};

const FollowUpAdDialog: React.FC<FollowUpAdDialogProps> = ({ isOpen, onClose }) => {
  const [showTopGradient, setShowTopGradient] = useState(false);
  const [showBottomGradient, setShowBottomGradient] = useState(true);
  const [parallaxOffset, setParallaxOffset] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const bannerRef = useRef<HTMLDivElement>(null);

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

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        hideCloseButton
        className={cn(
          "p-0 overflow-hidden rounded-3xl max-w-[300px] h-[60vh] bg-white font-['Gilroy'] border-2 flex flex-col"
        )}
      >
        <div ref={contentRef} className="overflow-y-auto h-full relative" onScroll={handleScroll}>
          <div className="aspect-square p-2 absolute top-4 right-4 z-10 bg-black/10 rounded-full">
            <X className="cursor-pointer text-white" size={16} onClick={onClose} />
          </div>
          <div ref={bannerRef} className="h-[160px] relative overflow-hidden">
            <div
              className="absolute inset-0"
              style={{
                transform: `translateY(${parallaxOffset}px)`,
                transition: 'transform 0.1s ease-out',
              }}
            >
              <Image
                className="object-cover w-full h-[250px] object-center"
                src={followUpAdContent.imageUrl}
                width={400}
                height={400}
                alt={followUpAdContent.title}
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
          </div>
          <section className="p-6">
            <Image
              className="object-center object-cover mb-6"
              src={followUpAdContent.logoUrl}
              width={followUpAdContent.logoUrlWidth}
              height={followUpAdContent.logoUrlHeight}
              alt={`${followUpAdContent.title} Logo`}
            />
            <DialogHeader className="text-center">
              <DialogTitle className="text-3xl max-w-xs font-bold text-left">
                {followUpAdContent.title}
              </DialogTitle>
            </DialogHeader>
            <div className="text-left flex flex-col gap-2">
              <div className="my-2 flex flex-col gap-2">
                {followUpAdContent.description.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
            <div className="flex gap-2 mt-2">
              <Button
                onClick={onClose}
                variant="secondary"
                className="bg-zinc-200 px-4 py-2 rounded-md hover:bg-zinc-300 transition-colors"
              >
                Close
              </Button>
              <a
                href={followUpAdContent.ctaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button
                  className="w-full text-white hover:opacity-90 transition-colors"
                  style={{ backgroundColor: followUpAdContent.ctaColor }}
                  onClick={onClose}
                >
                  {followUpAdContent.ctaText}
                </Button>
              </a>
            </div>
          </section>
          <div
            className={cn(
              'absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white to-transparent pointer-events-none opacity-0 transition-all duration-300 ease-in-out',
              showTopGradient && 'opacity-100'
            )}
          />
          <div
            className={cn(
              'absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none transition-all duration-300 ease-in-out',
              showBottomGradient ? 'opacity-100' : 'opacity-0'
            )}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FollowUpAdDialog;
