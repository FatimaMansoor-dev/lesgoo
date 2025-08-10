import Image from 'next/image';
import Link from 'next/link';

import { imageDomainUrl } from 'shared/constants/Assets';

import { Badge } from 'src/components/ui/badge';
import { Button } from 'src/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from 'src/components/ui/dialog';
import { useToast } from 'src/components/ui/use-toast';

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

const QRSoulscapePage = () => {
  const { toast } = useToast();

  return (
    <>
      {/* Hero Soulscape */}
      <section className="w-full items-center px-[40px] md:px-[60px] lg:px-[80px] xl:px-[140px] pt-[35px] md:pt-[140px] pb-8 md:pb-[44px] gap-5 md:gap-10 flex flex-col lg:flex-row lg:justify-between">
        <section className="flex flex-col justify-center md:flex-row items-center gap-3 md:gap-10">
          <div className="w-[132px] md:w-[220px] p-5 md:p-8 outline outline-1 outline-zinc-200 rounded-[40px] md:rounded-[70px] bg-white">
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
            <h1 className="font-bold text-[40px] md:text-[62px] mt-2 leading-[60px]">
              Renew<span className="text-zinc-400">Me</span>
            </h1>
            <h2 className="text-[18px] md:text-[28px] mt-0 md:mt-2 mb-0 md:mb-4">
              Life balance is better together.
            </h2>
            <Button
              className="rounded-full text-lg px-[24px] py-[24px] hidden md:flex md:items-center md:justify-center pt-[26px]"
              variant="outline"
            >
              <Link href="/">Join the Movement</Link>
            </Button>
          </div>
        </section>

        <section className="hidden md:flex w-full md:w-[280px] h-full flex-col items-center mt-3">
          <Badge className="bg-[#00C6C9]/10 text-[#00C6C9] outline outline-1 mb-10 md:mb-8 outline-[#00C6C9] text-md font-medium pt-1 px-4 hover:bg-[#00C6C9]/10">
            Coming Soon!
          </Badge>
          <section className="flex justify-between md:w-full gap-2 xs:gap-7 md:gap-0 -mb-1">
            <div className="flex flex-col items-center w-[116px]">
              <h1 className="text-lg font-medium mb-1">Use Code</h1>
              <Badge className="text-lg w-full flex items-center justify-center font-medium pt-1">
                JOY369
              </Badge>
            </div>
            <div className="h-20 w-[1px] bg-zinc-200"></div>
            <div
              className="flex flex-col items-center w-[116px] cursor-pointer"
              onClick={() => {
                toast({
                  className: 'bg-white',
                  title: 'RenewMe Soulscape is coming soon!',
                  description:
                    'Use code JOY369 to unlock RenewMe Soulscape. Stay tuned for updates.',
                });
              }}
            >
              <h1 className="text-lg font-medium mb-1">Download</h1>
              <Image
                src={`${imageDomainUrl}/Code/app-store-button.png`}
                alt="App Store"
                width={200}
                height={60}
              />
            </div>
          </section>
          <section
            className="flex cursor-pointer items-center font-medium text-[19px] gap-1 mt-6 justify-center"
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
              className="w-5 h-auto"
              src={`${imageDomainUrl}/Code/share.svg`}
              alt="Share Icon"
              width={500}
              height={500}
            />
            <p className="text-base md:text-lg">Share with friends</p>
          </section>
        </section>
      </section>

      {/* Banner */}
      <Image
        className="object-cover object-bottom block md:hidden"
        src={`${imageDomainUrl}/Code/vector-illustration/soulscape-vector-mobile.png`}
        alt="Soulscape Banner"
        quality={100}
        width={2000}
        height={1200}
      />

      {/* Coming Soon Mobile */}
      <section className="flex md:hidden w-full md:w-[280px] h-full flex-col items-center px-[40px] pt-[35px] pb-[4px]">
        <Badge className="bg-[#00C6C9]/10 text-[#00C6C9] outline outline-1 mb-10 md:mb-8 outline-[#00C6C9] text-md font-medium pt-1 px-4 hover:bg-[#00C6C9]/10">
          Coming Soon!
        </Badge>
        <section className="flex justify-between md:w-full gap-4 xs:gap-7 md:gap-0">
          <div className="flex flex-col items-center w-[116px]">
            <h1 className="text-lg font-medium mb-1">Use Code</h1>
            <Badge className="text-lg w-full flex items-center justify-center font-medium">
              JOY369
            </Badge>
          </div>
          <div className="h-20 w-[1px] bg-zinc-200"></div>
          <div
            className="flex flex-col items-center w-[116px] cursor-pointer"
            onClick={() => {
              toast({
                className: 'bg-white',
                title: 'RenewMe Soulscape is coming soon!',
                description: 'Use code JOY369 to unlock RenewMe Soulscape. Stay tuned for updates.',
              });
            }}
          >
            <h1 className="text-lg font-medium mb-1">Download</h1>
            <Image
              src={`${imageDomainUrl}/Code/app-store-button.png`}
              alt="App Store"
              width={200}
              height={60}
            />
          </div>
        </section>
        <section
          className="flex cursor-pointer items-center font-medium text-[19px] gap-1 mt-6 mb-9 justify-center"
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
            className="w-5 h-auto"
            src={`${imageDomainUrl}/Code/share.svg`}
            alt="Share Icon"
            width={500}
            height={500}
          />
          <p className="text-base md:text-lg">Share with friends</p>
        </section>
        <div className="h-[1px] w-full bg-zinc-200"></div>
      </section>

      {/* Soulscape Banner Desktop */}
      <h1 className="hidden md:flex items-center justify-center font-bold text-[40px] md:text-[62px] mt-2 leading-[60px]">
        Travel Mindfully.
      </h1>
      <section className="w-full hidden md:flex flex-col items-center relative h-[640px]">
        <h2 className="text-[18px] md:text-[28px] mt-0 md:mt-2 mb-0 md:mb-4">
          Life balance is better together
        </h2>
        <Image
          className="object-cover object-bottom -z-10"
          src={`${imageDomainUrl}/Code/vector-illustration/soulscape-vector-desktop.png`}
          alt="Soulscape Banner"
          quality={100}
          fill
        />
      </section>

      {/* Carousel 2 */}
      <section className="w-screen px-4 md:px-[60px] lg:px-[40px] xl:px-[140px] py-[28px] md:pb-[42px] md:pt-[42px] flex flex-col items-center">
        <Image
          className="w-7 md:w-10 h-auto mb-2 md:mb-4"
          src={`${imageDomainUrl}/Code/play-icon.svg`}
          alt="Play Icon"
          width={500}
          height={500}
        />
        <h1 className="text-[20px] md:text-[50px] font-bold mb-[8px] md:mb-[38px]">
          Listen to <span className="text-[#00C6C9]">Soulscape</span>
        </h1>
        <section className="flex w-full items-center justify-center gap-5">
          <div className="w-[514px] flex flex-col items-center">
            <Dialog>
              <DialogTrigger>
                <div className="relative rounded-2xl md:rounded-[40px] h-[135px] md:h-[230px] w-full mb-5 md:mb-6">
                  <Image
                    className="object-cover rounded-2xl md:rounded-[40px] w-full h-full shadow-md"
                    src={soulscapeCarouselContent.thumbnail}
                    alt={soulscapeCarouselContent.title}
                    quality={100}
                    fill
                  />
                </div>
                <h1 className="text-[18px] md:text-[26px] font-bold leading-[25px] text-center mb-0 md:mb-1">
                  {soulscapeCarouselContent.title}
                </h1>
                <div className="w-full flex items-center justify-center">
                  <p className="text-base md:text-lg mb-3 font-medium text-center leading-5 md:leading-6 max-w-md">
                    {soulscapeCarouselContent.description}
                  </p>
                </div>
                <p className="text-base md:text-lg text-center">
                  {soulscapeCarouselContent.duration}
                </p>
              </DialogTrigger>
              <DialogContent className="border-transparent p-0 m-0">
                <video
                  className="w-full rounded-2xl md:rounded-xl shadow-md"
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

      {/* Carousel 1 */}
      <section className="w-screen px-0 lg:px-[80px] xl:px-[140px] pb-8 md:pb-[42px] flex flex-col items-center">
        <Image
          className="w-7 md:w-10 h-auto mb-2 md:mb-4"
          src={`${imageDomainUrl}/Code/play-icon.svg`}
          alt="Play Icon"
          width={500}
          height={500}
        />
        <h1 className="text-[20px] md:text-[50px] font-bold mb-[8px] md:mb-[38px]">
          Listen to{' '}
          <span className="text-orange-400">
            Renew<span className="text-orange-400/60">Me</span>
          </span>
        </h1>
        <section className="flex w-full overflow-x-auto lg:overflow-x-visible md:px-0 gap-4 md:gap-5">
          {renewmeCarouselContent.map((item, index) => (
            <div
              key={index}
              className={`basis-full ${index === 0 ? 'pl-4 md:pl-[60px] lg:pl-0' : ''} ${
                index === renewmeCarouselContent.length - 1 ? 'pr-[40px] md:pr-[60px] lg:pr-0' : ''
              }`}
            >
              <Dialog>
                <DialogTrigger className="w-full flex flex-col items-start">
                  <div className="relative rounded-2xl md:rounded-[40px] w-[185px] md:w-full h-[145px] md:h-[235px] mb-5 md:mb-6">
                    <Image
                      className="object-cover rounded-2xl md:rounded-[40px] w-full h-full shadow-md"
                      src={item.thumbnail}
                      alt={item.title}
                      quality={100}
                      fill
                    />
                  </div>

                  <h1 className="text-[18px] md:text-[26px] font-bold leading-[22px] mb-0 md:mb-1">
                    {item.title}
                  </h1>
                  <p className="text-base md:text-lg mb-2 md:mb-3 font-medium">
                    {item.description}
                  </p>
                  <p className="text-base md:text-lg">{item.duration}</p>
                </DialogTrigger>
                <DialogContent className="border-transparent p-0 m-0">
                  <video
                    className="w-full rounded-2xl md:rounded-xl shadow-md"
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

      {/* Footer */}
      <footer className="w-screen px-[40px] md:px-[60px] lg:px-[80px] xl:px-[140px] py-[46px] md:py-[80px] flex-col flex bg-[#131B42] rounded-t-3xl">
        <section className="flex flex-col items-center">
          <h1 className="text-[24px] md:text-[46.5px] font-semibold w-full leading-6 md:leading-[50px] mb-[24px] md:mb-[36px] text-white text-center">
            Enjoying Soulscape?
          </h1>
          <Button
            className="w-fit md:px-[60px] mb-12 md:mb-7 flex items-center justify-center py-[22px] md:py-[28px] rounded-full text-lg outline outline-1 bg-transparent hover:bg-white/10 hover:text-white outline-white text-white"
            variant="outline"
          >
            <a
              className="mt-1"
              href="https://form.typeform.com/to/euOLT3Wv"
              target="_blank"
              rel="noopener noreferrer"
            >
              Share your thoughts
            </a>
          </Button>
          <Link className="text-sm md:text-lg text-white" href="/">
            www.myrenewme.com
          </Link>
        </section>
      </footer>

      {/* --------- */}

      {/* Guide: Mobile Soulscape */}
      {/* <Image
        className="opacity-20 absolute top-0 z-10 md:hidden block"
        src={`${imageDomainUrl}/Code/soulscape-guide-mobile.png`}
        alt="Soulscape Guide Mobile"
        width={2000}
        height={1200}
      /> */}

      {/* Guide: Desktop Soulscape */}
      {/* <Image
        className="hidden absolute top-0 z-10 md:opacity-20 md:block"
        src={`${imageDomainUrl}/Code/soulscape-guide.png`}
        alt="Soulscape Guide"
        width={2000}
        height={1200}
      /> */}
    </>
  );
};

export default QRSoulscapePage;
