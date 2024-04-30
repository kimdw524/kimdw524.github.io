/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { ReactNode, createContext, useState } from 'react';
import Excerpt from './Excerpt';
import Title from './Title';
import Date from './Date';
import Tag from './Tag';
import Banner from './Banner';
import Container from './Container';

interface PostListProps {
  children: ReactNode;
}

const postListCss = css`
  display: inline-block;

  width: 33.3%;
  padding: 1rem;
  box-sizing: border-box;

  cursor: pointer;

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

const PostList = ({ children }: PostListProps) => {
  const [hover, setHover] = useState(false);

  return (
    <div css={postListCss} onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)}>
      <PostListContext.Provider value={hover}>{children}</PostListContext.Provider>
    </div>
  );
};

export default Object.assign(PostList, { Title, Excerpt, Date, Tag, Banner, Container });
