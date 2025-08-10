import Affirmations from 'modules/RenewmeHome/components/Affirmations';
import Confidence from 'modules/RenewmeHome/components/Confidence';
import Meditation from 'modules/RenewmeHome/components/Meditation';
import Music from 'modules/RenewmeHome/components/Music';
import Sleep from 'modules/RenewmeHome/components/Sleep';
import Layout from 'modules/RenewmeHome/layout';

const SoulscapePage = () => {
  return (
    <>
      <div className="bg-[url(/assets/Renewme-home/home-bg.png)] bg-cover bg-center bg-fixed min-h-screen">
        <Layout>
          <div className="md:py-[88px] py-[27px] flex flex-col gap-[54px] text-[#ffffff] lg:pl-[44px]">
            <div className="md:text-[48px] text-[24px] font-bold">Good Day</div>
            <div className="flex flex-col gap-[76px]">
              {/* <BalanceSlider swiperRef={swiperRef} /> */}
              {  <Sleep /> }
               <Meditation />
              <Affirmations />
              <Confidence />
              <Music /> 
            </div>
          </div>
        </Layout>
      </div>
    </>
  );
};

export default SoulscapePage;
