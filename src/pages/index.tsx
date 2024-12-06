import { type HeadFC, type PageProps } from 'gatsby';
import * as React from 'react';

import { lightTheme } from '@/styles/lightTheme.css';

import Layout from '@/components/layout/Layout';
import RecentPostList from '@/components/post/RecentPostList';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div style={{ padding: '1rem' }}>
        <RecentPostList />
      </div>
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
