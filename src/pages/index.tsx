import Home from 'modules/Home';
import { GetServerSideProps, NextPage } from 'next';

import Head from 'next/head';

import PageLayout from 'shared/components/Layouts/PageLayout';

// eslint-disable-next-line @typescript-eslint/require-await
export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader(
    'Cache-Control',
    `s-maxage=${60 * 60 * 24 * 365}, stale-while-revalidate=${60 * 60 * 24}`
  );

  return {
    props: {},
  };
};

const HomePage: NextPage = () => {
  return (
    <>
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

      <Head>
        <title>RenewMe</title>

        {/* <!--  Primary --> */}
        <meta
          name="Life balance is better together. Join us for a happier, mindful, and purposeful journey."
          content="Home"
        />
      </Head>
      <PageLayout>
        <Home />
      </PageLayout>
    </>
  );
};

export default HomePage;
