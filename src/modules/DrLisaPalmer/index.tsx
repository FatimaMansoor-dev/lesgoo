import Advertise from 'modules/KarmaTravelDemo/components/Advertise';
import DailyPepTalk from 'modules/KarmaTravelDemo/components/DailyPepTalk';
import DidYouKnow from 'modules/KarmaTravelDemo/components/DidYouKnow';
import DiscoverDestination from 'modules/KarmaTravelDemo/components/DiscoverDestination';
import FindYourNextStay from 'modules/KarmaTravelDemo/components/FindYourNextStay';
import GeneralAndMental from 'modules/KarmaTravelDemo/components/GeneralAndMental';
import MindfulnessAudio from 'modules/KarmaTravelDemo/components/MindfulnessAudios';
import NutritionAndExercise from 'modules/KarmaTravelDemo/components/NutritionAndExercise';
import Reviews from 'modules/KarmaTravelDemo/components/Reviews';
import SkillfulLiving from 'modules/KarmaTravelDemo/components/SkillfulLiving';
import TravelMindfully from 'modules/KarmaTravelDemo/components/TravelMindfully';
import TriviaZone from 'modules/KarmaTravelDemo/components/TriviaZone';
import TermsModal from 'modules/YourBrandSample/components/TermsModal';
import { useEffect, useState } from 'react';

import DRDetails from './components/DRDetails';
import HeyThereModal from './components/HeyThereModal';
import JourneyModal from './components/JourneyModal';

const options = [
  { label: 'Live Better. Be Balanced.', value: '' },
  { label: 'Mindfulness', value: 'mindfulness' },
  { label: 'Nutrition Tips', value: 'wellness' },
  { label: 'Wellness Trivia', value: 'trivia' },
  { label: 'Did You Know?', value: 'did-You-know' },
  { label: 'Daily Pep Talks', value: 'daily-pep-talks' },
  { label: 'Skillful Living', value: 'skillful-living' },
  { label: 'Soulscape Travel', value: 'travel-mindfully' },
  { label: 'Discover Destinations', value: 'soulscape' },
  { label: 'Book a Trip', value: 'next-stay' },
  { label: 'RenewMe Reviews', value: 'reviews' },
  { label: 'Advertise with Us', value: 'advertise' },
];
const DrLisaPalmer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isJourneyOpen, setIsJourneyOpen] = useState(false);
  const [journeyTimerStarted, setJourneyTimerStarted] = useState(false);
  const [selected, setSelected] = useState(options[0]);

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
      setJourneyTimerStarted(true);
    }
  }, []);

  const closeYourBrandSampleModal = () => {
    setIsModalOpen(false);
    setIsTermsOpen(true);
    window.scrollTo(0, 0);
  };
  const closeTermsModal = () => {
    setIsTermsOpen(false);
    setJourneyTimerStarted(true);
    window.scrollTo(0, 0);
  };

  const closeJourneyModal = () => {
    setIsJourneyOpen(false);
  };

  useEffect(() => {
    if (!journeyTimerStarted) return;

    let firstTimeout: ReturnType<typeof setTimeout>;
    let interval: ReturnType<typeof setInterval>;

    const handleScroll = () => {
      if (!firstTimeout) {
        firstTimeout = setTimeout(() => {
          setIsJourneyOpen(true);
          interval = setInterval(() => {
            setIsJourneyOpen(true);
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
  }, [journeyTimerStarted]);

  useEffect(() => {
    if (isModalOpen || isTermsOpen || isJourneyOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isModalOpen, isTermsOpen, isJourneyOpen]);

  return (
    <div className="relative flex w-screen flex-col items-center font-['Urbanist'] transition-all duration-150 ease-in-out">
      <div className="max-w-[375px] mx-auto w-full relative">
        <DRDetails selected={selected} setSelected={setSelected} options={options} />
        <div className="mb-[34px]">{selected.value === 'mindfulness' && <MindfulnessAudio />}</div>
        {selected.value === 'wellness' && (
          <>
            <NutritionAndExercise />
            <GeneralAndMental />
          </>
        )}
        <div className="mt-[-1.5px]">{selected.value === 'trivia' && <TriviaZone />}</div>
        {selected.value === 'did-You-know' && <DidYouKnow />}
        {selected.value === 'reviews' && <Reviews />}
        {selected.value === 'soulscape' && <DiscoverDestination />}
        {selected.value === 'travel-mindfully' && <TravelMindfully />}
        {selected.value === 'next-stay' && <FindYourNextStay />}
        {selected.value === 'daily-pep-talks' && <DailyPepTalk />}
        {selected.value === 'skillful-living' && <SkillfulLiving />}
        {selected.value === 'advertise' && <Advertise bgColor="bg-[#A251AB]" />}
        {isModalOpen && (
          <HeyThereModal
            listId={process.env.NEXT_PUBLIC_COMMON_CONSTANT_CONTACT_LIST_ID}
            onTermsOpen={closeYourBrandSampleModal}
          />
        )}
        {isTermsOpen && <TermsModal onClose={closeTermsModal} buttonClass="bg-[#132979]" />}{' '}
        {isJourneyOpen && <JourneyModal onClose={closeJourneyModal} />}{' '}
        <p className="text-[#636363] font-['Urbanist'] text-[12px] mt-[54px] mb-[32px] leading-[14px] text-center">
          Copyright © 2025 RenewMe
        </p>
      </div>
    </div>
  );
};

export default DrLisaPalmer;
