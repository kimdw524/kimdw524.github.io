/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { ReactNode } from 'react';

interface DropdownProps {
  to: string;
  children: ReactNode;
}

const linkCss = css`
  display: block;

  padding: 0.5rem;

  color: #000;
  text-decoration: none;

  cursor: pointer;
  user-select: none;

  :hover {
    text-decoration: underline;
  }
`;

const Link = ({ to, children }: DropdownProps) => {
  return (
    <div>
      <a css={linkCss} href={to}>
        {children}
      </a>
    </div>
  );
};

export default Link;
