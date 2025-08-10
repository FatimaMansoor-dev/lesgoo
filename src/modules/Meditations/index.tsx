import React, { useRef, useState } from 'react';

import Image from 'next/image';
import { useRouter } from 'next/router';

import { imageDomainUrl } from 'shared/constants/Assets';

import { ChevronLeft, ChevronRight } from 'lucide-react';

import Header from './components/Header';
import { MEDITATIONS_LIST } from './constants/meditations-list';

const ITEMS_PER_PAGE = 7;

const Meditations: React.FC = () => {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const totalPages = Math.ceil(MEDITATIONS_LIST.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedMeditations = MEDITATIONS_LIST.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const togglePlay = (index: number, audioSrc: string) => {
    if (!audioRef.current) {
      audioRef.current = new Audio(audioSrc);

      audioRef.current.onloadedmetadata = () => setDuration(audioRef.current?.duration || 0);
      audioRef.current.ontimeupdate = () => setCurrentTime(audioRef.current?.currentTime || 0);
      audioRef.current.onended = () => {
        setActiveIndex(null);
        setCurrentTime(0);
      };
    }

    if (activeIndex === index) {
      if (audioRef.current.paused) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = audioSrc;
        audioRef.current.load();
      }

      audioRef.current.play();
      setActiveIndex(index);
    }
  };

  const handleSeek = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      const seekTime = parseFloat(event.target.value);
      audioRef.current.currentTime = seekTime;
      setCurrentTime(seekTime);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const renderPaginationButtons = () => {
    const pages = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);

      if (currentPage > 4) {
        pages.push('...');
      }

      if (currentPage <= 4) {
        for (let i = 2; i <= 5; i++) {
          pages.push(i);
        }
        pages.push('...', totalPages);
      } else if (currentPage >= totalPages - 3) {
        for (let i = totalPages - 4; i < totalPages; i++) {
          pages.push(i);
        }
        pages.push(totalPages);
      } else {
        pages.push(currentPage - 1, currentPage, currentPage + 1);
        pages.push('...', totalPages);
      }
    }

    return pages.map((page, index) =>
      typeof page === 'number' ? (
        <button
          key={index}
          onClick={() => setCurrentPage(page)}
          className={`p-1 rounded-[4px] w-5 h-5 flex justify-center items-center text-[10px] font-semibold ${
            currentPage === page
              ? 'bg-[#A850B2] text-white'
              : 'bg-white border-[#808080] border-[1px] text-[#808080]'
          }`}
        >
          {page}
        </button>
      ) : (
        <span key={index} className="px-1 text-[#808080] text-sm">
          {page}
        </span>
      )
    );
  };

  return (
    <div className="relative flex w-screen flex-col items-center transition-all duration-150 ease-in-out">
      <div className="max-w-[375px] mx-auto w-full relative">
        <Header />
        <div className="bg-[#fafafa] p-[23px_20px] h-[calc(100vh-111px)] overflow-auto">
          <div className="flex flex-col gap-[23px]">
            {paginatedMeditations.map((meditation, index) => {
              const globalIndex = startIndex + index;
              const audioSrc = meditation.locked
                ? `${imageDomainUrl}/Meditations/Preview/${meditation.audio}`
                : `${imageDomainUrl}/Meditations/Audio/${meditation.audio}`;
              return (
                <div
                  key={index}
                  className="bg-white shadow-[0px_4px_14.1px_0px_#0000000A] rounded-xl p-[21px_22px_20px_21px] flex justify-between items-center"
                >
                  <div className="flex xs:gap-6 gap-4 items-center">
                    <button
                      onClick={() =>
                        meditation.locked
                          ? router.push('/login')
                          : togglePlay(globalIndex, audioSrc)
                      }
                    >
                      <Image
                        src={`${imageDomainUrl}/Meditations/Icon/${
                          meditation.locked
                            ? 'lock'
                            : activeIndex === index && audioRef.current && !audioRef.current.paused
                            ? 'pause'
                            : 'play'
                        }.svg`}
                        alt="icon"
                        height={44}
                        width={44}
                      />
                    </button>
                    <div className="xs:w-[162px]">
                      <h2 className='text-[#3A3A3B] font-bold leading-[16px] font-["Urbanist"]'>
                        {meditation.title}
                      </h2>
                      {activeIndex !== globalIndex && (
                        <p className='text-[#8A8A8A] text-[14px] leading-[14px] mt-[3px] font-["Urbanist"]'>
                          {meditation.genre}
                        </p>
                      )}
                      {activeIndex === globalIndex && (
                        <div className="mt-[6px] w-full">
                          <div className="relative w-full mt-2 h-[6px]">
                            <input
                              type="range"
                              min="0"
                              max={duration}
                              value={currentTime}
                              onChange={handleSeek}
                              className="w-full cursor-pointer appearance-none bg-transparent z-10 opacity-0 mt-[-6px] absolute"
                              style={{
                                WebkitAppearance: 'none',
                              }}
                            />
                            <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gray-200 rounded-full transform -translate-y-1/2" />
                            <div
                              className="absolute top-1/2 left-0 h-[2px] bg-[#A850B2] rounded-full transform -translate-y-1/2"
                              style={{ width: `${(currentTime / duration) * 100}%` }}
                            />
                            <div
                              className="absolute top-1/2 h-[6px] w-[6px] bg-[#A850B2] rounded-full transform -translate-y-1/2"
                              style={{
                                left: `calc(${(currentTime / duration) * 100}% - 6px)`,
                              }}
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <div
                    className={`leading-[22px] font-["Urbanist"] ${
                      meditation.locked
                        ? 'text-[#A850B2] text-[12px] font-semibold'
                        : 'text-[#858585] text-[14px]'
                    }`}
                  >
                    {meditation.locked ? (
                      <button onClick={() => togglePlay(globalIndex, audioSrc)}>
                        {activeIndex === globalIndex && audioRef.current && !audioRef.current.paused
                          ? 'Pause'
                          : 'Preview'}
                      </button>
                    ) : (
                      <p>{meditation.duration}</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex justify-center gap-[11px] mt-[39px] pb-4">
            <button
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className={`${
                currentPage === 1
                  ? 'border-[#CFCFCF] text-[#CFCFCF] cursor-not-allowed'
                  : 'border-[#808080] text-[#808080]'
              } border w-5 h-5 flex justify-center items-center rounded-[4px]`}
            >
              <ChevronLeft size={14} />
            </button>
            {renderPaginationButtons()}
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className={`${
                currentPage === totalPages
                  ? 'border-[#CFCFCF] text-[#CFCFCF] cursor-not-allowed'
                  : 'border-[#808080] text-[#808080]'
              } border w-5 h-5 flex justify-center items-center rounded-[4px]`}
            >
              <ChevronRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Meditations;
