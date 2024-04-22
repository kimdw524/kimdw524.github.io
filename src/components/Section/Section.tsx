/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
}

const wrapperCss = css`
  padding: 1rem;

  background-color: var(--section-bg);
`;

const containerCss = css`
  max-width: var(--body-maxWidth);
  margin: 0 auto;
`;

const Section = ({ children }: SectionProps) => {
  return (
    <div css={wrapperCss}>
      <div css={containerCss}>{children}</div>
    </div>
  );
};

export default Section;
