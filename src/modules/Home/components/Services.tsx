import classNames from 'classnames';
import React from 'react';

import Service1AreYouBalanced from './Service1AreYouBalanced';
import Service2SkillfulLiving from './Service2SkillfulLiving';
import Service3RelaxRenew from './Service3RelaxRenew';
import Service4SetGoals from './Service4SetGoals';
import Service5StayMotivated from './Service5StayMotivated';
import { ServicesWrapper } from './Services.styled';
import SleepEscape from './SleepEscape';

const Services: React.FC = () => {
  return (
    <ServicesWrapper
      className={classNames(
        `mt-[40px] flex flex-col gap-[40px]`,
        `md:mt-[60px] md:gap-[120px]`,
        `lg:mt-[80px] lg:gap-[160px]`
      )}
    >
      <Service1AreYouBalanced />
      <Service2SkillfulLiving />
      <Service3RelaxRenew />
      <Service4SetGoals />
      <Service5StayMotivated />
      <SleepEscape />

      {/* Removed */}
      {/* <Service7 /> */}
      {/* <Service8 /> */}
      {/* <Service9 /> */}
      {/* <Service10 /> */}
    </ServicesWrapper>
  );
};

export default Services;
