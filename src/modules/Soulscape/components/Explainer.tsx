import React from 'react';

import Image from 'next/image';

import { Dialog, DialogContent, DialogTrigger } from 'src/components/ui/dialog';

import { SOULSCAPE_ICONS, SOULSCAPE_IMAGES, SOULSCAPE_VIDEOS } from '../constants';

const Explainer: React.FC = () => {
  return (
    <section className="flex w-full justify-center">
      <div className="mx-auto flex h-full max-w-[340px] flex-col items-center gap-4 pt-[40px] md:max-w-[550px] md:pt-[60px] lg:max-w-[860px] lg:pt-[80px] xl:max-w-[900px] xl:gap-16">
        <div className="flex flex-col items-center justify-center gap-4 md:gap-8">
          <Image
            className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 xl:h-14 xl:w-14"
            src={SOULSCAPE_ICONS['play-icon'].url}
            alt={SOULSCAPE_ICONS['play-icon'].alt}
            width={SOULSCAPE_ICONS['play-icon'].width}
            height={SOULSCAPE_ICONS['play-icon'].height}
          />
          <h1 className="text-black-1 font-['Gilroy'] text-3xl font-[600] md:text-4xl lg:text-5xl xl:text-6xl">
            Soulscape Explainer
          </h1>
        </div>
        <Dialog>
          <DialogTrigger>
            <Image
              className="cursor-pointer transition-all duration-150 ease-in-out hover:brightness-90 shadow-2xl rounded-[30px] md:rounded-[65px]"
              src={SOULSCAPE_IMAGES['s0-soulscape-explainer-thumbnail'].url}
              alt={SOULSCAPE_IMAGES['s0-soulscape-explainer-thumbnail'].alt}
              width={SOULSCAPE_IMAGES['s0-soulscape-explainer-thumbnail'].width}
              height={SOULSCAPE_IMAGES['s0-soulscape-explainer-thumbnail'].height}
              priority
            />
          </DialogTrigger>
          <DialogContent className="max-w-4xl border-transparent p-0">
            {/* Create a video source */}
            <video
              className="aspect-video w-full h-full rounded-lg"
              controls
              autoPlay
              loop
              playsInline
            >
              <source
                src={SOULSCAPE_VIDEOS['soulscape-explainer'].url}
                type={SOULSCAPE_VIDEOS['soulscape-explainer'].type}
              />
              Your browser does not support the video tag.
            </video>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Explainer;
