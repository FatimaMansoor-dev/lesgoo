// filepath: /home/muneeb/Projects/lesgoo/src/modules/RenewmeHome/common/audio-player/helpers/styles/audio.ts

export const defaultClass = {
  rapContainer: {
    main: 'flex items-center justify-between rounded-xl sm:rounded-2xl bg-black/15 border border-white/20 backdrop-blur-md text-white sm:px-[30px] px-[16px] sm:py-[24px] py-[18px]',
    main2: 'flex items-center gap-3 sm:gap-6 flex-1 min-w-0',
  },
  rapPpButton: {
    main: 'sm:min-w-[93px] min-w-[44px] sm:min-h-[93px] min-h-[44px] bg-transparent/15 rounded-full flex justify-center items-center text-center',
    play: {
      svg: {
        className: 'sm:w-9 w-4 sm:h-9 h-4',
        props: {
          className: 'rap-pp-icon sm:w-9 w-4 sm:h-9 h-4',
          width: '33',
          height: '37',
          viewBox: '0 0 33 37',
          fill: 'none',
        },
        path: {
          fill: 'white',
          fillRule: 'evenodd' as const,
          d: 'M6.27928 1.22056C3.04554 -0.634362 0.423828 0.885211 0.423828 4.61191V32.1133C0.423828 35.8437 3.04554 37.3613 6.27928 35.5081L30.3169 21.7227C33.5517 19.8672 33.5517 16.8609 30.3169 15.0057L6.27928 1.22056Z',
        },
      },
    },
    lock: {
      svg: {
        className: 'sm:w-9 w-4 sm:h-9 h-4',
        props: {
          className: 'sm:w-9 w-4 sm:h-9 h-4',
          width: '44',
          height: '45',
          viewBox: '0 0 44 45',
          fill: 'none',
        },
        path: {
          fill: 'white',
          fillRule: 'evenodd' as const,
          d: 'M34.375 17.3359H33V11.8359C33 5.76929 28.0667 0.835938 22 0.835938C15.9333 0.835938 11 5.76929 11 11.8359V17.3359H9.625C7.35168 17.3359 5.5 19.1856 5.5 21.4609V40.7109C5.5 42.9863 7.35168 44.8359 9.625 44.8359H34.375C36.6483 44.8359 38.5 42.9863 38.5 40.7109V21.4609C38.5 19.1856 36.6483 17.3359 34.375 17.3359ZM14.6668 11.8359C14.6668 7.7915 17.9556 4.50272 22 4.50272C26.0444 4.50272 29.3332 7.7915 29.3332 11.8359V17.3359H14.6668V11.8359Z',
        },
      },
    },
    pause: {
      svg: {
        className: 'sm:w-9 w-4 sm:h-9 h-4',
        props: {
          className: 'sm:w-9 w-4 sm:h-9 h-4',
          width: '32',
          height: '36',
          viewBox: '0 0 18 24',
        },
        path: {
          fill: 'white',
          fillRule: 'evenodd' as const,
          d: 'M0 0h6v24H0zM12 0h6v24h-6z',
        },
      },
    },
  },
  rapTexts: {
    album: 'font-bold text-xs sm:text-xl leading-[18px] sm:leading-[22px] mb-1 min-w-0 break-words', // Decreased the gap
    title: 'text-xs sm:text-xl text-[#D6D6D6] leading-[16px] sm:leading-[18px] min-w-0 break-words',
  },
};

export const sliderClass = {
  rapContainer: {
    main: 'flex items-center justify-between rounded-xl bg-black/15 border border-white/20 backdrop-blur-md text-white px-4 sm:px-6 py-4 sm:py-5 w-full',
    main2: 'flex items-center gap-3 sm:gap-6 flex-1 min-w-0',
  },
  rapPpButton: {
    main: 'p-2 bg-transparent/15 rounded-full',
    play: {
      svg: {
        className: 'lucide lucide-play text-white',
        props: {
          width: '20',
          height: '20',
          viewBox: '0 0 24 24',
          fill: 'none',
          stroke: 'currentColor',
          strokeWidth: '2',
          strokeLinecap: 'round' as const,
          strokeLinejoin: 'round' as const,
          className: 'lucide lucide-play text-white',
          'aria-hidden': true,
        },
        polygon: {
          points: '6 3 20 12 6 21 6 3',
        },
      },
    },
    lock: {
      svg: {
        className: 'lucide lucide-lock-keyhole text-white',
        props: {
          width: '20',
          height: '20',
          viewBox: '0 0 24 24',
          fill: 'none',
          stroke: 'currentColor',
          strokeWidth: '2',
          strokeLinecap: 'round' as const,
          strokeLinejoin: 'round' as const,
          className: 'lucide lucide-lock-keyhole text-white',
          'aria-hidden': true,
        },
        circle: {
          cx: '12',
          cy: '16',
          r: '1',
        },
        rect: {
          x: '3',
          y: '10',
          width: '18',
          height: '12',
          rx: '2',
        },
        path: {
          d: 'M7 10V7a5 5 0 0 1 10 0v3',
        },
      },
    },
    pause: {
      svg: {
        className: 'lucide lucide-circle-pause text-white',
        props: {
          width: '20',
          height: '20',
          viewBox: '0 0 24 24',
          fill: 'none',
          stroke: 'currentColor',
          strokeWidth: '2',
          strokeLinecap: 'round' as const,
          strokeLinejoin: 'round' as const,
          className: 'lucide lucide-circle-pause text-white',
          'aria-hidden': true,
        },
        circle: { cx: '12', cy: '12', r: '10' },
        line1: { x1: '10', x2: '10', y1: '15', y2: '9' },
        line2: { x1: '14', x2: '14', y1: '15', y2: '9' },
      },
    },
  },
  rapTexts: {
    album:
      'font-bold text-xs sm:text-base leading-[18px] sm:leading-[22px] mb-1 min-w-0 break-words',
    title: 'text-xs sm:text-sm text-[#D6D6D6] leading-[16px] min-w-0 break-words',
  },
};
export const minimal = {
  rapContainer: {
    main: 'flex items-center justify-between rounded-[19px] bg-black/15 border border-white/20 backdrop-blur-md text-white sm:px-[30px] px-[16px] sm:py-[24px] py-[18px]',
    main2: 'flex items-center gap-3 sm:gap-4 flex-1 min-w-0',
  },
  rapPpButton: {
    main: 'w-8 h-8 bg-transparent rounded-full flex justify-center items-center border border-white/30',
    play: {
      svg: {
        className: 'w-4 h-6',
        props: {
          width: '16',
          height: '16',
          viewBox: '0 0 16 16',
          fill: 'none',
          stroke: 'white',
          strokeWidth: '2',
        },
        path: {
          d: 'M3 2L13 8L3 14V2Z',
        },
      },
    },
    lock: {
      svg: {
        className: 'w-4 h-4',
        props: {
          width: '16',
          height: '16',
          viewBox: '0 0 16 16',
          fill: 'white',
        },
        path: {
          d: 'M4 7V5a4 4 0 1 1 8 0v2M2 7h12v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7z',
        },
      },
    },
    pause: {
      svg: {
        className: 'w-4 h-4',
        props: {
          width: '16',
          height: '16',
          viewBox: '0 0 16 16',
          fill: 'white',
        },
        path: {
          d: 'M4 2h3v12H4zM9 2h3v12H9z',
        },
      },
    },
  },
  rapTexts: {
    album: 'font-semibold text-xs sm:text-sm min-w-0 break-words leading-tight',
    title: 'text-xs sm:text-xs text-[#D6D6D6] min-w-0 break-words leading-tight',
  },
};
