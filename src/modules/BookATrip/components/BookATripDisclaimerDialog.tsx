import React, { FC, ReactNode, useEffect, useState } from 'react';

import Image from 'next/image';

import { imageDomainUrl } from 'shared/constants/Assets';

import { Button } from 'src/components/ui/button';

interface CustomDialogProps {
  isOpen: boolean;
  children: ReactNode;
}

const CustomDialog: FC<CustomDialogProps> = ({ isOpen, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="flex h-fit min-w-[30vw] gap-0 rounded-2xl bg-white p-0 text-xs m-4 xl:m-0">
        {children}
      </div>
    </div>
  );
};

const BookATripDisclaimerDialog: React.FC = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleAgree = () => {
    setIsDialogOpen(false);
    localStorage.setItem('hasAgreedToBookTripDisclaimer', 'true');
  };

  useEffect(() => {
    const hasAgreed = localStorage.getItem('hasAgreedToBookTripDisclaimer');
    if (!hasAgreed) {
      setIsDialogOpen(true);
    }
  }, []);

  return (
    <CustomDialog isOpen={isDialogOpen}>
      <div className="m-0 flex h-fit w-fit xl:max-w-[30vw] gap-0 rounded-2xl bg-white p-0 text-xs">
        <div className="flex h-full basis-full flex-col justify-between p-6 font-['Gilroy']">
          <div>
            <Image
              src={`${imageDomainUrl}/Code/renewme-icon.png`}
              alt="RenewMe Logo"
              className="mb-10 h-14 w-14"
              width={56}
              height={56}
            />
            <h2 className="text-xl font-bold mb-4">Disclaimer</h2>
            <div className="leading-5 w-full gap-4 flex flex-col mb-4">
              <p>Disclaimer: Third-Party Links on Book a Trip Page</p>
              <p>
                Please be aware that the links provided on the &quote;Book a Trip&quote; page within
                the RenewMe tablet application are not affiliated with, endorsed by, or under the
                control of RenewMe or its parent company. These links are provided solely for your
                convenience and reference.
              </p>
              <p>
                By clicking on these links, you will be redirected to third-party travel booking
                websites that are not associated with RenewMe. We encourage you to review the terms
                of service, privacy policies, and any other relevant information provided by these
                third-party websites before making any travel arrangements or providing personal
                information.
              </p>
              <p>
                RenewMe shall not be held liable for any issues, damages, or losses that may arise
                from your use of the third-party travel booking websites or their services accessed
                through the links on the &quote;Book a Trip&quote; page.
              </p>
            </div>
          </div>

          <div>
            <Button
              className="mb-4 w-full rounded-xl bg-[#00C6C9] hover:bg-[#00C6C9]/80"
              onClick={handleAgree}
            >
              Okay, I agree!
            </Button>
            <div className="flex w-full items-center justify-center">
              <p className="w-64 text-center text-xs leading-4 text-zinc-400">
                Join our global community supporting a mission of life balance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </CustomDialog>
  );
};

export default BookATripDisclaimerDialog;
