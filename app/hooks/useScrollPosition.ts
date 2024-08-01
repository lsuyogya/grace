import { useState, useEffect } from 'react';

interface ScrollPosition {
  x: number;
  y: number;
  yVh: number;
}

const useScrollPosition = (): ScrollPosition => {
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({
    x: 0,
    y: 0,
    yVh: 0,
  });

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        const x = window.scrollX;
        const y = window.scrollY;
        const viewportHeight = window.innerHeight;
        const yVh = (y / viewportHeight) * 100;

        setScrollPosition({
          x,
          y,
          yVh,
        });
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      // Set initial scroll position
      handleScroll();
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return scrollPosition;
};

export default useScrollPosition;
