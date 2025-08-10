import News from 'modules/News';
import { NextPage } from 'next';

import Head from 'next/head';

import PageLayout from 'shared/components/Layouts/PageLayout';

const NewsPage: NextPage = () => {
  return (
    <PageLayout>
      <Head>
        <title>Elevate Wellbeing</title>

        {/* <!-- Viewport --> */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />

        <meta name="application_name" content="RenewMe Website" />

        {/* <!--  Open Graph / Facebook --> */}
        <meta property="og:title" content="Elevate Wellbeing" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Elevate Wellbeing" />
        <meta property="og:url" content="https://www.myrenewme.com/default-path" />
        <meta
          property="og:image"
          content="https://utfs.io/f/d2fdeba8-c584-48da-a86f-a476be808255-mdohhu.png"
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

      <News />
    </PageLayout>
  );
};

export default NewsPage;
