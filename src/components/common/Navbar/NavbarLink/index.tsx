import React from 'react';
import { Link } from 'gatsby';

import * as s from './NavbarLink.css';

interface NavbarLinkProps {
  children: React.ReactNode;
  to: string;
}

const NavbarLink = ({ children, to }: NavbarLinkProps) => {
  return (
    <Link to={to} className={s.link}>
      {children}
    </Link>
  );
};

export default NavbarLink;
