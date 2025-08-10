import TermsModal from 'modules/YourBrandSample/components/TermsModal';
import React, { useEffect, useState } from 'react';

import Advertise from './components/Advertise';
import DailyPepTalk from './components/DailyPepTalk';
import DidYouKnow from './components/DidYouKnow';
import DiscoverDestination from './components/DiscoverDestination';
import FindYourNextStay from './components/FindYourNextStay';
import GeneralAndMental from './components/GeneralAndMental';
import Header from './components/Header';
import KarmaTravelDemoModal from './components/KarmaTravelDemoModal';
import LuxuryModal from './components/LuxuryModal';
import Mindfulness from './components/Mindfulness';
import MindfulnessAudio from './components/MindfulnessAudios';
import NutritionAndExercise from './components/NutritionAndExercise';
import Reviews from './components/Reviews';
import SkillfulLiving from './components/SkillfulLiving';
import TravelMindfully from './components/TravelMindfully';
import TriviaZone from './components/TriviaZone';
import Welcome from './components/Welcome';

const KarmaTravelDemo: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isLuxuryOpen, setIsLuxuryOpen] = useState(false);
  const [timerStarted, setTimerStarted] = useState(false);

  useEffect(() => {
    const isSubscribed = sessionStorage.getItem('subscribed') === 'true';
    const termsAccepted = sessionStorage.getItem('termsAccepted') === 'true';

    if (!isSubscribed) {
      setIsModalOpen(true);
    }

    if (isSubscribed && !termsAccepted) {
      setIsTermsOpen(true);
    }

    if (isSubscribed && termsAccepted) {
      setTimerStarted(true);
    }
  }, []);

  const closeKarmaTravelDemoModal = () => {
    setIsModalOpen(false);
    setIsTermsOpen(true);
    window.scrollTo(0, 0);
  };
  const closeTermsModal = () => {
    setIsTermsOpen(false);
    setTimerStarted(true);
    window.scrollTo(0, 0);
  };

  const closeLuxuryModal = () => {
    setIsLuxuryOpen(false);
  };

  useEffect(() => {
    if (!timerStarted) return;

    let firstTimeout: ReturnType<typeof setTimeout>;
    let interval: ReturnType<typeof setInterval>;

    const handleScroll = () => {
      if (!firstTimeout) {
        firstTimeout = setTimeout(() => {
          setIsLuxuryOpen(true);
          interval = setInterval(() => {
            setIsLuxuryOpen(true);
          }, 5 * 60 * 1000);
        }, 60 * 1000);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(firstTimeout);
      clearInterval(interval);
    };
  }, [timerStarted]);

  useEffect(() => {
    if (isModalOpen || isTermsOpen || isLuxuryOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isModalOpen, isTermsOpen, isLuxuryOpen]);

  return (
    <div className="relative flex w-screen flex-col items-center font-['Gilroy'] transition-all duration-150 ease-in-out">
      <div className="max-w-[375px] mx-auto w-full relative">
        <div className="text-lg font-bold text-zinc-600 bg-white shadow-md mb-2 break-all border-[2px] rounded-md flex justify-center items-center border-zinc-200 w-[120px] absolute right-4 top-[30px] py-0.5">
          DEMO
        </div>
      </div>
      <Header />
      <Welcome />
      <Mindfulness />
      <NutritionAndExercise />
      <GeneralAndMental />
      <MindfulnessAudio />
      <TriviaZone />
      <DidYouKnow />
      <Reviews />
      <DiscoverDestination />
      <TravelMindfully />
      <FindYourNextStay />
      <DailyPepTalk />
      <SkillfulLiving />
      <Advertise bgColor="bg-[#A251AB]" />
      {isModalOpen && (
        <KarmaTravelDemoModal
          listId={process.env.NEXT_PUBLIC_COMMON_CONSTANT_CONTACT_LIST_ID}
          onTermsOpen={closeKarmaTravelDemoModal}
        />
      )}
      {isTermsOpen && <TermsModal onClose={closeTermsModal} buttonClass="bg-[#132979]" />}
      {isLuxuryOpen && <LuxuryModal onClose={closeLuxuryModal} />}
    </div>
  );
};

export default KarmaTravelDemo;
