/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { ReactElement } from 'react';

interface NavBarProps {
  children: ReactElement | ReactElement[];
}

const navbarCss = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  position: sticky;
  top: 0;

  padding: 0.5rem;
`;

const Navbar = ({ children }: NavBarProps) => {
  return <div css={navbarCss}>{children}</div>;
};

export default Navbar;
