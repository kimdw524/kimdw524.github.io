/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
}

const sectionCss = css``;

const Section = ({ children }: SectionProps) => {
  return <div css={sectionCss}>{children}</div>;
};

export default Section;
