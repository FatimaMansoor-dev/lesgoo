/* eslint-disable react/no-unescaped-entities */
import classNames from 'classnames';
import React from 'react';

import ArrowRightSvg from 'shared/assets/svg/arrow-right.svg';
import QouteSvg from 'shared/assets/svg/t-qoute.svg';

import { TESTIMONIALS } from '../constants';
import { WhatPeopleAreSayingWrapper } from './WhatPeopleAreSaying.styled';

interface Props {
  className?: string;
}

const WhatPeopleAreSaying: React.FC<Props> = ({ className }) => {
  return (
    <WhatPeopleAreSayingWrapper
      className={classNames(
        'relative flex w-screen flex-col bg-[#f07e58] pt-10 pb-10 sm:pb-28 md:pt-20',
        className
      )}
    >
      <div className="bg"></div>

      {/* <div className="pb-16 sm:pb-16 md:pb-24 lg:pb-32"> */}
      <div className="isolate flex justify-center">
        <h1 className="max-w-[250px] text-center font-['Gilroy'] text-3xl font-[500] text-black-1 md:max-w-full md:text-4xl lg:text-5xl xl:text-6xl">
          What People Are Saying...
        </h1>
      </div>
      <div className="pb-10 md:pb-20 testimonials grid grid-flow-col items-start gap-4 overflow-x-auto px-4 pt-10  md:gap-8 md:pt-20 lg:pt-24 ">
        {TESTIMONIALS.map((testimonial, testimonialIdx) => (
          <div
            key={testimonialIdx}
            className="testimonial relative min-w-[315px] rounded-xl md:min-w-[445px]"
          >
            <QouteSvg />
            <p className="text-center md:leading-relaxed md:text-xl text-base md:text-justify">
              "{testimonial.message}"
            </p>
            <div className="author-main">
              <div className="name">{testimonial.author}</div>
              <sub>{testimonial.title}</sub>
              <div className="place">{testimonial.place}</div>
            </div>
          </div>
        ))}
      </div>
      {/* </div> */}

      <div className="container isolate mx-auto flex flex-col items-center gap-6 px-6 md:gap-10 lg:gap-24">
        <h1 className="text-center font-['Gilroy'] text-3xl font-[500] text-black-1 md:text-4xl lg:text-5xl xl:text-6xl">
          Never miss an update <br />
          Join our mailing list.
        </h1>
        <div className="relative flex w-full rounded-[100px] bg-white md:max-w-[500px] lg:max-w-[730px]">
          <button className="w-full bg-orange-1 pl-4 hover:bg-orange-1/90 transition-all duration-100 ease-in-out py-5 font-['Gilroy'] text-base font-[400] text-white rounded-[100px] md:px-7 md:text-lg lg:text-xl flex items-center justify-center">
            {/* <a
              href="https://8cfacb5f.sibforms.com/serve/MUIFAAX9h86h45M--Ypehmbr_ISjNC95N5f5kvv3NufV_jGNvRr7X5M8d0LjwIMvUOo6efEv7PKo0O_dN1AzivVlB7-bqjcJugUlbB7NN_qQpUAIei3DIuGOt4wi9SlFvPvN4dpPTRfBaMP8OUV9czUf1l4hQSDXDYF3qPG4IZ93W0YcaWoS4hYVVypbU92C5i80jo0Jfz67TC5o"
              target="_blank"
              rel="noopener noreferrer"
            > */}
            <a
              href="https://lp.constantcontactpages.com/sl/qaayPHs?__cf_chl_tk=Go8d4C8ntTBZqun.PqToqcoNv0lRkmhIGyu9hmiXTAo-1738795668-1.0.1.1-R0BUSAHzNeJTgHmnzDY44.WRjAoIb21BhgNV.p2eoKE"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Stay Updated</span>
            </a>
            <span className="flex h-11 w-11 items-center justify-center rounded-[50%]">
              <ArrowRightSvg className="h-[40%] w-auto text-orange-1" />
            </span>
          </button>
        </div>
      </div>
    </WhatPeopleAreSayingWrapper>
  );
};

export default WhatPeopleAreSaying;
