import { flightStatusItems } from 'modules/FlightStatus/constants/flight-status-items';
import SoulscapeTravelCardItem from 'modules/TravelSafe/components/SoulscapeTravelCardItem';
import { NextPage } from 'next';
import { useEffect } from 'react';

import { useRouter } from 'next/router';

import { zoomOutTabletApp } from 'src/lib/utils';

const FlightStatusIdPage: NextPage = () => {
  const router = useRouter();

  const { flightStatusId } = router.query;

  const flightStatusItem = flightStatusItems.find(item => item.slug === flightStatusId);

  useEffect(() => {
    zoomOutTabletApp();
  }, [router]);

  return <SoulscapeTravelCardItem item={flightStatusItem} />;
};

export default FlightStatusIdPage;
