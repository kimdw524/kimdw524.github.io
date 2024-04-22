/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { ReactNode, createContext, useState } from 'react';

interface PostListProps {
  children: ReactNode;
}

const postListCss = css`
  padding: 1rem;

  cursor: pointer;
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

export default PostList;
