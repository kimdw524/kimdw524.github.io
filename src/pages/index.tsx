import { type HeadFC, type PageProps } from 'gatsby';
import * as React from 'react';

import { lightTheme } from '@/styles/lightTheme.css';

import Home from '@/components/layout/Home';
import Layout from '@/components/layout/Layout';
import RecentPostList from '@/components/post/RecentPostList';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Home postList={<RecentPostList />} />
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <title>Home Page</title>
    <body className={lightTheme} />
  </>
);
