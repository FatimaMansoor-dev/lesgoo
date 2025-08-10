import classNames from 'classnames';
import React from 'react';

import Service1 from './Service1';
import Service2 from './Service2';
import Service3 from './Service3';
import Service4 from './Service4';
import Service5 from './Service5';
import { ServicesWrapper } from './Services.styled';

const Services: React.FC = () => {
  return (
    <ServicesWrapper
      className={classNames(
        `my-[40px] flex flex-col gap-[40px]`,
        `md:my-[60px] md:gap-[120px]`,
        `lg:my-[80px] lg:gap-[160px]`
      )}
    >
      {/* Travel Tips */}
      <Service1 />

      {/* Travel Safe */}
      <Service2 />

      {/* Healthy Living */}
      <Service3 />

      {/* Mindful Travel */}
      <Service4 />

      {/* Book a Trip */}
      <Service5 />

      {/* Removed */}
      {/* <Service6 /> */}
    </ServicesWrapper>
  );
};

export default Services;
