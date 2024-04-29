/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { Link } from 'gatsby';

interface PostTagProps {
  children: string[];
}

const tagContainerCss = css`
  word-break: keep-all;

  margin: 0.5rem 0 1.25rem;
`;

const tagCss = css`
  display: inline-block;

  margin-right: 0.5rem;

  color: var(--post-tag-color);
  text-decoration: none;
`;

const Tag = (props: PostTagProps) => {
  return (
    <div css={tagContainerCss}>
      {props.children.map((tag) => (
        <Link css={tagCss} key={tag} to="#">
          #{tag}
        </Link>
      ))}
    </div>
  );
};

export default Tag;
