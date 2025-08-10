import React from 'react';

interface SoulscapeFooterProps {
  title: string;
  classes?: string;
  headerClasses?: string;
  pTagRequired?: boolean;
}

const SoulscapeFooter: React.FC<SoulscapeFooterProps> = ({
  title,
  classes = '',
  headerClasses = '',
  pTagRequired = false,
}) => {
  return (
    <div className={`mt-[18px] flex min-h-[85px] max-w-[296px] py-[5.66px] flex-col items-center justify-center rounded-[8px] bg-[#E3F7F7] px-[8.41px] text-center mx-auto ${headerClasses}`}>
      <h3
        className={`font-['Urbanist'] text-[14px] leading-[16.8px] text-[#3A3A3B] font-medium ${classes}`}
      >
        &quot;{title}&quot;
      </h3>
      {pTagRequired && (
        <p className="text-[14px] font-medium mt-[1.68px] leading-[21px] text-[#898787]">
          Founder of RenewMe, Dr. Lisa Palmer
        </p>
      )}
    </div>
  );
};

export default SoulscapeFooter;
//font-semibold max-w-[156px]
