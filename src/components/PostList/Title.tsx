/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { ReactNode, useContext } from 'react';
import { PostListContext } from '.';

interface PostListTitleProps {
  children: ReactNode;
}

const titleCss = css`
  overflow: hidden;

  padding: 0.5rem 0;

  color: var(--body-color);
  font-weight: 500;
  font-size: 1.25rem;
  text-overflow: ellipsis;
  white-space: nowrap;

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
