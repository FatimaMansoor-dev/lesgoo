import gsap from 'gsap';
import Sidebar from 'modules/TabletApp/components/Sidebar';
import React, { useEffect, useRef, useState } from 'react';

import Image from 'next/image';
import { useRouter } from 'next/router';

import { imageDomainUrl } from 'shared/constants/Assets';

import ContentHeader from 'src/components/tablet/content-header';
import { cn } from 'src/lib/utils';

import { ChevronRight, RotateCcw } from 'lucide-react';

import { skillfulLivingItems } from '../constants/coping-skills';

const SkillDetails: React.FC = () => {
  const router = useRouter();
  const slug = router.query.skillId;
  const [activeSkill, setActiveSkill] = useState<number | null>(null);
  const [flippedSkill, setFlippedSkill] = useState<number | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const skill = skillfulLivingItems.find(
    item => item.slug.toLowerCase().replace(/\s+/g, '-') === slug
  );

  useEffect(() => {
    cardRefs.current = cardRefs.current.slice(0, skill?.subSkills.length);
  }, [skill]);

  useEffect(() => {
    if (skill) {
      const totalCards = skill.subSkills.length;

      cardRefs.current.forEach((card, index) => {
        if (card) {
          let zIndex, opacity;

          if (activeSkill === null) {
            zIndex = totalCards - index;
            opacity = 1;
          } else {
            const distance = Math.abs(index - activeSkill);
            zIndex = totalCards - distance;
            opacity = 1 - distance * 0.2;
          }

          gsap.to(card, {
            scale: activeSkill === index ? 1.05 : 1,
            rotateY: flippedSkill === index ? 180 : 0,
            rotateZ: activeSkill === index ? -6 : 0,
            zIndex: activeSkill === index ? totalCards + 1 : zIndex,
            opacity: opacity,
            duration: 0,
            ease: 'power2.inOut',
          });
        }
      });
    }
  }, [activeSkill, flippedSkill, skill]);

  // Check if isPremium is true by checking if /tablet-app-premium includes in the pathname, dont use ==, just find if there is a match
  const isPremium = router.pathname.includes('/tablet-app-premium');

  // Check if renewme or soulscape is included in the pathname, dont use ==, just find if there is a match
  const pageType = router.pathname.includes('soulscape') ? 'soulscape' : 'renewme';

  if (!skill) {
    return (
      <section className="flex flex-col md:flex-row w-screen font-['Gilroy'] text-zinc-700 relative">
        {/* <RenewMeWatermark /> */}

        <Sidebar isPremium={isPremium} type={pageType} />
        <main className="w-full px-4 md:px-8 py-8 md:ml-[280px] transition-all duration-300 overflow-x-hidden">
          <section className="w-full mb-6">
            <h1 className="text-2xl md:text-3xl font-bold mb-2">Skill not found</h1>
            <p className="text-sm md:text-base max-w-lg font-medium">
              The skill you are looking for does not exist.
            </p>
          </section>
        </main>
      </section>
    );
  }

  const handleCardClick = (index: number) => {
    if (activeSkill === index) {
      setFlippedSkill(flippedSkill === index ? null : index);
    } else {
      setActiveSkill(index);
      setFlippedSkill(null);
    }
  };

  const handleNextCard = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextIndex = (activeSkill ?? -1) + 1;
    if (nextIndex < skill.subSkills.length) {
      setActiveSkill(nextIndex);
      setFlippedSkill(null);
    }
  };

  const handleRestart = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveSkill(0);
    setFlippedSkill(null);
  };

  return (
    <section className="flex flex-col md:flex-row w-screen font-['Gilroy'] text-zinc-700 relative">
      {/* <RenewMeWatermark /> */}

      <Sidebar isPremium={isPremium} type={pageType} />
      <main
        className={cn(
          'ml-4 md:ml-[calc(280px+2rem)] py-4 w-full mr-4 transition-all duration-500 ease-in-out overflow-x-visible relative'
        )}
      >
        <ContentHeader
          title={skill.skill}
          description={skill.descriptionLong}
          iconSrc={`${imageDomainUrl}/CopingSkills/Seal/${skill.icon}`}
          iconAlt={skill.skill}
          descriptionClassName={skill.descriptionClassname}
        />

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-4 w-full">
          {skill.subSkills.map((subSkill, index) => (
            <div
              key={index}
              ref={el => (cardRefs.current[index] = el)}
              className={cn(
                'p-3 w-full md:w-[250px] h-[340px] md:-mx-16 border-2 cursor-pointer rounded-xl transition-all duration-300 flex flex-col justify-center items-center [transform-style:preserve-3d]',
                activeSkill === index
                  ? `${skill.stroke} ${skill.gradient}`
                  : 'bg-white border-zinc-200'
              )}
              onClick={() => handleCardClick(index)}
            >
              {/* Front side */}
              <div
                className={cn(
                  'absolute w-full h-full flex flex-col justify-between items-center p-6 text-center backface-hidden',
                  flippedSkill === index ? 'opacity-0 pointer-events-none' : 'opacity-100'
                )}
              >
                <div className="opacity-0 w-full mb-4" />
                <div className="flex flex-col items-center">
                  <Image
                    className="w-12 mb-4"
                    src={`${imageDomainUrl}/CopingSkills/Seal/${skill.subIcon}`}
                    alt={subSkill.title}
                    width={100}
                    height={100}
                  />
                  <h3 className="text-lg md:text-xl font-bold mb-2">{subSkill.title}</h3>
                </div>
                <div className="flex items-center w-full justify-end mt-4">
                  <span className="mr-1 text-sm md:text-base">Click</span>
                  <ChevronRight className={cn(skill.text)} size={20} />
                </div>
              </div>

              {/* Back side */}
              <div
                className={cn(
                  'absolute w-full h-full flex flex-col justify-between items-center p-6 text-center backface-hidden [transform:rotateY(180deg)]',
                  flippedSkill === index ? 'opacity-100' : 'opacity-0 pointer-events-none'
                )}
              >
                <div className="opacity-0 w-full mb-4" />
                <div className="flex flex-col items-start w-full">
                  <Image
                    className="w-12 mb-4"
                    src={`${imageDomainUrl}/CopingSkills/Seal/${skill.subIcon}`}
                    alt={subSkill.title}
                    width={100}
                    height={100}
                  />
                  <p className="text-sm md:text-base text-left text-zinc-600 leading-snug font-medium mb-4">
                    {subSkill.description}
                  </p>
                </div>
                {index < skill.subSkills.length - 1 ? (
                  <div
                    className="flex items-center w-full justify-end mt-4 cursor-pointer"
                    onClick={handleNextCard}
                  >
                    <span className="mr-1 text-sm md:text-base">Next</span>
                    <ChevronRight className={cn(skill.text)} size={20} />
                  </div>
                ) : (
                  <div
                    className="flex items-center w-full justify-end mt-4 cursor-pointer"
                    onClick={handleRestart}
                  >
                    <span className="mr-2 text-sm md:text-base">Restart</span>
                    <RotateCcw className={cn(skill.text)} size={18} />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
    </section>
  );
};

export default SkillDetails;
