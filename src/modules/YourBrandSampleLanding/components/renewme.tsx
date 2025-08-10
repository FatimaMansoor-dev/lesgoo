import Image from 'next/image';
import Link from 'next/link';

import { imageDomainUrl } from 'shared/constants/Assets';

import { Badge } from 'src/components/ui/badge';
import { Button } from 'src/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from 'src/components/ui/dialog';
import { useToast } from 'src/components/ui/use-toast';

import RenewMeAdsDialog from './renewme-ads-dialog';

const renewmeCarouselContent = [
  {
    title: 'Path to Prosperity',
    description: 'Balance',
    duration: '3:00',
    type: 'RenewMe',
    thumbnail: `${imageDomainUrl}/Code/listen-to-renewme/image/path-to-prosperity.jpg`,
    video: `https://utfs.io/f/3e09e902-2f07-4acd-bf8a-dc64b686ca5e-2xgev5.mp4`,
  },
  {
    title: 'Keys to Optimism',
    description: 'Happiness',
    duration: '1:30',
    type: 'RenewMe',
    thumbnail: `${imageDomainUrl}/Code/listen-to-renewme/image/keys-to-optimism.jpg`,
    video: `https://utfs.io/f/b110e785-2309-4cf1-813f-ac2355ddee68-tr5znp.mp4`,
  },
  {
    title: 'Motivating Habits',
    description: 'Motivation',
    duration: '1:30',
    type: 'RenewMe',
    thumbnail: `${imageDomainUrl}/Code/listen-to-renewme/image/motivating-habits.jpg`,
    video: `https://utfs.io/f/788098a4-1d82-4939-be03-cef934430142-whuutg.mp4`,
  },
  {
    title: 'Jump Start Your Day',
    description: 'Confidence',
    duration: '1:30',
    type: 'RenewMe',
    thumbnail: `${imageDomainUrl}/Code/listen-to-renewme/image/jump-start-your-day.jpg`,
    video: `https://utfs.io/f/e047735d-d82d-488f-9d21-b6236bcb9fb7-co5wgc.mp4`,
  },
];

const soulscapeCarouselContent = {
  title: 'Melt Away Stress',
  description:
    'A soothing experience for the mindful traveler to stay relaxed and balanced on their wanderlust journeys.',
  duration: '3:00',
  type: 'Soulscape',
  thumbnail: `${imageDomainUrl}/Code/listen-to-renewme/image/melt-away-stress.png`,
  video: `https://utfs.io/f/9678637b-9523-4362-974d-37f4cdf0e4a4-vtquuy.mp4`,
};

