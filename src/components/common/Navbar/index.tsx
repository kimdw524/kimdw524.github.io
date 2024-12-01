import React from 'react';

import * as s from './Navbar.css';

import NavbarLogo from './NavbarLogo';
import NavbarLink from './NavbarLink';

interface NavbarProps {
  children: React.ReactNode;
  isScrolled: boolean;
}

const Navbar = ({ children, isScrolled }: NavbarProps) => {
  return <nav className={s.container({ isScrolled })}>{children}</nav>;
};

export default Object.assign(Navbar, { Logo: NavbarLogo, Link: NavbarLink });
