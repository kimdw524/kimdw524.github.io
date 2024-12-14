import { ReactNode } from 'react';

import * as s from './Chip.css';

interface ChipProps {
  children: ReactNode;
  size?: 'sm' | 'md';
  variant?: 'contained' | 'outlined';
  isSelected?: boolean;
}

const Chip = ({ children, size = 'sm', variant = 'contained', isSelected = false }: ChipProps) => {
  return <span className={s.chip({ size, variant, isSelected })}>{children}</span>;
};

export default Chip;
