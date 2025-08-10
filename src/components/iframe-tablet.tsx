import React, { useEffect, useState } from 'react';

import Head from 'next/head';
import { useRouter } from 'next/router';

const IFrameTablet: React.FC = () => {
  const [scale, setScale] = useState(1);
  // const [zoomFactor, setZoomFactor] = useState(1.2);
  const [zoomFactor, setZoomFactor] = useState(0.8);
  const [iframeSize, setIframeSize] = useState({ width: 0, height: 0 });
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const [currentURL, setCurrentURL] = useState('');

  const router = useRouter();

  const baseUrl = currentURL.includes('localhost:3000')
    ? 'http://localhost:3000'
    : 'https://myrenewme.com';

  const iframeLink = `${baseUrl}${router.pathname.replace('/iframe', '')}`;

  useEffect(() => {
    setCurrentURL(window.location.href);

    const updateDimensions = () => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      // Calculate the iframe width and height based on the window size
      const iframeWidth = windowWidth / zoomFactor;
      const iframeHeight = windowHeight / zoomFactor;

      setContainerSize({ width: windowWidth, height: windowHeight });
      setIframeSize({ width: iframeWidth, height: iframeHeight });
      setScale(zoomFactor);
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, [zoomFactor]);

  const updateZoomFactor = (newZoomFactor: number) => {
    setZoomFactor(newZoomFactor);
  };

  return (
    <>
      <Head>
        <title>RenewMe</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="application-name" content="RenewMe Website" />
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
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image:alt"
          content="A refreshing wellness brand inspiring more confidence, balance, and peace of mind."
        />
        <meta property="fb:app_id" content="your_app_id" />
        <meta name="twitter:site" content="@username" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <div
        className="bg-white"
        style={{
          width: containerSize.width,
          height: containerSize.height,
        }}
      >
        <div
          className="origin-top-left"
          style={{
            transform: `scale(${scale})`,
            width: iframeSize.width,
            height: iframeSize.height,
            transformOrigin: 'top left',
          }}
        >
          <iframe
            src={iframeLink}
            style={{
              width: '100%',
              height: '100%',
              border: 'none',
            }}
            allowFullScreen
          />
        </div>
      </div>
      {/* Hide slider for a while */}
      <div className="fixed bottom-4 right-4 bg-white p-2 rounded shadow z-10 hidden">
        <label htmlFor="zoom-control" className="mr-2">
          Zoom:
        </label>
        <input
          id="zoom-control"
          type="range"
          min="1"
          max="2"
          step="0.1"
          value={zoomFactor}
          onChange={e => updateZoomFactor(parseFloat(e.target.value))}
        />
        <span className="ml-2">{zoomFactor.toFixed(1)}x</span>
      </div>
    </>
  );
};

export default IFrameTablet;
