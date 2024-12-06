import { ReactNode } from 'react';

import * as s from './Chip.css';

interface ChipProps {
  children: ReactNode;
  size?: 'sm' | 'md';
  variant?: 'contained' | 'outlined';
}

const Chip = ({ children, size = 'sm', variant = 'contained' }: ChipProps) => {
  return <span className={s.chip({ size, variant })}>{children}</span>;
};

export default Chip;
