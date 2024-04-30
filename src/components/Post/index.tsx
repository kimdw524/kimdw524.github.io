/** @jsx jsx */
import { css, jsx, keyframes } from '@emotion/react';
import { ReactNode } from 'react';
import Body from './Body';
import Title from './Title';
import Tag from './Tag';
import Banner from './Banner';

interface PostProps {
  children: ReactNode;
}

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(0.5rem)
  }
  to {
    opacity: 1;
    transform: none;
  }
`;

const postCss = css`
  animation-name: ${fadeIn};
  animation-fill-mode: forwards;
  animation-duration: 500ms;
  animation-timing-function: ease;
`;

const Post = (props: PostProps) => {
  return <div css={postCss}>{props.children}</div>;
};

export default Object.assign(Post, { Title, Body, Tag, Banner });
