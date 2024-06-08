/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { Link } from 'gatsby';

interface PostCategoryProps {
  children: string;
}

const categoryContainerCss = css`
  word-break: keep-all;

  margin: 0.5rem 0;
`;

const categoryCss = css`
  display: inline-block;

  margin-right: 0.5rem;

  color: var(--post-tag-color);
  text-decoration: none;

  :hover {
    color: var(--post-tag-hover-color);
    text-decoration: underline;
  }
`;

const Category = (props: PostCategoryProps) => {
  const category = props.children;

  return (
    <div css={categoryContainerCss}>
      <Link css={categoryCss} key={category} to={`/category/${category}`}>
        {category}
      </Link>
    </div>
  );
};

export default Category;
