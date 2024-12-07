import { ReactNode } from 'react';

import * as s from './SectionHeader.css';

interface SectionHeaderProps {
  children: ReactNode;
}

const SectionHeader = ({ children }: SectionHeaderProps) => {
  return <h3 className={s.header}>{children}</h3>;
};

export default SectionHeader;
