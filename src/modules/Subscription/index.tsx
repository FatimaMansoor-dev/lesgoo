import React from 'react';
import Slider from './components/Slider';
import Subscribe from './components/Subscribe';
import Terms from './components/Terms';

const Subscription: React.FC = () => {
  return (
    <div className="relative flex w-screen flex-col items-center transition-all duration-150 ease-in-out my-[38px]">
      <div className="max-w-[375px] mx-auto w-full relative px-[19px]">
        <Slider />
        <Subscribe />
        <Terms />
      </div>
    </div>
  );
};

export default Subscription;
