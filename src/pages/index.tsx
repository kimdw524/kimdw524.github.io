import { type HeadFC, type PageProps } from 'gatsby';
import * as React from 'react';

import { lightTheme } from '@/styles/lightTheme.css';
import * as s from '@/styles/page/index.css';

import SectionHeader from '@/components/common/SectionHeader';
import Layout from '@/components/layout/Layout';
import AllTags from '@/components/post/AllTags';
import RecentPostList from '@/components/post/RecentPostList';
import Profile from '@/components/profile/Profile';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div className={s.container}>
        <div className={s.header}>
          <Profile />
        </div>
        <div className={s.body}>
          <section>
            <SectionHeader>Posts</SectionHeader>
            <RecentPostList />
          </section>
          <div className={s.right}>
            <section>
              <SectionHeader>Tags</SectionHeader>
              <AllTags />
            </section>
          </div>
        </div>
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
