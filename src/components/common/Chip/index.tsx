import { ReactNode } from 'react';

import * as s from './Chip.css';

interface ChipProps {
  children: ReactNode;
}

const Chip = ({ children }: ChipProps) => {
  return <span className={s.chip}>{children}</span>;
};

export default Chip;
