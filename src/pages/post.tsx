/** @jsx jsx */
import { jsx } from '@emotion/react';
import type { HeadFC, PageProps } from 'gatsby';
import useSiteMetadata from '../hooks/useSiteMetadata';

const Post = (props: PageProps) => {
  console.log(props);
  return <div></div>;
};

export default Post;

export const Head: HeadFC = () => {
  const siteMedata = useSiteMetadata();
  return <title>{siteMedata.siteName}</title>;
};
