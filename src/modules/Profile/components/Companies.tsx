import { useState } from 'react';

import Image from 'next/image';

import { imageDomainUrl } from 'shared/constants/Assets';

const Companies = () => {
  const [companies, setCompanies] = useState<string[]>([
    'Renew Center of Florida',
    'Renew Center of Florida',
    'RenewMe',
    'RenewMe',
  ]);

  const addCompany = () => {
    setCompanies([...companies, '']);
  };

  const updateCompany = (index: number, value: string) => {
    const updatedCompanies = [...companies];
    updatedCompanies[index] = value;
    setCompanies(updatedCompanies);
  };

  const saveCompanies = () => {
    // console.log('companies', companies);
  };

  return (
    <div className="relative flex w-screen flex-col items-center transition-all duration-150 ease-in-out font-['Urbanist']">
      <div className="mb-9 w-full max-w-[375px] pt-[14px]">
        <h2 className="mb-[17px] text-[22px] font-semibold text-center leading-[26px]">
          Companies
        </h2>
        <div className="bg-[#FBFBFB] p-[33px_25px]">
          {companies.map((company, index) => (
            <div key={index} className="mb-[19px] flex items-center gap-2">
              <input
                type="text"
                value={company}
                onChange={e => updateCompany(index, e.target.value)}
                className="outline-none border border-[#000] focus:border-black p-[15px_14px] text-[14px] rounded-[8px] w-full h-[47px]"
              />
            </div>
          ))}
          <button
            onClick={addCompany}
            className="text-[#A850B2] text-sm font-medium leading-[17px] mt-[19px] w-full flex gap-[9px]"
          >
            <Image
              src={`${imageDomainUrl}/Profile/Icon/plus.svg`}
              alt="plus"
              height={13}
              width={13}
            />
            Add New
          </button>
          <button
            onClick={saveCompanies}
            className="bg-[#A850B2] hover:bg-[#8e3f94] mt-[18px] rounded-[22px] h-[45px] text-[14px] font-semibold text-center leading-[17px] w-full text-white"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Companies;
