/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { ReactNode } from 'react';

interface SectionHeadProps {
  children: ReactNode;
}

const headCss = css`
  margin: 0.5rem 0;

  font-weight: 700;
  letter-spacing: 0.125rem;
  text-transform: uppercase;
`;

const Head = ({ children }: SectionHeadProps) => {
  return <div css={headCss}>{children}</div>;
};

export default Head;
