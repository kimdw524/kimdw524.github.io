/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { ReactNode, createContext, useState } from 'react';

interface PostListProps {
  slug: string;
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
`;

export const PostListContext = createContext<boolean>(false);

const PostList = ({ slug, children }: PostListProps) => {
  const [hover, setHover] = useState(false);

  return (
    <a href={`posts/${slug}`}>
      <div css={postListCss} onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)}>
        <PostListContext.Provider value={hover}>{children}</PostListContext.Provider>
      </div>
    </a>
  );
};

export default PostList;
