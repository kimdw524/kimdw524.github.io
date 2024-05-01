/** @jsx jsx */
import { css, jsx, keyframes } from '@emotion/react';
import { ReactNode } from 'react';

interface SectionHeadProps {
  children: ReactNode;
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const headCss = css`
  display: inline-block;

  margin: 0.5rem 0;

  font-weight: 700;
  letter-spacing: 0.125rem;
  text-transform: uppercase;

  animation-name: ${fadeIn};
  animation-fill-mode: forwards;
  animation-duration: 500ms;
  animation-timing-function: ease;
`;

const Head = ({ children }: SectionHeadProps) => {
  return <div css={headCss}>{children}</div>;
};

export default Head;
