/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { Link } from 'gatsby';
import { ReactNode } from 'react';

interface NavbarLogoProps {
  children: ReactNode;
}

const logoCss = css`
  padding: 0.5rem;

  font-size: 1.5rem;
  font-weight: 600;

  user-select: none;

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const Logo = (props: NavbarLogoProps) => {
  return (
    <div css={logoCss}>
      <Link to="/">{props.children}</Link>
    </div>
  );
};

export default Logo;
