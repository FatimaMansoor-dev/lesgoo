// import HeyThereDialog from './components/HeyThereDialog';
// import FollowUpAdDialog from './components/FollowUpAdDialog';
import React from 'react';

// import SurveyDialog from './components/SurveyDialog';
import DailyPepTalk from './components/DailyPepTalk';
// import AdsDialog from './components/AdsDialog';
// import DailyPepTalk from './components/DailyPepTalk';
import DidYouKnow from './components/DidYouKnow';
import Download from './components/Download';
import GeneralAndMental from './components/GeneralAndMental';
import Header from './components/Header';
import MindfulnessAudio from './components/MindfulnessAudios';
import NutritionAndExercise from './components/NutritionAndExercise';
import Reviews from './components/Reviews';
import SkillfulLiving from './components/SkillfulLiving';
import TriviaZone from './components/TriviaZone';
import Welcome from './components/Welcome';

const QrRenewme: React.FC = () => {
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const [isTermsOpen, setIsTermsOpen] = useState(false);
  // const [isJourneyOpen, setIsJourneyOpen] = useState(false);
  // const [journeyTimerStarted, setJourneyTimerStarted] = useState(false);
  // const router = useRouter();

  // useEffect(() => {
  //   const isSubscribed = sessionStorage.getItem('subscribed') === 'true';
  //   const termsAccepted = sessionStorage.getItem('termsAccepted') === 'true';

  //   if (!isSubscribed) {
  //     setIsModalOpen(true);
  //   }

  //   if (isSubscribed && !termsAccepted) {
  //     setIsTermsOpen(true);
  //   }

  //   if (isSubscribed && termsAccepted) {
  //     setJourneyTimerStarted(true);
  //   }
  // }, []);

  // const closeYourBrandSampleModal = () => {
  //   setIsModalOpen(false);
  //   setIsTermsOpen(true);
  //   window.scrollTo(0, 0);
  // };
  // // const [isHeyThereDialogOpen, setIsHeyThereDialogOpen] = useState(false);
  // // const [isFollowUpAdDialogOpen, setIsFollowUpAdDialogOpen] = useState(false);
  // // const [canShowAdsDialog, setCanShowAdsDialog] = useState(false);
  // const closeTermsModal = () => {
  //   setIsTermsOpen(false);
  //   setJourneyTimerStarted(true);
  //   window.scrollTo(0, 0);
  // };

  // const closeJourneyModal = () => {
  //   setIsJourneyOpen(false);
  // };

  // useEffect(() => {
  //   const isModalShown = sessionStorage.getItem('modalShown');

  //   if (!isModalShown) {
  //     setIsModalOpen(true);
  //     sessionStorage.setItem('modalShown', 'true');
  //   }

  //   // const comingFromCode = sessionStorage.getItem('comingFromCode');
  //   // if (comingFromCode) {
  //   //   sessionStorage.removeItem('comingFromCode');
  //   //   setCanShowAdsDialog(true);
  //   // } else {
  //   //   setIsHeyThereDialogOpen(true);
  //   // }

  //   // Clean up function to set the flag when navigating away
  //   return () => {
  //     if (router.asPath.startsWith('/health-hub')) {
  //       sessionStorage.setItem('comingFromCode', 'true');
  //     }
  //   };
  // }, [router.asPath]);

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
  // useEffect(() => {
  //   if (!journeyTimerStarted) return;

  //   let firstTimeout: ReturnType<typeof setTimeout>;
  //   let interval: ReturnType<typeof setInterval>;

  //   const handleScroll = () => {
  //     if (!firstTimeout) {
  //       firstTimeout = setTimeout(() => {
  //         setIsJourneyOpen(true);
  //         interval = setInterval(() => {
  //           setIsJourneyOpen(true);
  //         }, 5 * 60 * 1000);
  //       }, 60 * 1000);
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //     clearTimeout(firstTimeout);
  //     clearInterval(interval);
  //   };
  // }, [journeyTimerStarted]);

  // useEffect(() => {
  //   if (isModalOpen || isTermsOpen || isJourneyOpen) {
  //     document.body.style.overflow = 'hidden';
  //   } else {
  //     document.body.style.overflow = 'auto';
  //   }

  //   return () => {
  //     document.body.style.overflow = 'auto';
  //   };
  // }, [isModalOpen, isTermsOpen, isJourneyOpen]);

  // const isAfterStartTime = () => {
  //   // Hardcoded "now" for testing — after 9 PM tomorrow
  //   const now = new Date(); // 10 PM on July 31, 2025

  //   const tomorrow = new Date('2025-08-01T22:00:00');

  //   return now >= tomorrow;
  // };

  return (
    <div className="relative flex w-screen flex-col items-center py-4 font-['Gilroy'] transition-all duration-150 ease-in-out">
      {/* <Image
        className="pointer-events-none fixed z-20 h-screen w-screen object-cover opacity-[0.08]"
        src={`${imageDomainUrl}/YourBrandSample/renewme-watermark.png`}
        width={2000}
        height={2000}
        alt="RenewMe Watermark"
      /> */}
      {/* <AdsDialog canShow={canShowAdsDialog} /> */}
      {/* <HeyThereDialog isOpen={isHeyThereDialogOpen} onClose={handleHeyThereDialogClose} /> */}
      {/* <FollowUpAdDialog isOpen={isFollowUpAdDialogOpen} onClose={handleFollowUpAdDialogClose} /> */}
      {/* <SurveyDialog /> */}
      {/* <div className="max-w-[400px] mx-auto w-full relative">
        <div className="text-lg font-bold text-zinc-600 bg-white shadow-md mb-2 break-all border-[2px] rounded-md flex justify-center items-center border-zinc-200 w-[120px] absolute right-4 top-[30px] py-0.5">
          DEMO
        </div>
      </div> */}
      {/* <WelcomePopup isOpen={isAfterStartTime()} onClose={() => {}} /> */}
      <Header />
      <Welcome />
      <Download />
      <NutritionAndExercise />
      <GeneralAndMental />
      <MindfulnessAudio />
      <TriviaZone />
      <DidYouKnow />
      <Reviews />
      <DailyPepTalk />
      <SkillfulLiving />
      {/* <Advertise bgColor="bg-[#8FBB70]" /> */}
      {/* <EnjoyingRenewMe /> */}
      {/* {isModalOpen && (
        <YourBrandSampleModal
          listId={process.env.NEXT_PUBLIC_COMMON_CONSTANT_CONTACT_LIST_ID}
          onTermsOpen={closeYourBrandSampleModal}
        />
      )}
      {isTermsOpen && <TermsModal onClose={closeTermsModal} />}{' '}
      {isJourneyOpen && <JourneyModal onClose={closeJourneyModal} />}{' '} */}

      <div className="w-full text-center text-[12px] text-[#636363] mb-4">
        <span>Copyright © 2025 RenewMe</span>
      </div>
    </div>
  );
};

export default QrRenewme;
