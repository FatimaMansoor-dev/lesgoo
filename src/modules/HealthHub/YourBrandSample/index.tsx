// import HeyThereDialog from './components/HeyThereDialog';
// import Header from 'modules/YourBrandSample/components/Header';
// import FollowUpAdDialog from './components/FollowUpAdDialog';
import DailyPepTalk from 'modules/YourBrandSample/components/DailyPepTalk';
import DidYouKnow from 'modules/YourBrandSample/components/DidYouKnow';
import Download from 'modules/YourBrandSample/components/Download';
import GeneralAndMental from 'modules/YourBrandSample/components/GeneralAndMental';
import Header from 'modules/YourBrandSample/components/Header';
import MindfulnessAudio from 'modules/YourBrandSample/components/MindfulnessAudios';
import NutritionAndExercise from 'modules/YourBrandSample/components/NutritionAndExercise';
import SkillfulLiving from 'modules/YourBrandSample/components/SkillfulLiving';
import TriviaZone from 'modules/YourBrandSample/components/TriviaZone';
import Welcome from 'modules/YourBrandSample/components/Welcome';
import React, { useEffect } from 'react';

import { useRouter } from 'next/router';

// import SurveyDialog from './components/SurveyDialog';
// import AdsDialog from './components/AdsDialog';

const HealthHub: React.FC = () => {
  // const [isHeyThereDialogOpen, setIsHeyThereDialogOpen] = useState(false);
  // const [isFollowUpAdDialogOpen, setIsFollowUpAdDialogOpen] = useState(false);
  // const [canShowAdsDialog, setCanShowAdsDialog] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // const comingFromCode = sessionStorage.getItem('comingFromCode');
    // if (comingFromCode) {
    //   sessionStorage.removeItem('comingFromCode');
    //   setCanShowAdsDialog(true);
    // } else {
    //   setIsHeyThereDialogOpen(true);
    // }

    // Clean up function to set the flag when navigating away
    return () => {
      if (router.asPath.startsWith('/health-hub')) {
        sessionStorage.setItem('comingFromCode', 'true');
      }
    };
  }, [router.asPath]);

  // useEffect(() => {
  //   setCanShowAdsDialog(!isHeyThereDialogOpen && !isFollowUpAdDialogOpen);
  // }, [isHeyThereDialogOpen, isFollowUpAdDialogOpen]);

  // const handleHeyThereDialogClose = () => {
  //   setIsHeyThereDialogOpen(false);
  //   setIsFollowUpAdDialogOpen(true);
  // };

  // const handleFollowUpAdDialogClose = () => {
  //   setIsFollowUpAdDialogOpen(false);
  // };

  return (
    <div className="py-4 relative w-screen flex flex-col items-center font-['Gilroy'] transition-all duration-150 ease-in-out">
      {/* <Image
        className="fixed w-screen h-screen z-20 pointer-events-none opacity-[0.08] object-cover"
        src={`${imageDomainUrl}/YourBrandSample/renewme-watermark.png`}
        width={2000}
        height={2000}
        alt="RenewMe Watermark"
      /> */}
      {/* <AdsDialog canShow={canShowAdsDialog} /> */}
      {/* <HeyThereDialog isOpen={isHeyThereDialogOpen} onClose={handleHeyThereDialogClose} /> */}
      {/* <FollowUpAdDialog isOpen={isFollowUpAdDialogOpen} onClose={handleFollowUpAdDialogClose} /> */}
      {/* <SurveyDialog /> */}
      <Header />
      <Welcome />
      <Download />
      <NutritionAndExercise />
      <GeneralAndMental />
      <MindfulnessAudio />
      <TriviaZone />
      <DidYouKnow />
      {/* <Reviews /> */}
      <DailyPepTalk />
      <SkillfulLiving />
      {/* <EnjoyingRenewMe /> */}
    </div>
  );
};

export default HealthHub;
