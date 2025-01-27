import { ReactNode } from 'react';

import * as s from './Home.css';

import SectionHeader from '@/components/common/SectionHeader';
import AllTags from '@/components/post/AllTags';
import Profile from '@/components/profile/Profile';

interface HomeProps {
  postHeader?: ReactNode;
  selectedTag?: string;
  postList: ReactNode;
}

const Home = ({ postHeader = 'Post', selectedTag, postList }: HomeProps) => {
  return (
    <div className={s.container}>
      <div className={s.header}>
        <Profile />
      </div>
      <div className={s.body}>
        <section className={s.left}>
          <SectionHeader>{postHeader}</SectionHeader>
          {postList}
        </section>
        <div className={s.right}>
          <section>
            <SectionHeader>Tags</SectionHeader>
            <AllTags selected={selectedTag} />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;
