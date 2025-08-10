import { useRef, useState } from 'react';
import { useEffectOnce } from 'react-use';

export const useImageLoaded = () => {
  const [loading, setLoading] = useState(true);
  const ref = useRef<HTMLImageElement | null>(null);

  const onLoad = () => {
    setLoading(false);
  };

  useEffectOnce(() => {
    if (ref.current && ref.current.complete) {
      onLoad();
    }
  });

  return {
    ref,
    loading,
    onLoad,
  };
};
