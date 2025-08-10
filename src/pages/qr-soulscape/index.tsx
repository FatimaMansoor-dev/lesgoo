// import LuxuryTravelDr from 'modules/KarmaTravelDemo';
import QrSoulScape from 'modules/QrSoulScape';
import { NextPage } from 'next';

import Head from 'next/head';

const QrSoulScapePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>QR Soulscape</title>

        {/* <!-- Viewport --> */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />

        <meta name="application_name" content="QR Soulscape Website" />

        {/* <!--  Open Graph / Facebook --> */}
        <meta property="og:title" content="QR Soulscape" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="QR Soulscape" />
        <meta property="og:url" content="https://www.myrenewme.com/qr-soulscape" />
        <meta
          property="og:image"
          content="https://utfs.io/f/c381dd8d-ffff-4d55-8e5c-0d83be9b5dc0-n8k1or.jpg"
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
      <QrSoulScape />
    </>
  );
};

export default QrSoulScapePage;
