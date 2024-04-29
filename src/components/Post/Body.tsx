/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { ReactNode } from 'react';

interface PostBodyProps {
  children: ReactNode;
}

const bodyCss = css`
  line-height: 175%;
`;

const Body = (props: PostBodyProps) => {
  return <div css={bodyCss}>{props.children}</div>;
};

export default Body;
