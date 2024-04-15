/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { ReactNode } from 'react';

interface DropdownProps {
  to: string;
  selected?: boolean;
  children: ReactNode;
}

const linkCss = (selected: boolean) => css`
  display: inline-block;
  position: relative;

  padding: 0.75rem 1rem;
  border-radius: 0.25rem;

  background-color: transparent;

  ${selected
    ? css`
        color: var(--navbar-link-hover-color);
        font-weight: 600;
      `
    : css`
        color: var(--navbar-link-color);
      `}
  text-decoration: none;

  cursor: pointer;
  user-select: none;

  transition: all 200ms ease-out;

  :hover {
    color: var(--navbar-link-hover-color);
  }
`;

const Link = ({ to, selected = false, children }: DropdownProps) => {
  return (
    <a css={linkCss(selected)} href={to}>
      {children}
    </a>
  );
};

export default Link;
