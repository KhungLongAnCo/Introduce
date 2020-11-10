import { useCallback, useEffect, useState } from 'react';

export function useScrollTracking(maxTopTracking: number = 99999999) {
  const [top, setTop] = useState(0);

  const getTop = useCallback(() => {
    return Math.min(maxTopTracking, window.scrollY);
  }, [maxTopTracking]);

  useEffect(() => {
    setTop(getTop());
    const onScroll = () => {
      if (window.scrollY < maxTopTracking) {
        setTop(getTop());
      }
      if (window.scrollY >= maxTopTracking && top !== maxTopTracking) {
        setTop(maxTopTracking);
      }
    };
    document.addEventListener('scroll', onScroll);
    return () => document.removeEventListener('scroll', onScroll);
  }, [getTop, top, maxTopTracking]);
  return top;
}
