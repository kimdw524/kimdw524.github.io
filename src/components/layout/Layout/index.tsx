import React from 'react';

import '@/styles/global.css';
import * as s from './Layout.css';

import MainNavbar from '@/components/layout/MainNavbar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <header className={s.header}>
        <MainNavbar />
      </header>
      <main>{children}</main>
    </>
  );
};

export default Layout;
