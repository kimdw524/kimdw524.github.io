import { useEffect, useState, useRef } from 'react';

const useStickyPinned = (targetRef: React.RefObject<HTMLElement>) => {
  const [isPinned, setIsPinned] = useState(false);
  const observer = useRef<IntersectionObserver>();

  useEffect(() => {
    if (!observer.current) {
      const observerCallback = (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          setIsPinned(!entry.isIntersecting);
        });
      };

      observer.current = new window.IntersectionObserver(observerCallback, {
        threshold: 1.0,
      });
    }

    if (targetRef.current) {
      observer.current.observe(targetRef.current);
    }

    return () => {
      if (observer.current) observer.current.disconnect();
    };
  }, [targetRef]);

  return isPinned;
};

export default useStickyPinned;
