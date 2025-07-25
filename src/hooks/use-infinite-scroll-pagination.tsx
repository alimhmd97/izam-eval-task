import { useEffect, useRef, useState } from 'react';

export type ScrollOptions = {
  offset?: number;
  once?: boolean;
  rootMargin?: string;
  threshold?: number;
};

export const useLastItemVisible = (
  callback: () => void,
  options: ScrollOptions = {},
  isLoading: boolean,
) => {
  const [isVisible, setIsVisible] = useState(false);
  const lastItemRef = useRef(null);

  const {
    once = false,
    rootMargin = '0px 0px 100px 0px',
    threshold = 0.1
  } = options;

  useEffect(() => {
    console.log('fetxhing');

    const element = lastItemRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const visible = entry.isIntersecting;
        setIsVisible(visible);



        if (visible && callback) {
          callback();
        }
      },
      { rootMargin, threshold }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [callback, threshold, rootMargin, once, isLoading]);

  return {
    isLoading,
    isVisible,
    lastItemRef
  };
};
