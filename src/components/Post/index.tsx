/** @jsx jsx */
import { jsx } from '@emotion/react';
import { ReactNode } from 'react';
import Body from './Body';
import Title from './Title';
import Tag from './Tag';

interface PostProps {
  children: ReactNode;
}

const Post = (props: PostProps) => {
  return <div>{props.children}</div>;
};

export default Object.assign(Post, { Title, Body, Tag });
