import Layout from 'modules/RenewmeHome/layout';
import { useState } from 'react';

import type { CarouselApi } from 'src/components/ui/carousel';
import Balance from 'src/modules/RenewmeHome/components/Balance';

const BalancePage = () => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);

  return (
    <div className="bg-[url(/assets/Renewme-home/home-bg.png)] bg-cover bg-center bg-fixed min-h-screen">
      <Layout>
        {/* make the inner wrapper transparent like Meditation */}
        <div className="mt-[88px] xl:pr-[129px] lg:pr-[44px] lg:px-0 sm:px-[20px] px-[30px] lg:pl-[44px] bg-transparent">
          <Balance carouselApi={carouselApi} />
        </div>
      </Layout>
    </div>
  );
};

export default BalancePage;
