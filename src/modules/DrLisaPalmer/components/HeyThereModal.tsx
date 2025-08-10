import TermsModal from 'modules/YourBrandSample/components/TermsModal';
import React, { useState } from 'react';

import Image from 'next/image';

import { imageDomainUrl } from 'shared/constants/Assets';

import { Mail, X } from 'lucide-react';

interface ModalProps {
  listId?: string;
  onTermsOpen: () => void;
}

const HeyThereModal: React.FC<ModalProps> = ({ listId, onTermsOpen }) => {
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [formStatus, setFormStatus] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await fetch('/api/addSubscriber', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, listId }),
      });

      if (response.ok) {
        setFormStatus('Thank you for subscribing!');
        sessionStorage.setItem('subscribed', 'true');
        setEmail('');
        setFormStatus('');
        onTermsOpen();
      } else {
        const errorData: { message?: string } = await response.json();
        setFormStatus(errorData.message ?? 'An error occurred. Please try again.');
      }
    } catch (error) {
      setFormStatus('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-10 ">
      <div className="relative shadow-lg w-[306px] mt-[-56px] rounded-[14px]">
        <div className="absolute top-[160px] left-[22px] z-[1]">
          <h2 className='text-[12px] font-["Urbanist"] text-[#76767B] font-semibold'>
            Dr. Lisa Palmer
          </h2>
          <p className='text-[11px] font-["Urbanist"] text-[#878885] mt-[6px]'>Founder @ RenewMe</p>
        </div>
        <button
          className="absolute top-[11px] right-[11.25px] z-[1]"
          onClick={() => {
            onTermsOpen();
          }}
        >
          <X className="border-[2px] border-[#898989] p-1 text-[#898989] rounded-full text-lg" />
        </button>
        <Image
          src={`${imageDomainUrl}/YourBrandSample/Ads/Lisa.png`}
          alt="Lisa"
          className="rounded-t-[14px]"
          width={306}
          height={343}
        />
        <div className="w-full rounded-b-[14px] relative z-[1] mt-[-120px]">
          <div className="flex flex-col justify-center items-center">
            <Image
              src={`${imageDomainUrl}/YourBrandSample/Ads/logo.png`}
              alt="logo"
              height={43.24}
              width={43.23}
              className="rounded-t-[5px]"
            />
            <Image
              src={`${imageDomainUrl}/DrLisaPalmer/Icon/hey-there.svg`}
              alt="HeyThere"
              width={134}
              height={56}
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="w-full max-w-[255px] text-[14px] leading-[19px] font-['Urbanist'] text-[#191919] text-center">
            Begin your journey to a more balanced life and join our mission for mental health awareness and a better world. 
            </p>
            <div className="mt-[15px]">
              <div className="flex items-center border border-[#4F3422] rounded-full p-[20px] w-[256px] h-[44px]">
                <Mail className="text-[#2D1715] pr-2 text-[15px]" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  onChange={e => setEmail(e.target.value)}
                  placeholder="adrian@renewme.com"
                  className="w-full focus:outline-none text-[#4F3422] placeholder:text-[#4F3422] placeholder:text-[14px]"
                />
              </div>
            </div>
            {formStatus && <p className="text-sm mb-4">{formStatus}</p>}
            <button
              onClick={() => {
                handleSubmit();
              }}
              className="w-[256px] h-[44px] bg-[#132979] rounded-full flex justify-center items-center mt-[24px] mb-[34px] text-white font-semibold text-[14px]"
            >
              Sign Up
            </button>
          </div>
        </div>
        <div className='bg-[linear-gradient(180deg,_rgba(255,255,255,0)_45%,#FFFFFF_60%)] h-full absolute top-0 w-full rounded-b-[14px]'></div>
      </div>
      {isTermsOpen && (
        <TermsModal onClose={() => setIsTermsOpen(false)} buttonClass="bg-[#132979]" />
      )}{' '}
    </div>
  );
};

export default HeyThereModal;
