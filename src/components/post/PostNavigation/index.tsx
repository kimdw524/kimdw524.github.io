import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { Link } from 'gatsby';

import * as s from './PostNavigation.css';

interface PostNavigationProps {
  slug: string;
  direction: 'prev' | 'next';
  title: string;
}

const PostNavigation = ({ slug, direction, title }: PostNavigationProps) => {
  return (
    <Link to={`/post/${slug}`}>
      <div className={s.container({ direction })}>
        <div className={s.textContainer}>
          <span className={s.header}>{direction === 'next' ? '다음글' : '이전글'}</span>
          <div className={s.title}>{title}</div>
        </div>
        <div className={s.icon({ direction })}>{direction === 'next' ? <ChevronRightIcon /> : <ChevronLeftIcon />}</div>
      </div>
    </Link>
  );
};

export default PostNavigation;
