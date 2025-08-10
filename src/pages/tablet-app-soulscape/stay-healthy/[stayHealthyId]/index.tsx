import { stayHealthyItems } from 'modules/StayHealthy/constants/health-articles-items';
import SoulscapeTravelCardItem from 'modules/TravelSafe/components/SoulscapeTravelCardItem';
import { NextPage } from 'next';
import { useEffect } from 'react';

import { useRouter } from 'next/router';

import { zoomOutTabletApp } from 'src/lib/utils';

const TravelSafeIdPage: NextPage = () => {
  const router = useRouter();

  const { stayHealthyId } = router.query;

  const stayHealthyItem = stayHealthyItems.find(item => item.slug === stayHealthyId);

  useEffect(() => {
    zoomOutTabletApp();
  }, [router]);

  return <SoulscapeTravelCardItem item={stayHealthyItem} />;
};

export default TravelSafeIdPage;
