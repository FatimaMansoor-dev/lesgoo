import React, { useEffect, useState } from 'react';

import Image from 'next/image';
import { useRouter } from 'next/router';

import { imageDomainUrl } from 'shared/constants/Assets';

import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from 'src/components/ui/carousel';
import { cn } from 'src/lib/utils';

import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Track {
  genre: string;
  title: string;
  category: string;
  image: string;
  className: string;
  audio?: string;
  video?: string;
}

interface AudioTracksCarouselRow1Props {
  tracks: Track[];
  onTrackClick: (track: Track) => void;
  setActiveMenuItem: (menuItem: string) => void;
}

const AudioTracksCarouselRow1: React.FC<AudioTracksCarouselRow1Props> = ({
  tracks,
  onTrackClick,
  setActiveMenuItem,
}) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const router = useRouter();

  const handleTrackClick = (track: Track) => {
    onTrackClick(track);
    // Use the track's genre to set the active menu item
    setActiveMenuItem(track.genre.toLowerCase());
  };

  const handlePrev = () => {
    if (carouselApi) {
      carouselApi.scrollPrev();
    }
  };

  const handleNext = () => {
    if (carouselApi) {
      carouselApi.scrollNext();
    }
  };

  useEffect(() => {
    if (carouselApi) {
      const { focus } = router.query;
      if (focus && typeof focus === 'string') {
        const index = tracks.findIndex(track => track.genre.toLowerCase() === focus.toLowerCase());

        if (index !== -1) {
          carouselApi.scrollTo(index);
        }
      }
    }
  }, [carouselApi, router.query, tracks]);

  return (
    <div id="audio-tracks-row-1" className="relative mt-2 w-full">
      <div className="relative">
        <Carousel
          opts={{
            align: 'start',
            axis: 'x',
            loop: true,
          }}
          className="mt-4 overflow-hidden w-full"
          setApi={setCarouselApi}
        >
          <CarouselContent className="-ml-4">
            {tracks.map((track, index) => (
              <CarouselItem key={index} className="pl-4 lg:basis-1/3">
                <div
                  className="flex flex-col cursor-pointer"
                  onClick={() => handleTrackClick(track)}
                >
                  <p className="text-2xl font-bold mb-2 break-all">{track.genre}</p>
                  <Image
                    className={cn('h-fit object-cover rounded-2xl mb-4', track.className)}
                    src={`${imageDomainUrl}/TabletApp/Audio Banners/${track.image}`}
                    alt={track.title}
                    width={1000}
                    height={400}
                  />
                  <h4 className="text-base font-semibold leading-none mb-1 break-all">
                    {track.title}
                  </h4>
                  <p className="text-sm font-medium text-zinc-600 leading-none break-all">
                    {track.category}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        {/* <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -left-10 top-0 bottom-0 w-14 bg-gradient-to-r from-white to-transparent" />
          <div className="absolute -right-10 top-0 bottom-0 w-14 bg-gradient-to-l from-white to-transparent" />
        </div> */}
      </div>
      <button
        className="absolute top-1/2 -left-2 transform -translate-y-1/2 bg-white rounded-full p-2 outline-2 outline-zinc-200 outline drop-shadow-2xl"
        onClick={handlePrev}
      >
        <ChevronLeft className="mr-0.5" />
      </button>
      <button
        className="absolute top-1/2 -right-2 transform -translate-y-1/2 bg-white rounded-full p-2 outline-2 outline-zinc-200 outline drop-shadow-2xl"
        onClick={handleNext}
      >
        <ChevronRight className="ml-0.5" />
      </button>
    </div>
  );
};

export default AudioTracksCarouselRow1;
