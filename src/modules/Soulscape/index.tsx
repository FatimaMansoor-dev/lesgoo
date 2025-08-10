import React, { useEffect, useState } from 'react';

import Head from 'next/head';

import ContactDialog from 'src/components/contact-dialog';

import Explainer from './components/Explainer';
import Hero from './components/Hero';
import Network from './components/Network';
import Services from './components/Services';
import TravelBalance from './components/TravelBalance';
import WhatPeopleAreSaying from './components/WhatPeopleAreSaying';
import { SoulscapeWrapper } from './index.styled';

const Soulscape: React.FC = () => {
  const [isBrevoFormOpen, setIsBrevoFormOpen] = useState(false);

  useEffect(() => {
    setIsBrevoFormOpen(true);
  }, []);

  const handleCloseBrevoForm = () => {
    setIsBrevoFormOpen(false);
  };

  return (
    <>
      <Head>
        <title>Soulscape | RenewMe</title>

        {/* <!--  Primary --> */}
        <meta
          name="Enhance your travel experience with mindful exploration and transforming journeys."
          content="Soulscape | RenewMe"
        />
      </Head>

      <SoulscapeWrapper className="flex flex-col overflow-hidden bg-[#FAFAFA]">
        <ContactDialog isOpen={isBrevoFormOpen} onClose={handleCloseBrevoForm} />
        <Hero />
        <Network />
        <TravelBalance />
        <Explainer />
        <Services />
        <WhatPeopleAreSaying />
      </SoulscapeWrapper>
    </>
  );
};

export default Soulscape;
