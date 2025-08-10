import Sidebar from 'modules/TabletApp/components/Sidebar';
import React, { useState } from 'react';

import Image from 'next/image';
import { useRouter } from 'next/router';

import { imageDomainUrl } from 'shared/constants/Assets';

import ContentHeader from 'src/components/tablet/content-header';
import { cn } from 'src/lib/utils';

import FitnessFunDialog from './components/FitnessFunDialog';
import QuoteQR from './components/QuoteQR';

const FitnessFun: React.FC = () => {
  const [showDialog, setShowDialog] = useState(false);
  const [selectedType, setSelectedType] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter();

  const handleLearnMore = (type: string) => {
    setSelectedType(type);
    setCurrentIndex(0); // Reset the index when a new item is selected
    setShowDialog(true);
  };

  const handleCloseDialog = () => {
    setShowDialog(false);
  };

  const handleNextFact = () => {
    setCurrentIndex(prevIndex => prevIndex + 1);
  };

  // Check if isPremium is true by checking if /tablet-app-premium includes in the pathname
  const isPremium = router.pathname.includes('/tablet-app-premium');

  // Check if renewme or soulscape is included in the pathname
  const pageType = router.pathname.includes('soulscape') ? 'soulscape' : 'renewme';

  return (
    <section className="relative flex w-screen font-['Gilroy'] text-zinc-700">
      {/* <RenewMeWatermark /> */}
      <Sidebar isPremium={isPremium} type={pageType} />
      <main
        className={cn(
          'ml-4 mr-4 w-[calc(100%-2rem)] overflow-x-visible py-4 transition-all duration-300 ease-in-out md:ml-[calc(280px+2rem)]'
        )}
      >
        <ContentHeader
          title="Fitness Fun"
          description="Embark on a journey of empowerment to lead a more harmonious life!"
          iconSrc={`${imageDomainUrl}/FitnessFun/weight.svg`}
          iconAlt="Fitness Fun"
          descriptionClassName="max-w-[800px]"
          spacerClassname="w-[20%]"
        />

        <section className="mb-4 flex w-full flex-col gap-4 text-white md:flex-row">
          <div
            className="cursor-pointer rounded-3xl border-2 border-[#278F92] bg-[#01C1C6] p-8 transition-all duration-300 ease-in-out hover:bg-[#00A8AD] hover:shadow-lg md:basis-1/2"
            onClick={() => handleLearnMore('Nutrition')}
          >
            <Image
              className="mb-4 w-12"
              src={`${imageDomainUrl}/YourBrandSample/Icon/nutrition.svg`}
              alt="Nutrition"
              width={300}
              height={300}
            />
            <h1 className="mb-2 text-2xl font-bold">Nutrition</h1>
            <p className="mb-10 max-w-[19.375rem] text-lg font-medium">
              Healthy choices set the stage for a balanced life, giving you the energy you need to the best version of yourself.
            </p>
            <button className="text-lg underline underline-offset-4 transition-colors duration-300 hover:text-[#E3F7F7]">
              Learn More
            </button>
          </div>
          <div
            className="cursor-pointer rounded-3xl border-2 border-[#689647] bg-[#9AC17E] p-8 transition-all duration-300 ease-in-out hover:bg-[#8AAF6E] hover:shadow-lg md:basis-1/2"
            onClick={() => handleLearnMore('Exercise')}
          >
            <Image
              className="mb-4 w-12"
              src={`${imageDomainUrl}/YourBrandSample/Icon/exercise.svg`}
              alt="Exercise"
              width={300}
              height={300}
            />
            <h1 className="mb-2 text-2xl font-bold">Exercise</h1>
            <p className="mb-10 max-w-[22.25rem] text-lg font-medium">
              Exercise is super important for keeping you healthy. It lifts your mood and cuts down
              on stress.
            </p>
            <button className="text-lg underline underline-offset-4 transition-colors duration-300 hover:text-[#E3F7F7]">
              Learn More
            </button>
          </div>
        </section>
        <section className="mb-4 flex w-full flex-col gap-4 text-white md:flex-row">
          <div
            className="cursor-pointer rounded-3xl border-2 border-[#724071] bg-[#B38DB2] p-8 transition-all duration-300 ease-in-out hover:bg-[#A27DA1] hover:shadow-lg md:basis-1/2"
            onClick={() => handleLearnMore('Mental Wellness')}
          >
            <Image
              className="mb-4 w-12"
              src={`${imageDomainUrl}/YourBrandSample/Icon/mental-wellness.svg`}
              alt="Mental Wellness"
              width={300}
              height={300}
            />
            <h1 className="mb-2 text-2xl font-bold">Mental Wellness</h1>
            <p className="mb-10 max-w-[19.375rem] text-lg font-medium">
              Mental wellness is all about taking care of your mind and emotions. It&apos;s about
              finding balance.
            </p>
            <button className="text-lg underline underline-offset-4 transition-colors duration-300 hover:text-[#E3F7F7]">
              Learn More
            </button>
          </div>
          <div
            className="cursor-pointer rounded-3xl border-2 border-[#A35A41] bg-[#F07E58] p-8 transition-all duration-300 ease-in-out hover:bg-[#E06E48] hover:shadow-lg md:basis-1/2"
            onClick={() => handleLearnMore('General Health')}
          >
            <Image
              className="mb-4 w-14"
              src={`${imageDomainUrl}/YourBrandSample/Icon/general-health.svg`}
              alt="General Health"
              width={300}
              height={300}
            />
            <h1 className="mb-2 text-2xl font-bold">General Health</h1>
            <p className="mb-10 max-w-sm text-lg font-medium">
              By taking care of all aspects of your health, you can enjoy a more vibrant and
              fulfilling life.
            </p>
            <button className="text-lg underline underline-offset-4 transition-colors duration-300 hover:text-[#E3F7F7]">
              Learn More
            </button>
          </div>
        </section>
        <QuoteQR
          quote="Living in balance is the key to health and happiness. It's not about perfection, but about finding harmony in all aspects of life."
          quoteClassName="max-w-[600px]"
        />
      </main>
      <FitnessFunDialog
        open={showDialog}
        onClose={handleCloseDialog}
        selectedType={selectedType}
        currentIndex={currentIndex}
        onNextFact={handleNextFact}
      />
    </section>
  );
};

export default FitnessFun;
