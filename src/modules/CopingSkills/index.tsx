import Sidebar from 'modules/TabletApp/components/Sidebar';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { imageDomainUrl } from 'shared/constants/Assets';

import ContentHeader from 'src/components/tablet/content-header';
import { cn } from 'src/lib/utils';

import { MoveRight } from 'lucide-react';

import { skillfulLivingItems } from './constants/coping-skills';

const CopingSkills = () => {
  const router = useRouter();

  // Check if isPremium is true by checking if /tablet-app-premium includes in the pathname, dont use ==, just find if there is a match
  const isPremium = router.pathname.includes('/tablet-app-premium');

  // Check if renewme or soulscape is included in the pathname, dont use ==, just find if there is a match
  const pageType = router.pathname.includes('soulscape') ? 'soulscape' : 'renewme';

  return (
    <section className="relative flex w-screen font-['Gilroy'] text-zinc-700">
      {/* <RenewMeWatermark /> */}

      <Sidebar isPremium={isPremium} type={pageType} />
      <main
        className={cn(
          'ml-4 mr-4 h-screen w-full overflow-x-hidden py-4 transition-all duration-300 ease-in-out md:ml-[calc(280px+2rem)]'
        )}
      >
        <ContentHeader
          title="Skillful Living"
          description="Embark on a journey of empowerment for a harmonious and balanced life!"
          iconSrc={`${imageDomainUrl}/TabletApp/Icons/coping-skills-icon.svg`}
          iconAlt="Coping Skills"
          descriptionClassName="max-w-[480px] lg:max-w-[80%]"
        />

        <section className="w-full">
          {Array.from({ length: 4 }, (_, rowIndex) => (
            <div key={rowIndex} className="mb-4 flex w-full flex-col gap-4 md:flex-row">
              {skillfulLivingItems.slice(rowIndex * 2, rowIndex * 2 + 2).map((skill, index) => (
                <Link
                  href={`${router.pathname}/${skill.slug}`}
                  key={index}
                  className={cn(
                    `basis-full rounded-3xl border-[2px] border-[#00C0C5] p-8`,
                    skill.gradient,
                    skill.stroke
                  )}
                >
                  <Image
                    className="mb-8 w-16"
                    src={`${imageDomainUrl}/CopingSkills/Seal/${skill.icon}`}
                    alt={skill.skill}
                    width={100}
                    height={100}
                  />
                  <h2 className="mb-2 text-xl font-semibold">{skill.skill}</h2>
                  <p className="max-w-[430px] text-lg font-medium">{skill.description}</p>

                  {/* Click here */}
                  <div className="mt-8 flex items-center justify-end gap-2">
                    <p className="text-lg font-medium">Click here</p>
                    <MoveRight />
                  </div>
                </Link>
              ))}
            </div>
          ))}
        </section>
      </main>
    </section>
  );
};

export default CopingSkills;
