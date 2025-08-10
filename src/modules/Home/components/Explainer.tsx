import React from 'react';

import Image from 'next/image';

import { Dialog, DialogContent, DialogTrigger } from 'src/components/ui/dialog';

import { HOME_ICONS, HOME_IMAGES, HOME_VIDEOS } from '../constants';

const Explainer: React.FC = () => {
  return (
    <section className="flex w-full justify-center">
      <div className="mx-auto flex h-full max-w-[340px] flex-col items-center gap-4 pt-[40px] md:max-w-[550px] md:pt-[60px] lg:max-w-[860px] lg:pt-[80px] xl:max-w-[900px] xl:gap-16">
        <div className="flex flex-col items-center justify-center gap-4 md:gap-8">
          <Image
            className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 xl:h-14 xl:w-14"
            src={HOME_ICONS['play-icon'].url}
            alt={HOME_ICONS['play-icon'].alt}
            width={HOME_ICONS['play-icon'].width}
            height={HOME_ICONS['play-icon'].height}
          />
          <h1 className="text-black-1 font-['Gilroy'] text-3xl font-[600] md:text-4xl lg:text-5xl xl:text-6xl">
            Renew<span className="text-black-1/80">Me</span> Explainer
          </h1>
        </div>
        <Dialog>
          <DialogTrigger>
            <Image
              className="cursor-pointer transition-all duration-150 ease-in-out hover:brightness-90 shadow-2xl rounded-[30px] md:rounded-[65px]"
              src={HOME_IMAGES['s0-renewme-explainer-thumbnail'].url}
              alt="RenewMe Explainer Thumbnail"
              width={2000}
              height={1125}
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
                src={HOME_VIDEOS['renewme-explainer'].url}
                type={HOME_VIDEOS['renewme-explainer'].type}
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
