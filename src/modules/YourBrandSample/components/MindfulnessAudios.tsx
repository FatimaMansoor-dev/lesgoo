import React, { useEffect, useRef, useState } from 'react';
import WaveSurfer from 'wavesurfer.js';

import Image from 'next/image';

import { imageDomainUrl } from 'shared/constants/Assets';

import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from 'src/components/ui/carousel';
import { cn } from 'src/lib/utils';

import { Loader2, Pause, Play } from 'lucide-react';

// import { useRouter } from 'next/router';
import { MINDFULNESS_AUDIOS_CONTENTS } from '../constants/mindful-audios';
import Container from './Container';

const MindfulnessAudio: React.FC = () => {
  const [audioApi, setAudioApi] = useState<CarouselApi | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeAudio, setActiveAudio] = useState<number | null>(null);
  const [audioDuration, setAudioDuration] = useState<string>('00:00');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const waveSurferRef = useRef<WaveSurfer | null>(null);
  const audioUrlRef = useRef<string | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [showLeftGradient, setShowLeftGradient] = useState(false);
  const [showRightGradient, setShowRightGradient] = useState(true);
  // const router = useRouter();
  const waveformRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!audioApi) {
      return;
    }

    const onSelect = () => {
      const selectedIndex = audioApi.selectedScrollSnap();
      setCurrentIndex(selectedIndex);
      setActiveAudio(selectedIndex);
      setShowLeftGradient(selectedIndex > 0);
      setShowRightGradient(selectedIndex < MINDFULNESS_AUDIOS_CONTENTS.length - 1);
    };

    audioApi.on('select', onSelect);
    onSelect(); // Initial check

    return () => {
      audioApi.off('select', onSelect);
    };
  }, [audioApi]);

  useEffect(() => {
    const hasWaveform = waveformRef.current?.querySelector('wave');
    if (!hasWaveform) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }

    if (activeAudio !== null) {
      const audioUrl = `${imageDomainUrl}/YourBrandSample/Audios/${MINDFULNESS_AUDIOS_CONTENTS[activeAudio].audio}`;
      audioUrlRef.current = audioUrl;

      waveSurferRef.current = WaveSurfer.create({
        container: '#waveform',
        waveColor: '#D5D5D5',
        progressColor: '#F07E58',
        cursorColor: '#F07E58',
        barWidth: 3,
        barRadius: 5,
        height: 50,
        barGap: 2, // Add a little bit gap between waveforms
      });

      waveSurferRef.current.load(audioUrl);

      waveSurferRef.current.on('ready', () => {
        if (waveSurferRef.current) {
          const duration = waveSurferRef.current.getDuration();
          setAudioDuration(formatTime(duration));
          setIsLoading(false);
        }
      });

      waveSurferRef.current.on('play', () => setIsPlaying(true));
      waveSurferRef.current.on('pause', () => setIsPlaying(false));
      waveSurferRef.current.on('finish', () => setIsPlaying(false));
    }

    return () => {
      if (waveSurferRef.current) {
        waveSurferRef.current.destroy();
        waveSurferRef.current = null;
      }
    };
  }, [activeAudio]);

  const handlePlayPause = (index: number) => {
    if (activeAudio === index) {
      if (waveSurferRef.current) {
        waveSurferRef.current.isPlaying()
          ? waveSurferRef.current.pause()
          : waveSurferRef.current.play();
      }
    } else {
      setActiveAudio(index);
    }
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <Container className="w-full mb-[26.5px]" id="mindfulness-audios">
      <div className="mb-4 flex justify-between items-center">
        <div>
          <h1 className="font-semibold text-[22px] text-[#303030] font-['Urbanist']">Mindfulness</h1>
          <p className="text-[14px] text-[#707070] font-medium leading-[16.8px] font-['Urbanist']">
            Listen, relax, and unwind.
          </p>
        </div>
        {/* <button onClick={() => router.push('/meditations')} className='text-[#A74FB1] text-[14px] font-medium flex gap-2'>
          View more
          <Image
            src={`${imageDomainUrl}/KarmaTravelDemo/Icon/top-arrow.svg`}
            alt="top-arrow"
            width={20}
            height={20}
        />
        </button> */}
      </div>

      <div className="relative">
        <Carousel
          opts={{ align: 'start' }}
          setApi={setAudioApi}
          className="relative overflow-hidden"
        >
          <CarouselContent>
            {MINDFULNESS_AUDIOS_CONTENTS.map((sample, index) => (
              <CarouselItem key={index} className="basis-[53%]">
                <div
                  className={cn(
                    'w-full h-[76px] max-w-[185px] bg-transparent flex gap-2 rounded-2xl p-4 items-center cursor-pointer hover:bg-zinc-100/80 duration-150 transition-all ease-in-out',
                    {
                      'border-2 border-[#F07E58] transition-colors duration-300':
                        activeAudio === index,
                      'border-2 border-zinc-200 transition-colors duration-300':
                        activeAudio !== index,
                    }
                  )}
                  onClick={() => handlePlayPause(index)}
                >
                  <div className="rounded-full bg-zinc-200 min-w-[50px] aspect-square relative overflow-hidden flex justify-center items-center">
                    {activeAudio === index && isPlaying ? (
                      <Pause size={20} className="text-white ml-1 z-10" />
                    ) : (
                      <Play size={20} className="text-white ml-1 z-10 " />
                    )}
                    <Image
                      fill
                      className={cn('w-6 object-cover brightness-75', sample.className)}
                      src={`${imageDomainUrl}/YourBrandSample/Audio Banners/${sample.image}`}
                      alt={`${sample.title} Icon`}
                      quality={100}
                    />
                  </div>
                  <div>
                    <h1 className="font-semibold leading-tight text-[14px]">{sample.title}</h1>
                    <p className="text-[12px] text-[#A9A9A9] font-medium">{sample.genre}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious
            className={cn(
              'absolute left-2 top-1/2 z-10 bg-[#F07E58] hover:bg-[#d26d4b] border-transparent text-white hover:text-white flex items-center justify-center',
              currentIndex === 0 && 'hidden'
            )}
          />
          <CarouselNext
            className={cn(
              'absolute right-2 top-1/2 z-10 bg-[#F07E58] hover:bg-[#d26d4b] border-transparent text-white hover:text-white flex items-center justify-center',
              currentIndex === MINDFULNESS_AUDIOS_CONTENTS.length - 1 && 'hidden'
            )}
          />
        </Carousel>

        <div
          className={cn(
            'absolute top-0 left-0 h-full w-12 bg-gradient-to-r from-white to-transparent pointer-events-none transition-opacity duration-1000 ease-in-out',
            showLeftGradient ? 'opacity-100' : 'opacity-0'
          )}
        />
        <div
          className={cn(
            'absolute top-0 right-0 h-full w-[12rem] bg-gradient-to-l from-white to-transparent pointer-events-none transition-opacity duration-300 ease-in-out',
            showRightGradient ? 'opacity-100' : 'opacity-0'
          )}
        />
      </div>

      <div className="w-full border-2 border-[#F07E58] rounded-2xl mt-2.5 h-[76px] p-4 flex items-center justify-between">
        {activeAudio !== null && isPlaying ? (
          <div
            className="rounded-full bg-[#F07E58] hover:bg-[#d36c49] duration-150 transition-all ease-in-out cursor-pointer h-[50px] aspect-square flex items-center justify-center"
            onClick={() => handlePlayPause(activeAudio)}
          >
            <Pause size={20} className="text-white" />
          </div>
        ) : (
          <div
            className="rounded-full bg-[#F07E58] hover:bg-[#d36c49] duration-150 transition-all ease-in-out cursor-pointer h-[50px] aspect-square flex items-center justify-center"
            onClick={() => handlePlayPause(activeAudio !== null ? activeAudio : 0)}
          >
            <Play size={20} className="text-white ml-1" />
          </div>
        )}
        <div id="waveform" ref={waveformRef} className="flex-1 h-12 mx-4 relative">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <Loader2 size={20} className="text-[#F07E58] animate-spin" />
            </div>
          )}
        </div>
        <p className="text-sm text-zinc-400">{audioDuration}</p>
      </div>
    </Container>
  );
};

export default MindfulnessAudio;
