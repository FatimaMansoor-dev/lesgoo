import HormonalCyclePage from 'modules/MoodHub/components/HormonalCycle';
import MoodHubIdPage from 'modules/MoodHub/components/MoodHubIdPage';
import { MOOD_HUB_DETAILS, MoodHubDetailsItem } from 'modules/MoodHub/constants/moodHubDetails';
import React from 'react';

import { useRouter } from 'next/router';

import { Loader2 } from 'lucide-react';

const MoodHubDetail: React.FC = () => {
  const router = useRouter();
  const { moodHubId } = router.query;
  const moodHubData: MoodHubDetailsItem | undefined = MOOD_HUB_DETAILS.find(
    item => item.slug === moodHubId
  );

  if (!moodHubData) {
    return (
      <section className="flex w-screen items-center justify-center text-[#00C0C5]">
        <Loader2 className="h-12 w-12 animate-spin" />
      </section>
    );
  }

  return (
    <>
      {moodHubData.slug === 'hormonal-cycle' ? (
        <HormonalCyclePage />
      ) : (
        <MoodHubIdPage moodHubData={moodHubData} />
      )}
    </>
  );
};

export default MoodHubDetail;
