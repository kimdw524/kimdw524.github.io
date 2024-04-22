/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React from 'react';

interface PostListDateProps {
  children: string;
}

const dateCss = css`
  padding: 0.5rem 0;

  color: var(--postlist-date-color);
  font-size: 0.875rem;
  text-align: right;
`;

const Title = ({ children }: PostListDateProps) => {
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  return <div css={dateCss}>{new Date(children).toLocaleDateString(undefined, options)}</div>;
};

export default Title;
