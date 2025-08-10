import Image from 'next/image';

const features = [
  {
    title: 'One Link to Share It All',
    description: 'Showcase your socials, brand, and purpose in one easy-to-manage profile.',
  },
  {
    title: 'Wellness-Driven Design',
    description:
      "Whether you're a creator or a company, your page reflects balance, intention, and authenticity.",
  },
  {
    title: 'Simple & Powerful Controls',
    description:
      'Update your details, track engagement, and stay in control—all in just a few clicks.',
  },
];

const ConnectAudience = () => {
  return (
    <div className="order-2 lg:order-1 flex flex-col gap-[23px] 2xl:gap-[43px] justify-center items-center pb-[54px] sm:pb-0 sm:py-[50px] 2xl:py-[50px] lg:w-1/2 2xl:w-auto">
      <div className="w-[170px] lg:w-[220px] xl:w-auto">
        <Image
          src={'/assets/Home/svg/logo-purple.svg'}
          alt="logo-purple"
          width={252}
          height={48}
          className="md:h-[48px] h-[22px]"
        />
      </div>
      <div className="flex flex-col gap-[32px] sm:gap-[40px] xl:gap-[50px] 2xl:gap-[50px]">
        <div className="font-['Gilroy'] text-[20px] sm:text-[30px] xl:text-[40px] 2xl:text-[50px] font-medium text-center leading-[24px] sm:leading-[35px] xl:leading-[50px] 2xl:leading-[60px]">
          Connect your audience, and stay aligned with wellness.
        </div>
        <div className="flex flex-col justify-between gap-[28px] lg:gap-[20px] xl:gap-[25px] 2xl:gap-[50px] 2xl:-ml-[37.5px]">
          {features.map((item, index) => (
            <div key={index} className="flex items-start gap-[10px] xl:gap-[16px] 2xl:gap-[28px]">
              <Image
                src={'/assets/Home/svg/check-purple.svg'}
                alt="check-purple"
                width={46}
                height={46}
                className="size-[23px] sm:size-[34px] xl:size-[38px] 2xl:size-[43px]"
              />
              <div className=" flex flex-col gap-[6px] 2xl:gap-[13px]">
                <div className="text-[20px] sm:text-[26px] xl:text-[30px] 2xl:text-[32px] font-semibold leading-[24px] sm:leading-[30px] xl:leading-[36px] 2xl:leading-[38px] font-['Gilroy']">
                  {item.title}
                </div>
                <div className="sm:text-[19px] xl:text-[22px] 2xl:text-[25px] leading-[23px] sm:leading-[26px] xl:leading-[33px] font-['Gilroy']">
                  {item.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConnectAudience;
