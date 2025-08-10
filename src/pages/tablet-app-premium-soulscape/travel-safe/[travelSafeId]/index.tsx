import SoulscapeTravelCardItem from 'modules/TravelSafe/components/SoulscapeTravelCardItem';
import { travelSafeItems } from 'modules/TravelSafe/constants/travel-safe-items';
import { NextPage } from 'next';
import { useEffect } from 'react';

import { useRouter } from 'next/router';

import { zoomOutTabletApp } from 'src/lib/utils';

const TravelSafeIdPage: NextPage = () => {
  const router = useRouter();
  const { travelSafeId } = router.query;

  const travelSafeItem = travelSafeItems.find(item => item.slug === travelSafeId);

  useEffect(() => {
    zoomOutTabletApp();
  }, [router]);

  return <SoulscapeTravelCardItem item={travelSafeItem} />;
};

export default TravelSafeIdPage;
