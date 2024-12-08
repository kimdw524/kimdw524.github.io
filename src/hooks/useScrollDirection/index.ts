import { useEffect, useState } from 'react';

interface UseScrollDirectionProps {
  point: number;
}

const useScrollDirection = ({ point }: UseScrollDirectionProps) => {
  const [direction, setDirection] = useState<'top' | 'bottom'>('top');

  useEffect(() => {
    let lastScroll = window.scrollY;

    const handleScroll = () => {
      const y = window.scrollY;

      setDirection(y <= point || lastScroll > y ? 'top' : 'bottom');
      lastScroll = y;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return direction;
};

export default useScrollDirection;
