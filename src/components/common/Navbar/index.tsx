import React from 'react';

import * as s from './Navbar.css';

import NavbarLink from './NavbarLink';
import NavbarLogo from './NavbarLogo';
import NavbarMenu from './NavbarMenu';

interface NavbarProps {
  children: React.ReactNode;
  isScrolled: boolean;
  isVisible?: boolean;
}

const Navbar = ({ children, isScrolled, isVisible = true }: NavbarProps) => {
  return <nav className={s.container({ isScrolled, isVisible })}>{children}</nav>;
};

export default Object.assign(Navbar, { Logo: NavbarLogo, Link: NavbarLink, Menu: NavbarMenu });
