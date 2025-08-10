const SubscriptionSuccessModal = () => {
  return (
    <div className="relative flex w-screen flex-col items-center transition-all duration-150 ease-in-out font-['Urbanist']">
      <div className="mb-9 w-full max-w-[375px] pt-[14px]">
        <div className="mt-[43px] px-[28px]">
          <p className="text-[#A850B2] text-[14px] font-medium leading-[20px] tracking-[0.2px] text-center">
            Active
          </p>
          <h1 className="leading-[20px] text-[20px] font-medium mt-[7px] text-center">
            Subscribed!
          </h1>
          <p className="text-[#4D5D71] text-sm leading-5 text-center mt-[100px]">
            Your subscription will renew monthly and give you access to RenewMe features.
          </p>
          <p className="text-[#4D5D71] text-sm leading-5 text-center mt-4">
            If you would like to stop recurring payments, you can do so before the next billing cycle..
            Unfortunately, we are unable to do so on your behalf.{' '}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionSuccessModal;
