/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import type { HeadFC, PageProps } from 'gatsby';
import * as React from 'react';
import Navbar from '../components/Navbar';
import useSiteMetadata from '../hooks/useSiteMetadata';

const Index = (props: PageProps) => {
  const siteMetadata = useSiteMetadata();

  return (
    <div
      css={css`
        max-width: 1024px;
        margin: 0 auto;
      `}
    >
      <Navbar>
        <Navbar.Logo>{siteMetadata.siteName}</Navbar.Logo>
        <Navbar.Item>
          {siteMetadata.navigation.map((nav) => (
            <Navbar.Link
              to={nav.slug}
              key={nav.slug}
              selected={props.location.pathname === nav.slug}
            >
              {nav.name}
            </Navbar.Link>
          ))}
        </Navbar.Item>
      </Navbar>

      {new Array(100).fill(0).map((i, index) => (
        <div key={index}>
          {index}
          <br />
        </div>
      ))}
    </div>
  );
};

export default Index;

export const Head: HeadFC = () => {
  const siteMedata = useSiteMetadata();
  return <title>{siteMedata.siteName}</title>;
};
