/** @jsx jsx */
import { css, jsx, keyframes } from '@emotion/react';
import { ReactNode, createContext, useState } from 'react';
import Banner from './Banner';
import Container from './Container';
import Date from './Date';
import Excerpt from './Excerpt';
import Tag from './Tag';
import Title from './Title';

interface PostListProps {
  index: number;
  children: ReactNode;
}

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(3rem)
  }
  to {
    opacity: 1;
    transform: none;
  }
`;

const postListCss = (index: number) => css`
  display: inline-block;

  width: 33.3%;
  padding: 1rem;
  box-sizing: border-box;

  cursor: pointer;

  animation-name: ${fadeIn};
  animation-fill-mode: forwards;
  animation-timing-function: ease;
  animation-duration: 500ms;
  animation-delay: ${index * 50}ms;

  opacity: 0;
  transform: translateY(3rem);

  @media (max-width: 720px) {
    width: 50%;
  }

  @media (max-width: 576px) {
    width: 100%;
  }

  a {
    text-decoration: none;
  }
`;

export const PostListContext = createContext<boolean>(false);

const PostList = ({ index, children }: PostListProps) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      css={postListCss(index)}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      <PostListContext.Provider value={hover}>{children}</PostListContext.Provider>
    </div>
  );
};

export default Object.assign(PostList, { Title, Excerpt, Date, Tag, Banner, Container });
