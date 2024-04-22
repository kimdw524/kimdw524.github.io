/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { ReactNode } from 'react';

interface PostListExcerptProps {
  children: ReactNode;
}

const excerptCss = css``;

const Excerpt = ({ children }: PostListExcerptProps) => {
  return <div css={excerptCss}>{children}</div>;
};

export default Excerpt;
