import type { HeadFC, PageProps } from 'gatsby';
import * as React from 'react';
import Navbar from '../components/Navbar';
import useNavigation from '../hooks/useNavigation';

const Index = (props: PageProps) => {
  const navigation = useNavigation();

  return (
    <>
      <Navbar>
        <Navbar.Logo>kimdw524&apos;s blog</Navbar.Logo>
        <Navbar.Item>
          {navigation.map((nav) => (
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
        <>
          {index}
          <br />
        </>
      ))}
    </>
  );
};

export default Index;

export const Head: HeadFC = () => <title>kimdw524 blog</title>;
