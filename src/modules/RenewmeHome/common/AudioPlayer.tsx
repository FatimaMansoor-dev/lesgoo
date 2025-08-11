// AudioPlayer.tsx
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';

import { AudioInterface, AudioPlayerRef } from './audio-player/components/core.interface';
import { iconPaths } from './audio-player/helpers/icons/icons';
import { formatTime } from './audio-player/helpers/utils/formatTime';
import getDeviceEventNames from './audio-player/helpers/utils/getDeviceEventNames';
import { getRangeBox } from './audio-player/helpers/utils/getRangeBox';

export const AudioPlayer = forwardRef<AudioPlayerRef, AudioInterface>(
  (
    {
      autoPlay = false,
      className = '',
      src,
      item = { premium: false, preview: null, title: null, album: { title: null } },
      subscriptionStatus = '',
      loop = false,
      preload = 'auto',
      backgroundColor = 'transparent',
      color = '#ffffff',
      width = '100%',
      style = {},
      sliderColor = '#2EA6FF',
      volume = 1,
      volumePlacement = 'top',
      hasKeyBindings = true,
      needControls = true,
      needVolumes = true,
      onPlay = () => {},
      onPause = () => {},
      onEnd = () => {},
      onLock = () => {},
      onError = () => {},
    },
    ref
  ) => {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const audioRef = useRef<HTMLAudioElement>(null);
    const currentlyDragged = useRef<HTMLDivElement | null>(null);
    const rewindPin = useRef<HTMLDivElement | null>(null);
    const volumePin = useRef<HTMLDivElement | null>(null);

    const [canPlay, setCanPlay] = useState<boolean>(preload === 'none');
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [progressBarPercent, setProgressBarPercent] = useState<number>(0);
    const [currentTime, setCurrentTime] = useState<string>('0:00');
    const [totalTime, setTotalTime] = useState<string>('--:--');
    const [volumeOpen, setVolumeOpen] = useState<boolean>(false);
    const [volumeProgress, setVolumeProgress] = useState<number>(100);
    const [speakerIcon, setSpeakerIcon] = useState<string>(getVolumePath(volume));
    const [coefficient, setCoefficient] = useState<number>(0);
    const [hasError, setHasError] = useState<boolean>(false);

    useEffect(() => {
      handleReload();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [src]);

    useEffect(() => {
      if (audioRef.current?.duration && audioRef.current.duration !== Infinity) {
        setTotalTime(formatTime(audioRef.current.duration));
      }
    }, [audioRef.current?.duration]);

    useEffect(() => {
      if (!isNaN(volume)) {
        const tempVol = volume > 100 ? 100 : volume < 0 ? 0 : volume;
        setVolumeProgress(tempVol);
        if (audioRef.current) {
          audioRef.current.volume = tempVol / 100;
        }
      }
    }, [volume]);

    useImperativeHandle(ref, () => ({
      play: () => play(),
      pause: () => pause(),
      stop: () => stop(),
      seek: (time: number) => {
        if (audioRef.current) {
          audioRef.current.currentTime = Math.min(Math.max(0, time), getTotalDuration());
        }
      },
      getCurrentTime: () => {
        return audioRef.current?.currentTime || 0;
      },
      getDuration: () => {
        return getTotalDuration();
      },
      getVolume: () => {
        return audioRef.current?.volume || 0;
      },
      setVolume: (v: number) => {
        if (audioRef.current) {
          audioRef.current.volume = Math.min(Math.max(0, v), 1);
        }
      },
      toggleMute: () => {
        if (audioRef.current) {
          audioRef.current.muted = !audioRef.current.muted;
        }
      },
      isMuted: () => {
        return audioRef.current?.muted || false;
      },
      isPlaying: () => {
        return isPlaying;
      },
    }));

    const getTotalDuration = () => {
      const a = audioRef.current;
      if (!a) return 0;

      const dur = a.duration;
      if (dur && dur !== Infinity && !isNaN(dur)) return dur;

      try {
        if (a.buffered && a.buffered.length > 0) {
          return a.buffered.end(a.buffered.length - 1) || 0;
        }
      } catch (e) {
        // ignore
      }
      return 0;
    };

    const handleCanPlay = () => setCanPlay(true);

    const handleReload = () => {
      if (audioRef.current) {
        setIsPlaying(false);
        setTotalTime('--:--');
        setCanPlay(false);
        setHasError(false);
        audioRef.current.src = src;
        audioRef.current.load();
      }
    };

    const handleOnError = (event: React.SyntheticEvent<HTMLAudioElement, Event>) => {
      setCanPlay(true);
      setHasError(true);
      if (onError) {
        const mediaError = (event.target as HTMLAudioElement).error;
        let errorMessage = 'An unknown error occurred.';

        if (mediaError?.code) {
          switch (mediaError?.code) {
            case mediaError.MEDIA_ERR_ABORTED:
              errorMessage = 'The media playback was aborted.';
              break;
            case mediaError.MEDIA_ERR_NETWORK:
              errorMessage = 'A network error caused the media to fail.';
              break;
            case mediaError.MEDIA_ERR_DECODE:
              errorMessage = 'The media playback was aborted due to a decoding error.';
              break;
            case mediaError.MEDIA_ERR_SRC_NOT_SUPPORTED:
              errorMessage = 'The media source format is not supported.';
              break;
            default:
              errorMessage = 'An unknown error occurred.';
              break;
          }
        }

        onError(event, errorMessage);
      }
    };

    const handleEnded = () => {
      setIsPlaying(false);
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        if (totalTime === '--:--') {
          handleReload();
        }
        if (onEnd) onEnd();
      }
    };

    const handleUpdateVolume = () => {
      if (audioRef.current) {
        setVolumeProgress(audioRef.current.volume * 100);
        if (audioRef.current.volume >= 0.5) {
          setSpeakerIcon(iconPaths.fullVolume);
        } else if (audioRef.current.volume < 0.5 && audioRef.current.volume > 0.05) {
          setSpeakerIcon(iconPaths.midVolume);
        } else if (audioRef.current.volume <= 0.05) {
          setSpeakerIcon(iconPaths.lowVolume);
        }
      }
    };

    const handleUpdateProgress = () => {
      if (audioRef.current) {
        const current = audioRef.current.currentTime || 0;
        const total = getTotalDuration();
        let percent = 0;
        if (total && total > 0) percent = (current / total) * 100;
        if (!isFinite(percent) || isNaN(percent)) percent = 0;
        const bounded = Math.max(0, Math.min(100, percent));
        setProgressBarPercent(bounded);
        setCurrentTime(formatTime(current));
      }
    };

    const handleLoadedMetaData = () => {
      if (audioRef.current?.duration && audioRef.current?.duration !== Infinity) {
        setTotalTime(formatTime(audioRef.current.duration ?? 0));
        const currentTime = audioRef.current.duration * coefficient;
        audioRef.current.currentTime = currentTime;
      }
    };

    function getVolumePath(volumeLevel: number) {
      const MIN_VOLUME = 0;
      const MAX_VOLUME = 100;

      volumeLevel = isNaN(volumeLevel)
        ? 100
        : Math.max(MIN_VOLUME, Math.min(volumeLevel, MAX_VOLUME));

      if (volumeLevel >= 50) return iconPaths.fullVolume;
      if (volumeLevel > 5) return iconPaths.midVolume;
      return iconPaths.lowVolume;
    }

    const handleTitle = () => item?.title ?? 'Untitled';

    const togglePlay = () => {
      if (subscriptionStatus !== 'active' && item.premium && !item.preview) {
        onLock?.();
        return;
      }

      if (audioRef.current) {
        if (preload === 'none' && !audioRef.current.duration) setCanPlay(false);
        if (audioRef.current.paused) play();
        else pause();
      }
    };

    const play = () => {
      if (hasError) {
        handleReload();
      } else {
        audioRef.current?.play();
        setIsPlaying(true);
        if (onPlay) onPlay();
      }
    };

    const pause = () => {
      audioRef.current?.pause();
      setIsPlaying(false);
      if (onPause) onPause();
    };

    const stop = () => {
      if (audioRef.current) {
        audioRef.current.pause();
        setIsPlaying(false);
        audioRef.current.currentTime = 0;
      }
    };

    const inRange = (
      event: MouseEvent | TouchEvent | React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
      const rangeBox = getRangeBox(event, currentlyDragged.current);
      const rect = rangeBox.getBoundingClientRect();
      const direction = rangeBox.dataset.direction;
      if (direction === 'horizontal') {
        const clientX = 'touches' in event ? event.touches[0].clientX : event.clientX;
        if (clientX - rect.left < 0 || clientX - rect.right > 0) return false;
      } else {
        const min = rect.top;
        const max = min + rangeBox.offsetHeight;
        const clientY = 'touches' in event ? event.touches[0].clientY : event.clientY;
        if (clientY < min || clientY > max) return false;
      }
      return true;
    };

    function getCoefficient(
      event: MouseEvent | TouchEvent | React.MouseEvent<HTMLDivElement, MouseEvent>
    ) {
      const slider = getRangeBox(event, currentlyDragged.current);
      const rect = slider.getBoundingClientRect();
      let K = 0;

      if (slider.dataset.direction === 'horizontal') {
        const clientX = 'touches' in event ? event.touches[0].clientX : event.clientX;
        const offsetX = clientX - rect.left;
        const width = slider.clientWidth;
        K = offsetX / width;
      } else if (slider.dataset.direction === 'vertical') {
        const clientY = 'touches' in event ? event.touches[0].clientY : event.clientY;
        const height = slider.clientHeight;
        const offsetY = clientY - rect.top;
        K = 1 - offsetY / height;
      }

      return K;
    }

    const rewind = (event: MouseEvent | TouchEvent | React.MouseEvent<HTMLDivElement>) => {
      if (inRange(event) && audioRef.current) {
        if (preload === 'none' && !audioRef.current.duration) {
          setCanPlay(false);
          audioRef.current.load();
          setCoefficient(getCoefficient(event));
        } else if (audioRef.current.duration) {
          audioRef.current.currentTime = getTotalDuration() * getCoefficient(event);
        }
      }
    };

    const changeVolume = (event: MouseEvent | TouchEvent | React.MouseEvent<HTMLDivElement>) => {
      if (inRange(event) && audioRef.current) {
        audioRef.current.volume = getCoefficient(event);
      }
    };

    const handleRewindDragging = () => {
      currentlyDragged.current = rewindPin.current;
      const events = getDeviceEventNames();
      window.addEventListener(events.move, rewind, false);

      window.addEventListener(
        events.up,
        () => {
          currentlyDragged.current = null;
          window.removeEventListener(events.move, rewind, false);
        },
        { once: true }
      );
    };

    const handleVolumeDragging = () => {
      currentlyDragged.current = volumePin.current;
      const events = getDeviceEventNames();

      window.addEventListener(events.move, changeVolume, false);

      window.addEventListener(
        events.up,
        () => {
          currentlyDragged.current = null;
          window.removeEventListener(events.move, changeVolume, false);
        },
        false
      );
    };

    const adjustAudioTime = (percentage: number) => {
      if (audioRef.current) {
        const currentTime = audioRef.current.currentTime + getTotalDuration() * (percentage / 100);
        audioRef.current.currentTime = Math.min(currentTime, getTotalDuration());
      }
    };

    const adjustVolume = (delta: number) => {
      if (audioRef.current) {
        audioRef.current.volume = Math.max(0, Math.min(1, audioRef.current.volume + delta));
      }
    };

    const handleKeyPress = (event: React.KeyboardEvent) => {
      if (!hasKeyBindings) return;
      event.preventDefault();
      switch (event.key) {
        case 'ArrowLeft':
          adjustAudioTime(-5);
          break;
        case 'ArrowRight':
          adjustAudioTime(5);
          break;
        case 'ArrowUp':
          adjustVolume(0.05);
          break;
        case 'ArrowDown':
          adjustVolume(-0.05);
          break;
        case ' ':
          togglePlay();
          break;
        default:
          break;
      }
    };

    const handleOnPlay = () => setIsPlaying(true);

    const getProgressStyle = () => {
      const bounded = Math.max(0, Math.min(100, progressBarPercent || 0));
      return {
        width: `${bounded}%`,
        backgroundColor: '#ffffff',
        height: '100%',
        borderRadius: 9999,
      } as React.CSSProperties;
    };

    const getVolumeProgressStyle = () => ({
      height: `${volumeProgress}%`,
      ...(sliderColor ? { backgroundColor: sliderColor } : {}),
    });

    const getSliderPinStyle = () => ({
      ...(sliderColor ? { backgroundColor: sliderColor } : {}),
      boxShadow: '0 0 0 4px rgba(46,166,255,0.12)',
    });

    // Left-subtitle uses album title if present, otherwise repeats title
    const leftTitle = handleTitle();
    const leftSubtitle = item?.album?.title ?? handleTitle();

    return (
      <div
        ref={wrapperRef}
        tabIndex={-1}
        onKeyDown={handleKeyPress}
        className={`${className} w-full`}
        style={{
          ...(width ? { width, maxWidth: width } : {}),
          ...style,
        }}
      >
        {/* Container: transparent background (no dark rectangle fill) but keep border & rounded corners */}
        <div
          className="flex items-center gap-6 p-5 rounded-2xl"
          style={{
            background: 'transparent', // <-- removed dark filling
            border: '1px solid rgba(255,255,255,0.06)', // subtle border to keep shape
            alignItems: 'center',
          }}
        >
          {/* Big round play/pause button (left-most) */}
          <div
            role="button"
            onClick={() => togglePlay()}
            className="flex-shrink-0"
            style={{ cursor: 'pointer' }}
          >
            <div
              style={{
                width: 72,
                height: 72,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(255,255,255,0.06)',
                boxShadow: 'inset 0 -6px 20px rgba(0,0,0,0.35)',
              }}
            >
              {canPlay && !hasError ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="white"
                >
                  {isPlaying ? (
                    <>
                      <rect x="6" y="5" width="3" height="14" rx="0.8" />
                      <rect x="15" y="5" width="3" height="14" rx="0.8" />
                    </>
                  ) : (
                    <path d="M5 3.868v16.264c0 .88.952 1.43 1.7.96l13.2-8.132c.7-.432.7-1.58 0-2.012L6.7 2.908C5.952 2.438 5 2.988 5 3.868z" />
                  )}
                </svg>
              ) : hasError ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <path d="M12 6V3L8 7l4 4V8c2.76 0 5 2.24 5 5 0 .34-.03.67-.09.99l1.53.37c.08-.39.12-.79.12-1.36 0-3.87-3.13-7-7-7z" />
                </svg>
              ) : (
                <div style={{ width: 20, height: 20, borderRadius: 10, border: '3px solid rgba(255,255,255,0.12)' }} />
              )}
            </div>
          </div>

          {/* MAIN: two invisible columns (left titles, right progress).
              Left column made narrower so the right (line) column is larger/wider. */}
          <div style={{ flex: 1, display: 'flex', gap: 20, minWidth: 0 }}>
            {/* LEFT column: titles - reduced width to give more space to right column */}
            <div style={{ flex: '0 0 28%', minWidth: 0 }}>
              <div
                style={{
                  color: '#ffffff',
                  fontSize: 24, // increased from 20 -> 24
                  fontWeight: 700,
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {leftTitle}
              </div>
              <div
                style={{
                  color: 'rgba(255,255,255,0.72)',
                  fontSize: 16, // increased from 13 -> 16
                  marginTop: 8,
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {leftSubtitle}
              </div>
            </div>

            {/* RIGHT column: progress line and times - larger flex so line is wider */}
            <div style={{ flex: 1.2, minWidth: 0, display: 'flex', alignItems: 'center' }}>
              <div style={{ minWidth: 52, textAlign: 'right', fontSize: 16, color: 'rgba(255,255,255,0.9)', marginRight: 14 }}>
                {currentTime}
              </div>

              <div
                className="flex-1"
                data-direction="horizontal"
                onMouseDown={handleRewindDragging}
                onTouchStart={handleRewindDragging}
                onClick={rewind}
                style={{
                  backgroundColor: 'rgba(255,255,255,0.12)',
                  height: 8, // slightly thicker to match bigger fonts
                  borderRadius: 9999,
                  position: 'relative',
                  cursor: 'pointer',
                }}
              >
                <div
                  className="rap-progress"
                  style={{
                    ...getProgressStyle(),
                    height: '100%',
                    borderRadius: 9999,
                    position: 'absolute',
                    left: 0,
                    top: 0,
                  }}
                />

                <div
                  ref={rewindPin}
                  className="rap-pin"
                  data-method="rewind"
                  onMouseDown={handleRewindDragging}
                  onTouchStart={handleRewindDragging}
                  style={{
                    position: 'absolute',
                    left: `${Math.max(0, Math.min(100, progressBarPercent || 0))}%`,
                    transform: 'translate(-50%, -50%)',
                    top: '50%',
                    width: 14, // slightly larger pin for bigger UI
                    height: 14,
                    borderRadius: '50%',
                    background: sliderColor,
                    border: '2px solid white',
                    boxShadow: '0 3px 10px rgba(0,0,0,0.45)',
                    transition: 'left 0.06s linear',
                    pointerEvents: 'auto',
                  }}
                />
              </div>

              <div style={{ minWidth: 52, textAlign: 'left', fontSize: 16, color: 'rgba(255,255,255,0.9)', marginLeft: 14 }}>
                {totalTime !== '--:--' ? totalTime : '--:--'}
              </div>
            </div>
          </div>

          {/* small volume icon on the far right (optional) */}
          <div style={{ marginLeft: 14, display: needVolumes ? 'block' : 'none' }}>
            <div
              role="button"
              onClick={() => setVolumeOpen((v) => !v)}
              style={{
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 48,
                height: 48,
                borderRadius: 10,
                background: 'rgba(255,255,255,0.03)',
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill={volumeOpen ? sliderColor : '#cbd5e1'}>
                <path d={speakerIcon} />
              </svg>
            </div>

            {volumeOpen && (
              <div
                style={{
                  position: 'absolute',
                  transform: 'translateY(-110%)',
                  right: 24,
                  background: 'rgba(13,13,15,0.85)',
                  padding: 10,
                  borderRadius: 8,
                  border: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                <div
                  className="rap-slider"
                  data-direction="vertical"
                  onClick={changeVolume}
                  onMouseDown={handleVolumeDragging}
                  onTouchStart={handleVolumeDragging}
                  style={{
                    height: 100,
                    width: 10,
                    borderRadius: 99,
                    background: 'rgba(255,255,255,0.08)',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  <div
                    className="rap-progress"
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      ...getVolumeProgressStyle(),
                      borderRadius: 99,
                    }}
                  />
                  <div
                    ref={volumePin}
                    className="rap-pin"
                    data-method="changeVolume"
                    onMouseDown={handleVolumeDragging}
                    onTouchStart={handleVolumeDragging}
                    style={{
                      position: 'absolute',
                      bottom: `${volumeProgress}%`,
                      left: '50%',
                      transform: 'translate(-50%, 50%)',
                      width: 14,
                      height: 14,
                      borderRadius: '50%',
                      ...(sliderColor ? { background: sliderColor } : {}),
                      border: '2px solid white',
                      boxShadow: '0 3px 10px rgba(0,0,0,0.45)',
                    }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        <audio
          loop={loop}
          ref={audioRef}
          preload={preload}
          autoPlay={autoPlay}
          onPlay={handleOnPlay}
          onEnded={handleEnded}
          onError={handleOnError}
          onCanPlay={handleCanPlay}
          onLoadedMetadata={handleLoadedMetaData}
          onTimeUpdate={handleUpdateProgress}
          onVolumeChange={handleUpdateVolume}
          style={{ display: 'none' }}
        >
          <source src={src} type="audio/mpeg" />
        </audio>
      </div>
    );
  }
);

AudioPlayer.displayName = 'AudioPlayer';
export default AudioPlayer;
