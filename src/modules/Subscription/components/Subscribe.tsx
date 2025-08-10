import { useState } from 'react';

import Link from 'next/link';

import { Checkbox } from 'src/components/ui/checkbox';
import { createStripeSubscription } from 'src/services/subscription-service';

const Subscribe = () => {
  const [selectedPlan, setSelectedPlan] = useState('12 months');
  const [termsIsChecked, setTermsIsChecked] = useState(false);
  const [error, setError] = useState<string>('');

  const handleSubscribe = async () => {
    if (!termsIsChecked) return;
    const planId = selectedPlan === '1 month' ? 9 : 10;
    const result = await createStripeSubscription({ planId });
    if (result.errors) {
      setError(result.errors);
    } else if (result.sessionUrl) {
      window.location.href = result.sessionUrl;
    }
  };

  return (
    <div className="mt-[64.87px]">
      <div className="flex gap-7 justify-center">
        <div
          onClick={() => setSelectedPlan('1 month')}
          className={`${
            selectedPlan === '1 month' ? ' border-[#A850B2]' : 'border-transparent'
          } border-[2px] bg-[#A850B20D] rounded-[7px] max-w-[132px] w-full h-[178px] flex flex-col items-center pt-[29px] cursor-pointer`}
        >
          <p className="text-[#909AAC] text-[14px] font-['Urbanist'] font-bold leading-[17px]">
            1 MONTH
          </p>
          <h2 className="text-[22px] font-['Urbanist'] font-semibold leading-[26px] mt-[30px]">
            $ 9.99
            <span className="text-[#7B7C7D] text-[14px] font-semibold leading-[17px]">/mo.</span>
          </h2>
        </div>
        <div
          onClick={() => setSelectedPlan('12 months')}
          className={`${
            selectedPlan === '12 months' ? ' border-[#A850B2]' : 'border-transparent'
          } border-[2px] bg-[#A850B20D] rounded-[7px] max-w-[132px] w-full h-[178px] flex flex-col items-center pt-[29px] cursor-pointer`}
        >
          <p className="text-[#909AAC] text-[14px] font-['Urbanist'] font-bold leading-[17px]">
            YEARLY
          </p>
          <h2 className="text-[22px] font-['Urbanist'] font-semibold leading-[26px] mt-[30px]">
            $ 6.99
            <span className="text-[#7B7C7D] text-[14px] font-semibold leading-[17px]">/mo.</span>
          </h2>
          <span className="bg-[#A850B2] rounded-[30px] h-[24px] mt-3 text-white font-['Urbanist'] text-[11px] font-semibold px-[11px] flex items-center">
            20% Off
          </span>
        </div>
      </div>
      <div className="mt-[44px] flex items-center flex-col">
        <p className="text-[#909AAC] font-['Urbanist'] text-sm leading-[22px] text-center">
          You can cancel anytime before next billing cycle.{' '}
        </p>
        <div className="flex justify-center gap-3 p-[12px_4.5px]">
          <Checkbox
            className="rounded-[3px] bg-[#F9F6F6] border-[#E2E2E2] border-[1px] w-[18px] h-[18px] check-main"
            id="terms"
            checked={termsIsChecked}
            onCheckedChange={() => setTermsIsChecked(!termsIsChecked)}
          />
          <label htmlFor="agree" className="text-[#909AAC] text-[10px] font-['Urbanist']">
            I agree to the{' '}
            <Link className="font-bold underline" href="/terms">
              Terms & Conditions
            </Link>{' '}
            and the{' '}
            <Link className="font-bold underline" href="/privacy">
              Privacy Policy
            </Link>
          </label>
        </div>
        <button
          onClick={handleSubscribe}
          className={`mt-1 bg-[#A850B2] text-white max-w-[259px] mx-auto w-full h-[46px] rounded-[36px] font-['Urbanist'] font-semibold leading-[17px] hover:bg-[#8e3f94] ${
            !termsIsChecked ? 'cursor-not-allowed' : ''
          }`}
          disabled={!termsIsChecked}
        >
          SUBSCRIBE NOW
        </button>
        {error && <p className="text-red-500 text-sm mt-2 text-center">{error}</p>}
      </div>
    </div>
  );
};

export default Subscribe;
