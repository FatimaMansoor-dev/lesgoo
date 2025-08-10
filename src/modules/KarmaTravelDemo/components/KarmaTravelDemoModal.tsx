import TermsModal from 'modules/YourBrandSample/components/TermsModal';
import React, { useState } from 'react';

import Image from 'next/image';

import { imageDomainUrl } from 'shared/constants/Assets';

import { Mail, X } from 'lucide-react';

interface ModalProps {
  listId?: string;
  onTermsOpen: () => void;
}

const KarmaTravelDemoModal: React.FC<ModalProps> = ({ listId, onTermsOpen }) => {
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
      <div className="relative shadow-lg w-[306px] rounded-[14px]">
        <button
          className="absolute top-[17px] right-[18.25px]"
          onClick={() => {
            onTermsOpen();
          }}
        >
          <X
            className="border border-[#898989] text-[#898989] rounded-full text-lg p-[2px]"
            size={16}
          />
        </button>
        <div className="bg-white w-full rounded-[11px]">
          <div className="flex flex-col justify-center items-center pt-[32.75px]">
            <Image
              src={`${imageDomainUrl}/KarmaTravelDemo/Icon/plane.svg`}
              alt="logo"
              height={62}
              width={62}
              className="rounded-t-[5px]"
            />
            <Image
              src={`${imageDomainUrl}/KarmaTravelDemo/Icon/hello-traveler.svg`}
              alt="HeyThere"
              width={150}
              height={56}
              className="mt-[24.5px]"
            />
          </div>
          <div className="flex flex-col justify-center items-center mt-2">
            <p className="w-full max-w-[255px] text-[14px] leading-[19px] font-['Urbanist'] text-[#191919] text-center">
              Travel mindfully, embrace the present, and make every destination meaningful.
            </p>
            <div className="mt-[25px]">
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
              className="w-[256px] h-[44px] bg-[#132979] rounded-full flex justify-center items-center mt-[16px] mb-[32.75px] text-white font-semibold text-[14px]"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
      {isTermsOpen && (
        <TermsModal onClose={() => setIsTermsOpen(false)} buttonClass="bg-[#132979]" />
      )}{' '}
    </div>
  );
};

export default KarmaTravelDemoModal;
