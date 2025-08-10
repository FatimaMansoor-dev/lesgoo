import React, { useEffect, useState } from 'react';

import Image from 'next/image';

import { imageDomainUrl } from 'shared/constants/Assets';

import { Button } from 'src/components/ui/button';
import { Dialog, DialogContent } from 'src/components/ui/dialog';

interface SurveyDialogProps {
  isTermsDialogOpen: boolean;
}

const SurveyDialog: React.FC<SurveyDialogProps> = ({ isTermsDialogOpen }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    checkAndShowSurvey();
  }, []);

  const checkAndShowSurvey = () => {
    const lastSurveyAttempt = localStorage.getItem('lastSurveyAttempt');
    const surveyCompleted = localStorage.getItem('surveyCompleted');
    const currentTime = new Date().getTime();

    if (surveyCompleted === 'true') {
      // User has completed the survey, don't show it again
      return;
    }

    if (!lastSurveyAttempt) {
      // First time user, show survey after 5 minutes
      setTimeout(() => setIsDialogOpen(true), 5 * 60 * 1000);
    } else {
      const timeSinceLastAttempt = currentTime - parseInt(lastSurveyAttempt);
      const daysSinceLastAttempt = timeSinceLastAttempt / (1000 * 60 * 60 * 24);

      if (daysSinceLastAttempt < 7) {
        // Less than 7 days since last attempt, don't show
        return;
      } else {
        // More than 7 days, show after 10 minutes
        setTimeout(() => setIsDialogOpen(true), 10 * 60 * 1000);
      }
    }
  };

  const handleSurveyClick = () => {
    const currentTime = new Date().getTime();
    localStorage.setItem('lastSurveyAttempt', currentTime.toString());
    setIsDialogOpen(false);
  };

  const handleDialogClose = (open: boolean) => {
    setIsDialogOpen(open);
    // Don't update localStorage when closing without clicking the survey link
  };

  if (!isMounted) {
    return null;
  }

  return (
    <Dialog open={isDialogOpen && !isTermsDialogOpen} onOpenChange={handleDialogClose}>
      <DialogContent className="bg-white font-['Gilroy'] max-w-[540px] p-[1.875rem] !rounded-[1.25rem]">
        <Image
          src={`${imageDomainUrl}/Code/renewme-icon.png`}
          alt="RenewMe Logo"
          className="mb-[2.5rem] h-12 w-12"
          width={1000}
          height={1000}
        />
        <h1 className="text-[#191919] mb-[1.25rem] text-2xl font-semibold">Enjoying RenewMe?</h1>
        <div className="font-medium text-[#363636] mb-[1.25rem]">
          <p className="mb-2">We would love to hear from you!</p>
          <p>
            Please take a few minutes to complete our survey and provide us with feedback on your
            experience so far. Your input is invaluable to us as we strive to enhance and improve
            RenewMe for all! Thank you for being a part of our mission of mental health awareness!
          </p>
        </div>
        <a
          href="https://form.typeform.com/to/euOLT3Wv"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[.875rem] underline underline-offset-4 w-full"
          onClick={handleSurveyClick}
        >
          <Button
            className="bg-[#00C0C5] w-full hover:bg-[#2ba7ac] rounded-[.625rem] mb-[1.25rem] transition-all"
            onClick={handleSurveyClick}
          >
            Share your thoughts!
          </Button>
        </a>

        <div className="w-full flex flex-col items-center text-[12px] text-[#7C7C7C] font-medium">
          <p className="w-full text-center max-w-[240px] mb-[1.25rem]">
            Join our global community supporting a mission of life balance.{' '}
          </p>
          <div className="flex justify-between w-full">
            <a href="https://www.myrenewme.com" target="_blank" rel="noopener noreferrer">
              www.myrenewme.com
            </a>
            <p>Balance is better together.</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SurveyDialog;
