import * as React from 'react';

import '@/styles/global.css';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return <div>{children}</div>;
};

export default Layout;
