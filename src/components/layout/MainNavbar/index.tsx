import useIsScrolled from '@/hooks/useIsScrolled';

import Navbar from '@/components/common/Navbar';

const MainNavbar = () => {
  const isScrolled = useIsScrolled();

  return (
    <Navbar isScrolled={isScrolled}>
      <Navbar.Logo>kimdw524's blog</Navbar.Logo>
      <Navbar.Menu>
        <Navbar.Link to="https://github.com/kimdw524">GitHub</Navbar.Link>
        <Navbar.Link to="https://github.com/kimdw524">Portfolio</Navbar.Link>
      </Navbar.Menu>
    </Navbar>
  );
};

export default MainNavbar;
