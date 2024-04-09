import type { HeadFC, PageProps } from 'gatsby';
import * as React from 'react';
import Navbar from '../components/Navbar';

const Index = (props: PageProps) => {
  return (
    <>
      <Navbar>
        <Navbar.Link to="#home">1번 메뉴</Navbar.Link>
        <Navbar.Link to="#home">2번 메뉴</Navbar.Link>
        <Navbar.Link to="#home">3번 메뉴</Navbar.Link>
      </Navbar>
    </>
  );
};

export default Index;

export const Head: HeadFC = () => <title>kimdw524 blog</title>;
