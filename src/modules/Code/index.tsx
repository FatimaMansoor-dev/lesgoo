import { FC, useEffect, useState } from 'react';

import { useRouter } from 'next/router';

import { Button } from 'src/components/ui/button';

import { ArrowLeft } from 'lucide-react';

import QRRenewMePage from './components/renewme';
import QRSoulscapePage from './components/soulscape';
import { TermsDialog } from './components/terms-dialog';

const Code: FC = () => {
  const router = useRouter();

  const [isScrollingDown, setIsScrollingDown] = useState(false);

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

  return (
    <main className="w-full font-['Gilroy'] text-[#3A3A3B]">
      {/* Terms Dialog: Turned off temporarily */}
      <TermsDialog />

      {/* Back Button */}
      <div
        className={`fixed top-4 right-4 z-50 transition-transform duration-300 ${
          isScrollingDown ? '-translate-y-20' : 'translate-y-0'
        }`}
      >
        <Button
          variant="ghost"
          className={`flex h-auto w-fit items-center gap-2 rounded-full bg-white text-zinc-800 outline outline-1 outline-zinc-200 shadow-md`}
          onClick={() => router.push('/')}
        >
          <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
          <span className="hidden md:block">Back</span>
        </Button>
      </div>

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
