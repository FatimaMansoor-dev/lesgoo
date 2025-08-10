import Head from 'next/head';

interface MetaHeadProps {
  pageType: 'default' | 'renewme-tablets' | 'renewme-qr';
}

const MetaHead = ({ pageType }: MetaHeadProps) => {
  const getMetaData = () => {
    switch (pageType) {
      case 'renewme-tablets':
        return {
          title: 'RenewMe Tablets',
          ogImage: 'https://utfs.io/f/00110e18-cdca-477a-b9cb-aac773235015-5t0jcv.jpg',
          siteName: 'RenewMe Tablets',
          ogUrl: 'https://www.myrenewme.com/tablet-app',
        };
      case 'renewme-qr':
        return {
          title: 'RenewMe QR',
          ogImage: 'https://utfs.io/f/c381dd8d-ffff-4d55-8e5c-0d83be9b5dc0-n8k1or.jpg',
          siteName: 'RenewMe QR',
          ogUrl: 'https://www.myrenewme.com/health-hub',
        };
      case 'default':
      default:
        return {
          title: 'Elevate Wellbeing',
          ogImage: 'https://utfs.io/f/d2fdeba8-c584-48da-a86f-a476be808255-mdohhu.png',
          siteName: 'Elevate Wellbeing',
          ogUrl: 'https://www.myrenewme.com/default-path',
        };
    }
  };

  const metaData = getMetaData();

  return (
    <Head>
      <title>{metaData.title}</title>

      {/* <!-- Viewport --> */}
      <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />

      <meta name="application_name" content="RenewMe Website" />

      {/* <!--  Open Graph / Facebook --> */}
      <meta property="og:title" content={metaData.title} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={metaData.siteName} />
      <meta property="og:url" content={metaData.ogUrl} />
      <meta property="og:image" content={metaData.ogImage} />
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
  );
};

export default MetaHead;
