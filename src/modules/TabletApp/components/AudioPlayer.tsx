import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';

import Image from 'next/image';

import { imageDomainUrl } from 'shared/constants/Assets';

import { Slider } from 'src/components/ui/slider';
import { cn } from 'src/lib/utils';

import {
  ChevronDown,
  LucideSkipBack,
  LucideSkipForward,
  PauseCircle,
  PlayCircle,
  Volume,
  Volume1,
  Volume2,
  VolumeX,
} from 'lucide-react';

interface Track {
  title: string;
  category: string;
  image: string;
  className: string;
  audio?: string;
  video?: string;
}

interface AudioPlayerProps {
  currentTrack: Track | null;
  currentTrackList: Track[];
  setCurrentTrack: (track: Track | null) => void;
  isPlayerVisible: boolean;
  isPlaying: boolean;
  setIsPlaying: (isPlaying: boolean) => void;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({
  currentTrack,
  currentTrackList,
  setCurrentTrack,
  isPlayerVisible,
  isPlaying,
  setIsPlaying,
}) => {
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(1);
  const [volumeIconKey, setVolumeIconKey] = useState(0);

  const audioRef = useRef<HTMLAudioElement>(null);

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleSeek = (value: number[]) => {
    if (audioRef.current) {
      audioRef.current.currentTime = value[0];
      setCurrentTime(value[0]);
    }
  };

  const handleVolumeChange = (value: number[]) => {
    if (audioRef.current) {
      audioRef.current.volume = value[0];
      setVolume(value[0]);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const handleNextTrack = () => {
    if (currentTrack && currentTrackList.length > 0) {
      const currentIndex = currentTrackList.findIndex(track => track.title === currentTrack.title);
      let nextIndex = (currentIndex + 1) % currentTrackList.length;

      // Find the next track with an audio field
      while (!currentTrackList[nextIndex].audio) {
        nextIndex = (nextIndex + 1) % currentTrackList.length;
        if (nextIndex === currentIndex) {
          // If no next audio track is found, return
          return;
        }
      }

      setCurrentTrack(currentTrackList[nextIndex]);
      setIsPlaying(true);
    }
  };

  const handlePreviousTrack = () => {
    if (currentTrack && currentTrackList.length > 0) {
      const currentIndex = currentTrackList.findIndex(track => track.title === currentTrack.title);
      let previousIndex = (currentIndex - 1 + currentTrackList.length) % currentTrackList.length;

      // Find the previous track with an audio field
      while (!currentTrackList[previousIndex].audio) {
        previousIndex = (previousIndex - 1 + currentTrackList.length) % currentTrackList.length;
        if (previousIndex === currentIndex) {
          // If no previous audio track is found, return
          return;
        }
      }

      setCurrentTrack(currentTrackList[previousIndex]);
      setIsPlaying(true);
    }
  };

  const getVolumeIconKey = (volume: number) => {
    if (volume === 0) {
      return 0;
    } else if (volume < 0.5) {
      return 1;
    } else if (volume < 0.8) {
      return 2;
    } else {
      return 3;
    }
  };

  const renderVolumeIcon = () => {
    switch (volumeIconKey) {
      case 0:
        return <VolumeX className="text-zinc-500 w-6 h-6" />;
      case 1:
        return <Volume className="text-zinc-500 w-6 h-6" />;
      case 2:
        return <Volume1 className="text-zinc-500 w-6 h-6" />;
      case 3:
        return <Volume2 className="text-zinc-500 w-6 h-6" />;
      default:
        return null;
    }
  };

  useEffect(() => {
    setVolumeIconKey(getVolumeIconKey(volume));
  }, [volume]);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, currentTrack]);

  return (
    <AnimatePresence>
      {currentTrack && (
        <motion.div
          initial={{ y: '100%' }}
          animate={{ y: isPlayerVisible ? 0 : '100%' }}
          exit={{ y: '300%' }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className={cn('fixed bottom-0 z-10 w-full bg-transparent md:mr-8 py-4 sm:py-4')}
        >
          <div className="px-4 sm:px-4">
            <div className="w-full p-4 sm:p-6 shadow-xl bg-white outline outline-2 outline-zinc-100 rounded-3xl flex flex-col sm:flex-row gap-4 justify-between items-center relative">
              {currentTrack?.audio && (
                <>
                  <div className="flex gap-4 items-center justify-between sm:basis-[60%] w-full">
                    <Image
                      className="w-16 h-16 rounded-2xl object-cover"
                      src={`${imageDomainUrl}/TabletApp/Audio Banners/${currentTrack.image}`}
                      width={200}
                      height={200}
                      alt="Audio Banner"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold leading-none sm:max-w-[140px]">
                        {currentTrack.title}
                      </h4>
                      <p className="text-sm">{currentTrack.category}</p>
                    </div>
                    <ChevronDown
                      className="text-zinc-400 w-6 h-6 cursor-pointer sm:hidden"
                      onClick={() => setCurrentTrack(null)}
                    />
                  </div>
                  <audio
                    ref={audioRef}
                    src={`${imageDomainUrl}/TabletApp/Audios/${currentTrack.audio}`}
                    onTimeUpdate={handleTimeUpdate}
                  />
                  <div className="flex flex-col gap-2 sm:gap-4 items-center justify-center sm:basis-full">
                    <div className="flex gap-2 items-center">
                      <LucideSkipBack
                        className="text-zinc-400 w-8 h-8 cursor-pointer"
                        onClick={handlePreviousTrack}
                      />
                      {isPlaying ? (
                        <PauseCircle
                          className="text-zinc-400 w-10 h-10 cursor-pointer"
                          onClick={handlePlayPause}
                        />
                      ) : (
                        <PlayCircle
                          className="text-zinc-400 w-10 h-10 cursor-pointer"
                          onClick={handlePlayPause}
                        />
                      )}
                      <LucideSkipForward
                        className="text-zinc-400 w-8 h-8 cursor-pointer"
                        onClick={handleNextTrack}
                      />
                    </div>
                    <div className="flex gap-2 text-zinc-300 items-center w-full">
                      <Slider
                        className="bg-zinc-100 text-zinc-500 rounded-full"
                        value={[currentTime]}
                        max={audioRef.current?.duration || 0}
                        onValueChange={handleSeek}
                        thumbClassName="border-[3px] border-zinc-300"
                      />
                      <p className="text-sm">{formatTime(currentTime)}</p>
                    </div>
                  </div>
                  <div className="hidden sm:flex gap-2 items-center sm:basis-[50%]">
                    <div className="relative w-6 h-6">
                      <AnimatePresence>
                        <motion.div
                          key={volumeIconKey}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute"
                        >
                          {renderVolumeIcon()}
                        </motion.div>
                      </AnimatePresence>
                    </div>
                    <Slider
                      className="bg-zinc-100 text-zinc-500 h-1 rounded-full flex-1"
                      value={[volume]}
                      max={1}
                      step={0.01}
                      onValueChange={handleVolumeChange}
                      color="cyan"
                      thumbClassName="border-[3px] border-zinc-300"
                    />
                  </div>
                  <ChevronDown
                    className="text-zinc-400 w-14 h-14 cursor-pointer hidden sm:block"
                    onClick={() => setCurrentTrack(null)}
                  />
                </>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AudioPlayer;
