/** @jsx jsx */
import { jsx } from '@emotion/react';
import { ReactNode } from 'react';
import useSiteMetadata from '../../hooks/useSiteMetadata';
import Navbar from '../navbar';

interface LayoutProps {
  location: Location;
  children: ReactNode;
}

const Layout = ({ location, children }: LayoutProps) => {
  const siteMetadata = useSiteMetadata();

  return (
    <div>
      <Navbar>
        <Navbar.Logo>{siteMetadata.siteName}</Navbar.Logo>
        <Navbar.Item>
          {siteMetadata.navigation.map((nav) => (
            <Navbar.Link to={nav.slug} key={nav.slug} selected={location.pathname === nav.slug}>
              {nav.name}
            </Navbar.Link>
          ))}
        </Navbar.Item>
      </Navbar>
      {children}
    </div>
  );
};

export default Layout;
