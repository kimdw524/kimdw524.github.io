/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { ReactNode } from 'react';

interface NavbarLogoProps {
  children: ReactNode;
}

const logoCss = css`
  padding: 0.5rem;

  font-size: 1.5rem;
  font-weight: 600;

  user-select: none;
`;

const Logo = (props: NavbarLogoProps) => {
  return <div css={logoCss}>{props.children}</div>;
};

export default Logo;
