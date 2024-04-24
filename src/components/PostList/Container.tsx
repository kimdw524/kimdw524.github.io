/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { ReactNode } from 'react';

interface PostListContainerProps {
  children: ReactNode;
}

const containerCss = css`
  display: flex;
  flex-wrap: wrap;
`;

const Container = ({ children }: PostListContainerProps) => {
  return <div css={containerCss}>{children}</div>;
};

export default Container;
