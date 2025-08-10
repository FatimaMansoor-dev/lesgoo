import { gsap } from 'gsap';
import { NextPage } from 'next';
import { useEffect, useRef } from 'react';

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import { imageDomainUrl } from 'shared/constants/Assets';
import { ROUTES } from 'shared/constants/Routes';

import { Button } from 'src/components/ui/button';

import { Home } from 'lucide-react';

const NotFoundPage: NextPage = () => {
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (logoRef.current) {
      gsap.to(logoRef.current, {
        rotation: 360,
        duration: 20,
        ease: 'linear',
        repeat: -1,
      });
    }
  }, []);

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
      <section className="h-screen flex items-center flex-col justify-between p-20 font-['Gilroy'] text-zinc-800">
        <div className="flex flex-col items-center mb-6">
          <div ref={logoRef}>
            <Image
              src={`${imageDomainUrl}/TabletApp/favicon-original-teal.svg`}
              alt="RenewMe Logo Teal"
              width={80}
              height={80}
            />
          </div>
        </div>

        <div className="flex flex-col items-center mb-10">
          <h1 className="font-black text-9xl">404</h1>
          <h4 className="text-2xl mb-2 font-medium">Page not found</h4>
          <p className="text-zinc-400 text-base max-w-[320px] text-center">
            This page you visited does not exist. Please go back to the home page.
          </p>
        </div>
        <Link href={ROUTES.HOME}>
          <Button className="bg-[#00C0C5] hover:bg-[#319194] flex items-center gap-2">
            <Home size={18} />
            <p className="mt-0.5">Go to Home</p>
          </Button>
        </Link>
      </section>
    </>
  );
};

export default NotFoundPage;
