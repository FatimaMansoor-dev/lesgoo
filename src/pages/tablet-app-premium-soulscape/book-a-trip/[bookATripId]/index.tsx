import { bookATripAndAirlinesItems } from 'modules/BookATrip/constants/book-a-trip-items';
import SoulscapeTravelCardItem from 'modules/TravelSafe/components/SoulscapeTravelCardItem';
import { NextPage } from 'next';
import { useEffect } from 'react';

import { useRouter } from 'next/router';

import { zoomOutTabletApp } from 'src/lib/utils';

const BookATripIdPage: NextPage = () => {
  const router = useRouter();

  const { bookATripId } = router.query;

  const bookATripAndAirlinesItem = bookATripAndAirlinesItems.find(
    item => item.slug === bookATripId
  );

  useEffect(() => {
    zoomOutTabletApp();
  }, [router]);

  return <SoulscapeTravelCardItem item={bookATripAndAirlinesItem} />;
};

export default BookATripIdPage;
