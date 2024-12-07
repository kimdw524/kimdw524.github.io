import { Link } from 'gatsby';
import React from 'react';

import * as s from './NavbarLogo.css';

interface NavbarLogoProps {
  children: React.ReactNode;
}

const NavbarLogo = ({ children }: NavbarLogoProps) => {
  return (
    <h1 className={s.logo}>
      <Link to="/">{children}</Link>
    </h1>
  );
};

export default NavbarLogo;
