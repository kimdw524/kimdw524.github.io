import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';

import Layout from '@/components/Layout';

import { lightTheme } from '@/styles/lightTheme.css';

const IndexPage: React.FC<PageProps> = () => {
  return <Layout>Home</Layout>;
};

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <title>Home Page</title>
    <body className={lightTheme} />
  </>
);
