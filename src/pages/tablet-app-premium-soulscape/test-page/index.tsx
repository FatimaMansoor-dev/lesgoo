import TabletApp from 'modules/TabletApp';
import { NextPage } from 'next';

import Head from 'next/head';

const TabletAppPage: NextPage = () => {
  const isAfterStartTime = () => {
    // Hardcoded "now" for testing — after 9 PM tomorrow
    const now = new Date(); // 10 PM on July 31, 2025

    const tomorrow = new Date('2025-07-30T22:00:00');

    return now >= tomorrow;
  };

  return (
    <>
      <Head>
        <title>RenewMe Tablets</title>

        {/* <!-- Viewport --> */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />

        <meta name="application_name" content="RenewMe Website" />

        {/* <!--  Open Graph / Facebook --> */}
        <meta property="og:title" content="RenewMe Tablets" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="RenewMe Tablets" />
        <meta property="og:url" content="https://www.myrenewme.com/tablet-app" />
        <meta
          property="og:image"
          content="https://utfs.io/f/00110e18-cdca-477a-b9cb-aac773235015-5t0jcv.jpg"
        />
        <meta
          property="og:description"
          content="A refreshing wellness brand inspiring more confidence, balance, and peace of mind."
        />

        {/* <!--  Twitter --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image:alt"
          content="A refreshing wellness brand inspiring more confidence, balance, and peace of mind."
        />

        {/* <!--  For Analytics --> */}
        <meta property="fb:app_id" content="your_app_id" />
        <meta name="twitter:site" content="@username" />

        {/* <!--  Favicon --> */}
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <TabletApp isAfterExpireTime={isAfterStartTime()} />
    </>
  );
};

export default TabletAppPage;
