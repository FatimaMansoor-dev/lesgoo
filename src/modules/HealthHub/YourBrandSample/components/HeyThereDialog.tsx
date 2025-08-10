import React, { useEffect, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { imageDomainUrl } from 'shared/constants/Assets';

import { Button } from 'src/components/ui/button';
import { Dialog, DialogContent } from 'src/components/ui/dialog';
import { cn } from 'src/lib/utils';

interface HeyThereDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const HeyThereDialog: React.FC<HeyThereDialogProps> = ({ isOpen, onClose }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  if (!isMounted) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className={cn(
          "bg-white border-2 border-zinc-200 font-['Gilroy'] max-w-[320px] flex flex-col items-start justify-start text-[#505050] rounded-3xl p-8"
        )}
        onInteractOutside={e => e.preventDefault()}
      >
        <Image
          className="w-12 mb-3"
          src={`${imageDomainUrl}/YourBrandSample/renewme-logo-teal.svg`}
          width={400}
          height={400}
          alt="Renewme Logo Teal"
        />
        <Image
          className="w-40 mb-3"
          src={`${imageDomainUrl}/YourBrandSample/hey-there-header.svg`}
          width={400}
          height={400}
          alt="Hey There Header"
        />
        <p className="text-base mb-2 font-medium max-w-[90%] leading-relaxed">
          Welcome to <span className="text-[#00C0C5] font-semibold">RenewMe!</span>
        </p>
        <p className="text-base mb-4 font-medium max-w-[90%] leading-relaxed">
          We&apos;re thrilled to enhance your journey towards well-being and mindfulness. Embrace
          balance and harmony with us!
        </p>
        <section className="flex gap-3 w-full items-center">
          <Image
            className="w-10 h-10 object-cover rounded-full"
            src={`${imageDomainUrl}/YourBrandSample/dr-lisa-palmer.png`}
            width={400}
            height={400}
            alt="RenewMe Logo Teal"
          />
          <div className="text-sm">
            <h2 className="font-semibold">Dr. Lisa Palmer</h2>
            <p>Founder @ RenewMe</p>
          </div>
        </section>
        <div className="w-full">
          <div className="w-full bg-zinc-200 h-[1px] my-4" />
          <div className="items-top flex space-x-2 mb-4">
            <input
              type="checkbox"
              id="accept-terms"
              checked={isChecked}
              onChange={handleCheckboxChange}
              className="form-checkbox h-4 w-4 text-[#00C0C5] border-gray-300 rounded focus:ring-[#00C0C5]"
            />
            <div className="grid gap-1.5 leading-none">
              <label htmlFor="accept-terms" className="text-sm font-semibold leading-none">
                Accept terms and conditions
              </label>
              <p className="text-xs text-gray-500">
                You agree to our{' '}
                <Link className="font-medium underline" href="/terms">
                  Terms and Conditions
                </Link>{' '}
                and{' '}
                <Link className="font-medium underline" href="/privacy">
                  Privacy Policy.
                </Link>
              </p>
            </div>
          </div>
        </div>
        <Button
          onClick={onClose}
          disabled={!isChecked}
          className={cn(
            'bg-[#00C0C5] text-white py-2 px-4 rounded-2xl hover:bg-[#309ca0] transition-all duration-150 ease-in-out w-full',
            !isChecked && 'opacity-50 cursor-not-allowed'
          )}
        >
          Continue
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default HeyThereDialog;
