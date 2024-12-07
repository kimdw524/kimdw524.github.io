import { type HeadFC, type PageProps } from 'gatsby';
import * as React from 'react';

import { lightTheme } from '@/styles/lightTheme.css';

import * as s from './index.css';

import Layout from '@/components/layout/Layout';
import AllTags from '@/components/post/AllTags';
import RecentPostList from '@/components/post/RecentPostList';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div className={s.container}>
        <section>
          <RecentPostList />
        </section>
        <section className={s.right}>
          <AllTags />
        </section>
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
