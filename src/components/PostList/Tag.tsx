/** @jsx jsx */
import { css, jsx } from '@emotion/react';

interface PostListTagProps {
  children: string[];
}

const tagCss = css`
  display: inline-block;

  margin: 0.125rem;
  padding: 0.375rem;
  border-radius: 0.25rem;

  background-color: var(--postlist-tag-bg);

  color: var(--body-color);
  font-weight: 400;
  font-size: 0.75rem;
`;

const containerCss = css`
  padding: 0.375rem;
`;

const Tag = ({ children }: PostListTagProps) => {
  return (
    <div css={containerCss}>
      {children.map((tag) => (
        <div key={tag} css={tagCss}>
          {tag}
        </div>
      ))}
    </div>
  );
};

export default Tag;
