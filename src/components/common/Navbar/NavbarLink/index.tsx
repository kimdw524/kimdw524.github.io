import { Link } from 'gatsby';
import React from 'react';

import * as s from './NavbarLink.css';

interface NavbarLinkProps {
  children: React.ReactNode;
  to: string;
}

const NavbarLink = ({ children, to }: NavbarLinkProps) => {
  return (
    <a href={to} target="_blank" className={s.link}>
      {children}
    </a>
  );
};

export default NavbarLink;
