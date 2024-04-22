/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { ReactNode, useRef } from 'react';
import useStickyPinned from '../../hooks/useStickyPinned';

interface NavBarProps {
  children: ReactNode;
}

const navbarCss = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  position: sticky;
  top: -1px;

  max-width: var(--body-maxWidth);
  margin: 0 auto;
  padding: 1.5rem;
  border-bottom: 1px solid transparent;

  background-color: var(--body-bg);

  font-size: 1.125rem;

  transition: all 200ms ease;
`;

const pinnedNavbarCss = css`
  padding: 0.5rem;

  border-top: 1px solid transparent;
  border-bottom: 1px solid var(--navbar-border);

  font-size: 1rem;

  @media (max-width: 576px) {
    padding: 0.5rem 1rem;
  }
`;

const Navbar = ({ children }: NavBarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const stickyPinned = useStickyPinned(ref);

  return (
    <div css={[navbarCss, stickyPinned && pinnedNavbarCss]} ref={ref}>
      {children}
    </div>
  );
};

export default Navbar;
