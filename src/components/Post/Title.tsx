/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { ReactNode } from 'react';

interface PostTitleProps {
  children: ReactNode;
}

const titleCss = css`
  font-weight: 500;
  font-size: 1.75rem;
  line-height: 150%;
`;

const Title = (props: PostTitleProps) => {
  return <div css={titleCss}>{props.children}</div>;
};

export default Title;
