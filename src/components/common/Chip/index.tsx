import { ReactNode } from 'react';

import * as s from './Chip.css';

interface ChipProps {
  children: ReactNode;
  size?: 'sm' | 'md';
}

const Chip = ({ children, size = 'sm' }: ChipProps) => {
  return <span className={s.chip({ size })}>{children}</span>;
};

export default Chip;
