import useIsScrolled from '@/hooks/useIsScrolled';
import useScrollDirection from '@/hooks/useScrollDirection';

import Navbar from '@/components/common/Navbar';

const MainNavbar = () => {
  const isScrolled = useIsScrolled();
  const direction = useScrollDirection({ point: 16 * 12 });

  return (
    <Navbar isScrolled={isScrolled} isVisible={direction === 'top'}>
      <Navbar.Logo>kimdw524's blog</Navbar.Logo>
      <Navbar.Menu>
        <Navbar.Link to="https://github.com/kimdw524">GitHub</Navbar.Link>
        <Navbar.Link to="https://github.com/kimdw524">Portfolio</Navbar.Link>
      </Navbar.Menu>
    </Navbar>
  );
};

export default MainNavbar;
