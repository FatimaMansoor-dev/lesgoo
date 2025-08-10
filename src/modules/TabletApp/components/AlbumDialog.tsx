import React from 'react';

import Image from 'next/image';

import { imageDomainUrl } from 'shared/constants/Assets';

import { Badge } from 'src/components/ui/badge';
import { Button } from 'src/components/ui/button';
import { Dialog, DialogContent } from 'src/components/ui/dialog';
import { cn } from 'src/lib/utils';

import { Play, XCircle } from 'lucide-react';

import { Album, Track } from '../types';

interface AlbumDialogProps {
  album: Album | null;
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  onTrackClick: (track: Track) => void;
}

const AlbumDialog: React.FC<AlbumDialogProps> = ({ album, isOpen, onOpenChange, onTrackClick }) => {
  const handleTrackClick = (track: Track) => {
    onTrackClick(track);
    onOpenChange(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent
        hideCloseButton
        className="sm:max-w-[560px] max-h-[78vh] !rounded-3xl flex flex-col bg-white font-['Gilroy'] text-zinc-700 p-0 overflow-y-scroll"
      >
        <XCircle
          className="absolute top-0 m-7 right-0 cursor-pointer text-zinc-500 z-20"
          onClick={() => onOpenChange(false)}
        />
        <section className="w-full px-8 mb-4 mt-16">
          <Image
            src={`${imageDomainUrl}/TabletApp/Audio Banners/${album?.image}`}
            alt="Album Banner"
            className="w-full h-48 object-cover mb-4 rounded-xl"
            width={1000}
            height={1000}
          />
          <div className="text-3xl flex gap-3 items-start justify-between leading-none font-bold">
            <h1 className="text-left mb-1">{album?.title}</h1>
            <Badge className="rounded-md bg-[#3AA2A4]">Album</Badge>
          </div>
          <div className="text-lg font-medium text-zinc-500 leading-none text-left">
            {album?.category}
          </div>
        </section>
        <div className="pb-4">
          {album?.tracks.map((track, index) => (
            <div
              key={index}
              className={cn(
                'flex gap-2 items-center w-full justify-between cursor-pointer hover:bg-zinc-100 pl-8 pr-4',
                !track.audio && 'pointer-events-none opacity-50'
              )}
            >
              <section className="flex gap-3 items-center w-full">
                <span className="font-medium">{index + 1}</span>
                <div className="rounded-md p-2" onClick={() => handleTrackClick(track)}>
                  <div className="flex gap-2 items-center">
                    <p className="font-semibold text-left">{track.title}</p>
                    {!track.audio && (
                      <Badge className="rounded-md text-[#3AA2A4] bg-[#EAF8F8] px-2">
                        Coming Soon
                      </Badge>
                    )}
                  </div>
                  {/* <p className="font-medium">{album.category}</p> */}
                </div>
              </section>
              <Button variant="ghost" onClick={() => handleTrackClick(track)}>
                <Play size={18} />
              </Button>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AlbumDialog;
