import React, { useCallback, useEffect, useRef, useState } from 'react';

interface ScrollProps {
  handleTouchStart?: (e: React.TouchEvent<HTMLDivElement>) => void;
  handleTouchMove?: (e: React.TouchEvent<HTMLDivElement>) => void;
  handleScroll?: (e: React.WheelEvent<HTMLDivElement>) => void;
}

export const useScroll = ({
  handleTouchStart: onTouchStart,
  handleTouchMove: onTouchMove,
  handleScroll: onScroll,
}: ScrollProps = {}) => {
  const [touchYStart, setTouchYStart] = useState(0);
  const [touchXStart, setTouchXStart] = useState(0);
  const [scroll, setScroll] = useState<'top' | 'bottom' | null>(null);
  const [touchY, setTouchY] = useState<'top' | 'bottom' | null>(null);
  const [touchX, setTouchX] = useState<'right' | 'left' | null>(null);
  const ref = useRef<any>(null);

  const handleTouchStart = useCallback(
    (e: React.TouchEvent<HTMLDivElement>) => {
      onTouchStart && onTouchStart(e);
      setTouchYStart(e.changedTouches[0].clientY);
      setTouchXStart(e.changedTouches[0].clientX);
    },
    [onTouchStart]
  );

  const handleTouchMove = useCallback(
    (e: React.TouchEvent<HTMLDivElement>) => {
      onTouchMove && onTouchMove(e);
      setScroll(null);

      const touchYEnd = e.changedTouches[0].clientY;
      const touchXEnd = e.changedTouches[0].clientX;

      if (touchXStart > touchXEnd) {
        setTouchX('right');
      } else {
        setTouchX('left');
      }

      if (touchYEnd < touchYStart) {
        setTouchY('top');
      } else {
        setTouchY('bottom');
      }
    },
    [touchXStart, touchYStart, onTouchMove]
  );

  const handleScroll = useCallback(
    (e: React.WheelEvent<HTMLDivElement>) => {
      onScroll && onScroll(e);
      if (e.deltaY !== 0) {
        setTouchY(null);
        setTouchX(null);

        const isScrollingToTop = e.deltaY < 0;

        if (isScrollingToTop) return setScroll('top');
        setScroll('bottom');
      }
    },
    [onScroll]
  );

  useEffect(() => {
    const element = ref.current;

    if (element) {
      element.addEventListener('wheel', handleScroll, false);
      element.addEventListener('touchstart', handleTouchStart, false);
      element.addEventListener('touchmove', handleTouchMove, false);

      return () => {
        element.removeEventListener('wheel', handleScroll, false);
        element.removeEventListener('touchstart', handleTouchStart, false);
        element.removeEventListener('touchmove', handleTouchMove, false);
      };
    }
  }, [handleScroll, handleTouchStart, handleTouchMove]);

  return {
    ref,
    scroll,
    touchY,
    touchX,
    reset: () => {
      setScroll(null);
      setTouchY(null);
      setTouchX(null);
    },
  };
};
