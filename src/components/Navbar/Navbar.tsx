/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { ReactElement, useRef } from 'react';
import useStickyPinned from '../../hooks/useStickyPinned';

interface NavBarProps {
  children: ReactElement | ReactElement[];
}

const navbarCss = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  position: sticky;
  top: -1px;

  padding: 1.5rem;

  background-color: var(--body-bg);

  border-bottom: 1px solid transparent;

  font-size: 1.125rem;

  transition: all 200ms ease;
`;

const pinnedNavbarCss = css`
  padding: 0.5rem;

  border-top: 1px solid transparent;
  border-bottom: 1px solid var(--navbar-border);

  font-size: 1rem;
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
