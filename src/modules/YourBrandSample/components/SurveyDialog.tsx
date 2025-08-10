import React, { useEffect, useState } from 'react';

import Image from 'next/image';

import { imageDomainUrl } from 'shared/constants/Assets';

import { Dialog, DialogContent } from 'src/components/ui/dialog';

import { ArrowUpRightFromSquare } from 'lucide-react';

interface SurveyDialogProps {
  minTime?: number; // in minutes
  maxTime?: number; // in minutes
}

const SurveyDialog: React.FC<SurveyDialogProps> = ({
  minTime = 3, // Default min time: 3 minutes
  maxTime = 10, // Default max time: 10 minutes
}) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const surveyVisited = localStorage.getItem('surveyVisited');
    if (!surveyVisited) {
      const minTimeMs = minTime * 60 * 1000;
      const maxTimeMs = maxTime * 60 * 1000;
      const randomTime = Math.floor(Math.random() * (maxTimeMs - minTimeMs + 1)) + minTimeMs;
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, randomTime);
      return () => clearTimeout(timer);
    }
  }, [minTime, maxTime]);

  const handleClose = () => {
    localStorage.setItem('surveyVisited', 'true');
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="bg-white border-2 border-zinc-200 font-['Gilroy'] max-w-[320px] flex flex-col items-start justify-start text-[#505050] !rounded-3xl !p-8">
        <Image
          className="w-12 mb-2"
          src={`${imageDomainUrl}/YourBrandSample/renewme-logo-teal.svg`}
          width={400}
          height={400}
          alt="Renewme Logo Teal"
        />
        <h1 className="font-semibold text-xl text-zinc-800">Enjoying RenewMe?</h1>
        <p className="text-base mb-6 font-medium">
          We would love to hear from you! <br />
          <br />
          Please take a few minutes to complete our survey and provide us with feedback on your
          experience so far. <br />
          <br /> Your input is invaluable to us as we strive to enhance and improve RenewMe for all!
          Thank you for being a part of our mission of mental health awareness!
        </p>
        <a
          href="https://form.typeform.com/to/euOLT3Wv"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#00C0C5] text-white py-2 px-4 rounded-2xl hover:bg-[#309ca0] transition-all duration-150 ease-in-out w-full flex items-center justify-center"
          onClick={handleClose}
        >
          Share your thoughts! <ArrowUpRightFromSquare size={16} className="inline ml-2" />
        </a>
      </DialogContent>
    </Dialog>
  );
};

export default SurveyDialog;
