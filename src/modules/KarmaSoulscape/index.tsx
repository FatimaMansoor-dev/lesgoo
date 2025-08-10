import Advertise from 'modules/KarmaTravelDemo/components/Advertise';
import DailyPepTalk from 'modules/KarmaTravelDemo/components/DailyPepTalk';
import DidYouKnow from 'modules/KarmaTravelDemo/components/DidYouKnow';
import DiscoverDestination from 'modules/KarmaTravelDemo/components/DiscoverDestination';
import FindYourNextStay from 'modules/KarmaTravelDemo/components/FindYourNextStay';
import GeneralAndMental from 'modules/KarmaTravelDemo/components/GeneralAndMental';
import Header from 'modules/KarmaTravelDemo/components/Header';
import KarmaTravelDemoModal from 'modules/KarmaTravelDemo/components/KarmaTravelDemoModal';
import Mindfulness from 'modules/KarmaTravelDemo/components/Mindfulness';
import MindfulnessAudio from 'modules/KarmaTravelDemo/components/MindfulnessAudios';
import NutritionAndExercise from 'modules/KarmaTravelDemo/components/NutritionAndExercise';
import Reviews from 'modules/KarmaTravelDemo/components/Reviews';
import SkillfulLiving from 'modules/KarmaTravelDemo/components/SkillfulLiving';
import TravelMindfully from 'modules/KarmaTravelDemo/components/TravelMindfully';
import TriviaZone from 'modules/KarmaTravelDemo/components/TriviaZone';
import MeditationModal from 'modules/LuxuryTravelDr/components/MeditationModal';
import TermsModal from 'modules/YourBrandSample/components/TermsModal';
import React, { useEffect, useState } from 'react';

import Welcome from './components/Welcome';

const KarmaSoulscape: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isMeditationOpen, setIsMeditationOpen] = useState(false);
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

  const closeMeditationModal = () => {
    setIsMeditationOpen(false);
  };

  useEffect(() => {
    if (!timerStarted) return;

    let firstTimeout: ReturnType<typeof setTimeout>;
    let interval: ReturnType<typeof setInterval>;

    const handleScroll = () => {
      if (!firstTimeout) {
        firstTimeout = setTimeout(() => {
          setIsMeditationOpen(true);
          interval = setInterval(() => {
            setIsMeditationOpen(true);
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
    if (isModalOpen || isTermsOpen || isMeditationOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isModalOpen, isTermsOpen, isMeditationOpen]);

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
      {isMeditationOpen && <MeditationModal onClose={closeMeditationModal} />}
      <p className="text-[#636363] font-['Urbanist'] text-[12px] mt-[37.5px] mb-[32px] leading-[14px]">
        Copyright © 2025 RenewMe
      </p>
    </div>
  );
};

export default KarmaSoulscape;
