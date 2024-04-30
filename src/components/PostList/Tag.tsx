/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { Link } from 'gatsby';

interface PostListTagProps {
  children: string[];
}

const tagCss = css`
  display: inline-block;

  margin: 0.125rem;
  padding: 0.375rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;

  background-color: var(--postlist-tag-bg);

  color: var(--body-color);
  font-weight: 400;
  font-size: 0.75rem;

  transition: all 100ms ease;

  :hover {
    border: 1px solid var(--postlist-tag-hover-border);

    background-color: transparent;

    color: var(--postlist-tag-hover-color);

    transition: all 100ms ease;
  }
`;

const containerCss = css`
  padding: 0.375rem;
`;

const Tag = ({ children }: PostListTagProps) => {
  return (
    <div css={containerCss}>
      {children.map((tag) => (
        <Link key={tag} to={`/tags/${tag}`}>
          <div css={tagCss}>{tag}</div>
        </Link>
      ))}
    </div>
  );
};

export default Tag;
