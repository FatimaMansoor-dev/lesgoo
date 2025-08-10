import { FC, useEffect, useState } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

import { Button } from 'src/components/ui/button';

import { ArrowLeft, Loader2 } from 'lucide-react';

import QRRenewMePage from './components/renewme';
import QRSoulscapePage from './components/soulscape';
import { TermsDialog } from './components/terms-dialog';

const Code: FC = () => {
  const router = useRouter();

  const [popoverTermsIsOpened, setPopoverTermsisOpened] = useState(false);
  const [termsIsChecked, setTermsIsChecked] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const companyId = router.query.companyId as string;
  const companyCode = router.query.code as string;

  // Scroll Event Back Button
  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;
      setIsScrollingDown(currentScrollY > lastScrollY);
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Show Terms Dialog/Popover
  useEffect(() => {
    setPopoverTermsisOpened(true);
  }, []);

  // If router is not ready display a loading screen
  useEffect(() => {
    if (router.isReady) {
      setIsLoading(false);
      setPopoverTermsisOpened(true);
    }
  }, [companyId, router, companyCode, router.isReady]);

  if (isLoading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <Loader2 className="animate-spin text-[#00C6C9]"></Loader2>
      </div>
    );
  }

  return (
    <main className="w-full font-['Gilroy'] text-[#3A3A3B]">
      {/* Terms Dialog: Turned off temporarily */}
      <TermsDialog
        popoverTermsIsOpened={popoverTermsIsOpened}
        setPopoverTermsisOpened={setPopoverTermsisOpened}
        termsIsChecked={termsIsChecked}
        setTermsIsChecked={setTermsIsChecked}
      />

      {/* Back Button */}
      <Link
        href="/health-hub"
        className={`fixed top-4 right-4 z-50 transition-transform duration-300 ${
          isScrollingDown ? '-translate-y-20' : 'translate-y-0'
        }`}
      >
        <Button
          variant="ghost"
          className={`flex h-auto w-fit items-center gap-2 rounded-full bg-white text-zinc-800 outline outline-1 outline-zinc-200 shadow-md`}
        >
          <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
          <span className="hidden md:block">Back</span>
        </Button>
      </Link>

      {/* --------- */}
      {
        // If RenewMe Company
        companyId === 'renewme' && companyCode === 'peace369' && <QRRenewMePage />
      }
      {
        // If Soulscape Company
        companyId === 'soulscape' && companyCode === 'joy369' && <QRSoulscapePage />
      }
      {
        // If Company is not found
        companyId === 'renewme' && companyCode !== 'peace369' && (
          <div className="w-full h-screen flex items-center justify-center">
            <h1 className="text-3xl font-bold text-center">Invalid Code! For RenewMe</h1>
          </div>
        )
      }
      {
        // If Company is not found
        companyId === 'soulscape' && companyCode !== 'joy369' && (
          <div className="w-full h-screen flex items-center justify-center">
            <h1 className="text-3xl font-bold text-center">Invalid Code! For Soulscape</h1>
          </div>
        )
      }
    </main>
  );
};

export default Code;
