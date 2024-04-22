/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { ReactNode, useContext } from 'react';
import { PostListContext } from './PostList';

interface PostListTitleProps {
  children: ReactNode;
}

const titleCss = css`
  display: inline-block;

  padding: 0.5rem 0;

  font-weight: 500;
  font-size: 1.25rem;

  transition: color 150ms ease-out;
`;

const hoverCss = css`
  color: var(--postlist-title-hover-color);
`;

const Title = ({ children }: PostListTitleProps) => {
  const hoverContext = useContext(PostListContext);

  return <div css={[titleCss, hoverContext && hoverCss]}>{children}</div>;
};

export default Title;
