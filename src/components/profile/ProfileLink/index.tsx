import { ReactNode } from 'react';

import * as s from './ProfileLink.css';

interface ProfileLinkProps {
  children: ReactNode;
  to: string;
}

const ProfileLink = ({ children, to }: ProfileLinkProps) => {
  return (
    <a href={to} target="_blank" className={s.link}>
      {children}
    </a>
  );
};

export default ProfileLink;