const QRRenewMePage = () => {
  const { toast } = useToast();

  return (
    <>
      <RenewMeAdsDialog />

      {/* Banner */}
      <Image
        className="absolute top-0 -z-10 block h-[235px] w-screen rounded-b-3xl object-cover object-center md:hidden"
        src={`${imageDomainUrl}/Code/renewme-banner.jpg`}
        alt="RenewMe Banner"
        width={2000}
        height={1200}
      />

      {/* Hero RenewMe */}
      <section className="flex w-full flex-col items-center gap-5 px-[40px] pb-[32px] pt-[158px] md:gap-10 md:px-[60px] md:pb-[44px] md:pt-[140px] lg:flex-row lg:justify-between lg:px-[80px] xl:px-[140px]">
        <section className="flex flex-col items-center justify-center gap-3 md:flex-row md:gap-10">
          <div className="w-[132px] rounded-[40px] bg-white p-5 outline outline-1 outline-zinc-200 md:w-[220px] md:rounded-[70px] md:p-8">
            <Image
              className="aspect-square"
              src={`${imageDomainUrl}/Code/renewme-icon.png`}
              alt="RenewMe Hero Logo"
              width={2000}
              height={2000}
              priority
            />
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h1 className="mt-2 text-[40px] font-bold leading-[60px] md:text-[62px]">
              Renew<span className="text-zinc-400">Me</span>
            </h1>
            <h2 className="mb-0 mt-0 text-[18px] md:mb-4 md:mt-2 md:text-[28px]">
              Live Better. Be Balanced.
            </h2>
            <Button
              className="hidden rounded-full px-[24px] py-[24px] pt-[26px] text-lg md:flex md:items-center md:justify-center"
              variant="outline"
            >
              <Link href="/">Join the Movement</Link>
            </Button>
          </div>
        </section>

        <section className="mb-4 mt-3 flex h-full w-full flex-col items-center md:w-[280px]">
          <Badge className="text-md mb-10 bg-orange-400/10 px-4 pt-1 font-medium text-orange-400 outline outline-1 outline-orange-400 hover:bg-orange-400/10 md:mb-8">
            Coming Soon!
          </Badge>
          <section className="-mb-1 flex justify-between gap-4 xs:gap-7 md:w-full md:gap-0">
            <div className="flex w-[116px] flex-col items-center">
              <h1 className="mb-1 text-lg font-medium">Use Code</h1>
              <Badge className="flex w-full items-center justify-center pt-1 text-lg font-medium">
                PEACE369
              </Badge>
            </div>
            <div className="h-20 w-[1px] bg-zinc-200"></div>
            <div
              className="flex w-[116px] cursor-pointer flex-col items-center"
              onClick={() => {
                toast({
                  className: 'bg-white',
                  title: 'RenewMe is coming soon!',
                  description: 'Use code PEACE369 to unlock RenewMe. Stay tuned for updates.',
                });
              }}
            >
              <h1 className="mb-1 text-lg font-medium">Download</h1>
              <Image
                src={`${imageDomainUrl}/Code/app-store-button.png`}
                alt="App Store"
                width={200}
                height={60}
              />
            </div>
          </section>
          <section
            className="mt-6 flex cursor-pointer items-center justify-center gap-1 text-[19px] font-medium"
            onClick={() => {
              navigator.clipboard.writeText(window.location.href);

              toast({
                className: 'bg-white',
                title: 'Link copied to clipboard!',
                description: 'Share RenewMe with friends and family. URL copied to clipboard.',
              });
            }}
          >
            <Image
              className="h-auto w-5"
              src={`${imageDomainUrl}/Code/share.svg`}
              alt="Share Icon"
              width={500}
              height={500}
            />
            <p className="text-base md:text-lg">Share with friends</p>
          </section>
        </section>
        <div className="block h-[1px] w-full bg-zinc-200 md:hidden"></div>
      </section>

      {/* Carousel 1 */}
      <section className="flex w-screen flex-col items-center px-0 pb-5 md:pb-[42px] lg:px-[80px] xl:px-[140px]">
        <Image
          className="mb-2 h-auto w-7 md:mb-4 md:w-10"
          src={`${imageDomainUrl}/Code/play-icon.svg`}
          alt="Play Icon"
          width={500}
          height={500}
        />
        <h1 className="mb-[8px] text-[20px] font-bold md:mb-[38px] md:text-[50px]">
          Listen to{' '}
          <span className="text-orange-400">
            Renew<span className="text-orange-400/60">Me</span>
          </span>
        </h1>
        <section className="flex w-full gap-4 overflow-x-auto md:gap-5 md:px-0 lg:overflow-x-visible">
          {renewmeCarouselContent.map((item, index) => (
            <div
              key={index}
              className={`basis-full ${index === 0 ? 'pl-4 md:pl-[60px] lg:pl-0' : ''} ${
                index === renewmeCarouselContent.length - 1 ? 'pr-[40px] md:pr-[60px] lg:pr-0' : ''
              }`}
            >
              <Dialog>
                <DialogTrigger className="flex w-full flex-col items-start">
                  <div className="relative mb-5 h-[145px] w-[185px] rounded-2xl md:mb-6 md:h-[235px] md:w-full md:rounded-[40px]">
                    <Image
                      className="h-full w-full rounded-2xl object-cover shadow-md md:rounded-[40px]"
                      src={item.thumbnail}
                      alt={item.title}
                      quality={100}
                      fill
                    />
                  </div>

                  <h1 className="mb-0 text-[18px] font-bold leading-[22px] md:mb-1 md:text-[26px]">
                    {item.title}
                  </h1>
                  <p className="mb-2 text-base font-medium md:mb-3 md:text-lg">
                    {item.description}
                  </p>
                  <p className="text-base md:text-lg">{item.duration}</p>
                </DialogTrigger>
                <DialogContent className="m-0 border-transparent p-0">
                  <video
                    className="w-full rounded-2xl shadow-md md:rounded-xl"
                    controls
                    playsInline
                    autoPlay
                    src={item.video}
                  />
                </DialogContent>
              </Dialog>
            </div>
          ))}
        </section>
      </section>

      {/* Carousel 2 */}
      <section className="flex w-screen flex-col items-center px-4 pb-[24px] md:px-[60px] md:pb-[42px] lg:px-[40px] xl:px-[140px]">
        <Image
          className="mb-2 h-auto w-7 md:mb-4 md:w-10"
          src={`${imageDomainUrl}/Code/play-icon.svg`}
          alt="Play Icon"
          width={500}
          height={500}
        />
        <h1 className="mb-[8px] text-[20px] font-bold md:mb-[38px] md:text-[50px]">
          Listen to <span className="text-[#00C6C9]">Soulscape</span>
        </h1>
        <section className="flex w-full items-center justify-center gap-5">
          <div className="flex w-[514px] flex-col items-center">
            <Dialog>
              <DialogTrigger>
                <div className="relative mb-5 h-[135px] w-full rounded-2xl md:mb-6 md:h-[230px] md:rounded-[40px]">
                  <Image
                    className="h-full w-full rounded-2xl object-cover shadow-md md:rounded-[40px]"
                    src={soulscapeCarouselContent.thumbnail}
                    alt={soulscapeCarouselContent.title}
                    quality={100}
                    fill
                  />
                </div>
                <h1 className="mb-0 text-center text-[18px] font-bold leading-[25px] md:mb-1 md:text-[26px]">
                  {soulscapeCarouselContent.title}
                </h1>
                <div className="flex w-full items-center justify-center">
                  <p className="mb-3 max-w-md text-center text-base font-medium leading-5 md:text-lg md:leading-6">
                    {soulscapeCarouselContent.description}
                  </p>
                </div>
                <p className="text-center text-base md:text-lg">
                  {soulscapeCarouselContent.duration}
                </p>
              </DialogTrigger>
              <DialogContent className="m-0 border-transparent p-0">
                <video
                  className="w-full rounded-2xl shadow-md md:rounded-xl"
                  controls
                  playsInline
                  autoPlay
                  src={soulscapeCarouselContent.video}
                />
              </DialogContent>
            </Dialog>
          </div>
        </section>
      </section>

      {/* Footer */}
      <footer className="relative flex w-screen flex-col justify-between rounded-t-3xl bg-[#004451] px-[40px] py-[46px] md:flex-row md:bg-transparent md:px-[60px] md:py-[105px] lg:px-[80px] xl:px-[140px]">
        <Image
          className="-z-10 hidden rounded-t-3xl object-cover md:block"
          src={`${imageDomainUrl}/Code/renewme-mountain-vector.png`}
          alt="RenewMe Footer"
          quality={100}
          fill
          priority
        />
        <section className="hidden md:block">
          <h1 className="mb-0.5 w-full text-[24px] font-semibold leading-[60px] text-white md:w-[500px] md:text-[55px]">
            Life balance is better together.
          </h1>
          <p className="text-[26px] font-medium text-white">#mentalhealthawareness</p>
        </section>

        <section className="flex flex-col items-center">
          <h1 className="mb-[24px] w-full text-center text-[24px] font-semibold leading-6 text-white md:mb-[36px] md:text-left md:text-[46.5px] md:leading-[50px]">
            Enjoying RenewMe?
          </h1>
          <Button
            className="mb-12 flex w-fit items-center justify-center rounded-full bg-transparent py-[22px] text-lg text-white outline outline-1 outline-white hover:bg-white/10 hover:text-white md:mb-7 md:w-full md:px-[60px] md:py-[28px]"
            variant="outline"
          >
            <a
              className="mt-1"
              href="https://form.typeform.com/to/lcqRUOKZ"
              target="_blank"
              rel="noopener noreferrer"
            >
              Share your thoughts
            </a>
          </Button>
          <Link className="text-sm text-white md:text-lg" href="/">
            www.myrenewme.com
          </Link>
        </section>
      </footer>

      {/* --------- */}

      {/* Guide: Mobile RenewMe */}
      {/* <Image
        className="opacity-20 absolute top-0 z-10 md:hidden block"
        src={`${imageDomainUrl}/Code/renewme-guide-mobile.png`}
        alt="RenewMe Guide Mobile"
        width={2000}
        height={1200}
      /> */}

      {/* Guide: Desktop RenewMe */}
      {/* <Image
          className="hidden absolute top-0 z-10 md:opacity-20 md:block"
          src={`${imageDomainUrl}/Code/renewme-guide.png`}
          alt="RenewMe Guide"
          width={2000}
          height={1200}
        /> */}
    </>
  );
};

export default QRRenewMePage;
