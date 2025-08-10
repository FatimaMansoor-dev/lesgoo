import React, { useEffect, useState } from 'react';

import Head from 'next/head';

import ContactDialog from 'src/components/contact-dialog';

import EscapeTranquility from './components/EscapeTranquility';
import Hero from './components/Hero';
import Network from './components/Network';
import WhatPeopleAreSaying from './components/WhatPeopleAreSaying';
import { SpascapeWrapper } from './index.styled';

const Spascape: React.FC = () => {
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
        <title>Spascape | RenewMe</title>

        {/* <!--  Primary --> */}
        <meta
          name="Indulge in an oasis of relaxation and rejuvenation to unwind in serenity."
          content="Spascape | RenewMe"
        />
      </Head>
      <SpascapeWrapper className="flex flex-col overflow-hidden bg-[#EFE7E0]">
        <ContactDialog isOpen={isBrevoFormOpen} onClose={handleCloseBrevoForm} />

        <Hero />
        <Network />
        <EscapeTranquility />
        <WhatPeopleAreSaying />
      </SpascapeWrapper>
    </>
  );
};

export default Spascape;
