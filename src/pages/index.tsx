import type { HeadFC, PageProps } from 'gatsby';
import * as React from 'react';
import Navbar from '../components/Navbar';

const Index = (props: PageProps) => {
  const navLinks = ['#link1', '#link2', '#link3'];

  return (
    <>
      <Navbar>
        {navLinks.map((link, index) => (
          <Navbar.Link to={link} key={link} selected={props.location.hash === link}>
            {index + 1}번 메뉴
          </Navbar.Link>
        ))}
      </Navbar>
    </>
  );
};

export default Index;

export const Head: HeadFC = () => <title>kimdw524 blog</title>;
