import React from 'react';

import Head from 'next/head';

import Hero from './components/Hero';
import Wellness from './components/Wellness';
import WhatPeopleAreSaying from './components/WhatPeopleAreSaying';
import { PartnersWrapper } from './index.styled';

const Partners: React.FC = () => {
  return (
    <>
      <Head>
        <title>Partners | RenewMe</title>

        {/* <!--  Primary --> */}
        <meta
          name="Explore global partnership opportunities with RenewMe. Join us in empowering businesses worldwide through innovative solutions."
          content="Partners | RenewMe"
        />
      </Head>
      <PartnersWrapper className="flex flex-col overflow-x-hidden bg-white">
        <Hero />
        <Wellness />
        <WhatPeopleAreSaying />
      </PartnersWrapper>
    </>
  );
};

export default Partners;
