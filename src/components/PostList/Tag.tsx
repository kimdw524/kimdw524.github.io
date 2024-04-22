/** @jsx jsx */
import { css, jsx } from '@emotion/react';

interface PostListTagProps {
  children: string[];
}

const tagCss = css`
  display: inline-block;

  padding: 0.5rem;

  background-color: var(--tag-bg);

  font-weight: 500;
  font-size: 0.875rem;
`;

const containerCss = css`
  padding: 1rem 0.5rem;
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
