/** @jsx jsx */
import { css, jsx } from '@emotion/react';

interface PostBodyProps {
  children: string;
}

const bodyCss = css`
  line-height: 175%;
`;

const Body = (props: PostBodyProps) => {
  return <div css={bodyCss} dangerouslySetInnerHTML={{ __html: props.children }} />;
};

export default Body;
