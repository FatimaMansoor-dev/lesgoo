import { FC, useEffect, useState } from 'react';

import Image from 'next/image';

import { imageDomainUrl } from 'shared/constants/Assets';

import { Button } from 'src/components/ui/button';

import { X } from 'lucide-react';

import BrevoForm from './brevo-form';

interface ContactDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactDialog: FC<ContactDialogProps> = ({ isOpen, onClose }: ContactDialogProps) => {
  const [showDialog, setShowDialog] = useState(true);

  const [countdown, setCountdown] = useState(10);
  const [isDoneEnabled, setIsDoneEnabled] = useState(false);

  useEffect(() => {
    let intervalId: any;
    if (isOpen && countdown > 0) {
      intervalId = setInterval(() => {
        setCountdown(prevCountdown => prevCountdown - 1);
      }, 1000);
    }

    if (countdown === 0) {
      setIsDoneEnabled(true);
    }

    // eslint-disable-next-line
    return () => clearInterval(intervalId);
  }, [isOpen, countdown]);

  useEffect(() => {
    // Check local storage on component mount
    const hasSeenDialog = localStorage.getItem('hasSeenContactDialog');
    if (hasSeenDialog) {
      setShowDialog(false);
    }
  }, []);

  const handleClose = () => {
    // Update local storage and close dialog
    localStorage.setItem('hasSeenContactDialog', 'true');
    setShowDialog(false);
    onClose(); // Call the original onClose prop
  };

  if (!isOpen || !showDialog) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 font-['Gilroy'] p-4">
      {/* Ensures full screen and centers content */}
      <div className="flex flex-col w-full h-full md:flex-row bg-white md:m-10 max-w-[800px] rounded-xl">
        <div className="relative hidden md:block md:basis-[60%] h-full">
          <Image
            src={`${imageDomainUrl}/Code/lisa-photo-1.png`}
            alt="Lisa"
            width={400}
            height={400}
            className="object-cover h-full rounded-l-xl"
          />
          <div className="absolute bottom-0 left-0 m-2 rounded-lg bg-white p-2 text-xs shadow-2xl">
            <h1 className="font-semibold">Dr. Lisa Palmer</h1>
            <p className="text-[#3A3A3B]">
              Founder @ <span>Renew</span>
              <span className="text-[#3A3A3B]">Me</span>
            </p>
          </div>
        </div>

        <div className="flex flex-col basis-full h-full p-4 md:p-8 justify-between overflow-auto relative">
          <button className="absolute top-[6px] right-[6px] md:hidden block" onClick={handleClose}>
            <X className="p-1 text-[#898989] rounded-full text-lg" />
          </button>
          <div className="flex flex-row justify-between p-4 md:p-0">
            <Image
              src={`${imageDomainUrl}/Code/hey-there.png`}
              alt="RenewMe Logo"
              className="h-16 w-32 md:h-20 md:w-44"
              width={2560}
              height={1024}
            />
            <Image
              src={`${imageDomainUrl}/Code/renewme-icon.png`}
              alt="RenewMe Logo"
              className="h-8 w-8 md:h-14 md:w-14"
              width={2560}
              height={1024}
            />
          </div>

          <div className="px-4 pb-8 md:pb-4 md:px-0">
            <p className="mb-4 text-sm leading-5">
              Your well-being is super important to us! Check out RenewMe for a dose of mindfulness
              and motivation while you enjoy your day. Let us know what you think, and join us in
              spreading mental health awareness worldwide.
            </p>
            <p className="mb-4 text-sm">Cheers to a more balanced world!</p>

            <div className="flex items-center gap-2 md:hidden">
              <Image
                src={`${imageDomainUrl}/Code/lisa-photo-2.png`}
                alt="Lisa"
                className="h-8 w-8 rounded-full"
                width={2560}
                height={1024}
              />
              <div className="text-sm">
                <h1 className="font-semibold">Dr. Lisa Palmer</h1>
                <p className="text-[#3A3A3B]">
                  Founder @ <span>Renew</span>
                  <span className="text-[#3A3A3B]">Me</span>
                </p>
              </div>
            </div>
          </div>

          <BrevoForm onClose={handleClose} />

          {/* Button Done */}
          <Button
            type="button"
            onClick={handleClose} // Call handleClose when clicked
            disabled={!isDoneEnabled}
            className="bg-[#00C6C9] hover:bg-[#00C6C9]/80 text-white rounded-xl p-2 w-full font-semibold mt-4"
          >
            {isDoneEnabled ? 'Done' : `Done in ${countdown}`}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ContactDialog;
