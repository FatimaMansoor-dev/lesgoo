import TravelTipsPage from 'modules/TravelTipsPage';
import React, { useEffect } from 'react';

import { useRouter } from 'next/router';

const TravelTips: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    return () => {
      if (router.asPath.startsWith('/travel-tips')) {
        sessionStorage.setItem('comingFromCode', 'true');
      }
    };
  }, [router.asPath]);

  return <TravelTipsPage />;
};

export default TravelTips;
