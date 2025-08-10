import { useState } from 'react';

import Image from 'next/image';
import { useRouter } from 'next/router';

import { imageDomainUrl } from 'shared/constants/Assets';

import { cancelStripeSubscription } from 'src/services/subscription-service';

const ManageSubscription = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleCancelSubscription = async () => {
    setLoading(true);
    const result = await cancelStripeSubscription();
    setLoading(false);
    if (result.success) {
      router.push('/subscription');
    } else if (result.errors) {
      setError(result.errors);
    }
  };

  return (
    <div className="relative flex w-screen flex-col items-center transition-all duration-150 ease-in-out font-['Urbanist']">
      <div className="mb-9 w-full max-w-[375px] px-5">
        <div className="flex justify-between items-center">
          <div>
            <div
              onClick={() => router.push('/')}
              className="mb-[7px] mt-[29.02px] flex h-[27px] w-[89px] cursor-pointer items-center rounded-[24px] bg-[#F0F0F0] py-[3.38px]"
            >
              <div className="ml-[3.68px] flex h-[18.97px] w-[18.97px] items-center justify-center rounded-full bg-[#FFFFFF] text-center">
                <Image
                  src={`${imageDomainUrl}/MoodHub/Icon/main/renewme-logo.svg`}
                  alt="logo"
                  height={13.86}
                  width={13.86}
                />
              </div>
              <h4 className="ml-[5.38px] text-center font-['Urbanist'] text-[11px] font-medium text-[#000000]">
                RenewMe
              </h4>
            </div>
            <h2 className="text-[#303030] text-[22px] font-semibold mt-1 leading-[26px]">
              Profile
            </h2>
          </div>
          <button>
            <Image
              src={`${imageDomainUrl}/Meditations/Icon/ellipse-vertical.svg`}
              alt="ellipse-vertical"
              height={20}
              width={20}
            />
          </button>
        </div>
        <div className="flex items-center gap-[13px] mt-[32px] mb-[46px]">
          <Image
            src={`${imageDomainUrl}/Meditations/Icon/user-icon.svg`}
            alt="user-icon"
            height={52}
            width={52}
          />
          <div>
            <h2 className="text-[22px] font-semibold leading-[26px]">Dr Lisa Palmer</h2>
            <p className="text-[14px] leading-[17px] mt-[2px]">info@renewme.com</p>
          </div>
        </div>
        <div className="mb-[21px]">
          <h2 className="text-[22px] font-semibold leading-[26px] mb-[5px]">Plan & Billing</h2>
          <p className="text-[14px] leading-[17px]">Manage your plan and payments</p>
        </div>
        <div className="border-[#D8D8D8] border rounded-[20px] p-[27px_25px_27px_23px] flex items-start justify-between">
          <div>
            <p className="text-[14px] mb-2 leading-[17px]">Current Plan</p>
            <h2 className="font-semibold mb-2 leading-[17px]">Monthly Subscription</h2>
            <h2 className="text-[20px] font-semibold leading-[24px] mb-[14px]">$9.99</h2>
            <p className="text-[#919191] text-[14px] leading-[17px]">
              Renew at <span className="font-semibold">09 Sep 2025</span>
            </p>
          </div>
          <div className="bg-[#14AE5C1F] h-[17px] w-[54px] text-[#14AE5C] text-[12px] font-medium leading-[14px] flex gap-[5px] rounded-[20px] items-center justify-center">
            <span className="bg-[#14AE5C] w-[6px] h-[6px] rounded-full block"></span> Active
          </div>
        </div>
        {error && <p className="text-red-500 text-sm mt-2 text-center">{error}</p>}
        <div className="flex xs:gap-[23px] gap-[12px] mt-[23px]">
          <button
            onClick={handleCancelSubscription}
            className="bg-[#C00F0C0F] text-[#C00F0C] rounded-[10px] text-[14px] font-semibold h-[59px] xs:px-[16px] px-[5px] w-1/2"
            disabled={loading}
          >
            {loading ? 'Cancelling...' : 'Cancel Subscription'}
          </button>
          <button
            onClick={() => router.push('/subscription')}
            className="border-black border rounded-[10px] text-[14px] font-semibold h-[59px] xs:px-[16px] px-[5px] w-1/2"
          >
            Change Plan
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManageSubscription;
