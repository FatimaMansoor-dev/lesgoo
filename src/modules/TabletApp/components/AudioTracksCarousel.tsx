import React, { useState } from 'react';

import Image from 'next/image';

import { imageDomainUrl } from 'shared/constants/Assets';

import { Badge } from 'src/components/ui/badge';
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from 'src/components/ui/carousel';
import { cn } from 'src/lib/utils';

import { ChevronLeft, ChevronRight } from 'lucide-react';

import { Album, Track } from '../types';

interface AudioTracksCarouselProps {
  id: string;
  tracks: (Track | Album)[];
  genre: string;
  onTrackClick: (track: Track, genre: string) => void;
  onAlbumClick?: (album: Album) => void;
  setActiveMenuItem: (menuItem: string) => void;
}

const AudioTracksCarousel: React.FC<AudioTracksCarouselProps> = ({
  id,
  tracks,
  genre,
  onTrackClick,
  onAlbumClick,
  setActiveMenuItem,
}) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);

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

  const handleItemClick = (item: Track | Album) => {
    if ('tracks' in item) {
      onAlbumClick?.(item);
    } else {
      onTrackClick(item, genre);
    }
    // Always set the active menu item to the genre
    setActiveMenuItem(genre.toLowerCase());
  };

  return (
    <div className="pt-4" id={id}>
      <div className="relative w-full">
        <h3 className="text-2xl font-bold mb-2">{genre}</h3>
        <div className="relative">
          <Carousel
            opts={{
              align: 'start',
              axis: 'x',
              loop: true,
            }}
            className="mt-2 overflow-hidden w-full"
            setApi={setCarouselApi}
          >
            <CarouselContent className="-ml-4">
              {tracks.map((item, index) => (
                <CarouselItem key={index} className="pl-4 lg:basis-1/3">
                  <div
                    className="flex flex-col cursor-pointer"
                    onClick={() => handleItemClick(item)}
                  >
                    <div className="relative">
                      <Image
                        className={cn('h-fit object-cover rounded-2xl mb-4', item.className)}
                        src={`${imageDomainUrl}/TabletApp/Audio Banners/${item.image}`}
                        alt={item.title}
                        width={1000}
                        height={400}
                      />
                      {'tracks' in item && (
                        <Badge className="absolute top-0 right-0 m-2 text-xs font-medium bg-black/20 text-white rounded-full px-2 py-1">
                          {item.tracks.length} Tracks
                        </Badge>
                      )}
                    </div>
                    <h4 className="text-base font-semibold leading-none mb-1 break-all flex gap-2 items-center">
                      {item.title}
                      {'tracks' in item && (
                        <Badge className="rounded-md bg-[#3AA2A4] px-1">Album</Badge>
                      )}
                    </h4>
                    <p className="text-sm font-medium text-zinc-600 leading-none break-all">
                      {item.category}
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
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
    </div>
  );
};

export default AudioTracksCarousel;
