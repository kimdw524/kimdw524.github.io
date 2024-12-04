import { Link } from 'gatsby';

import { formatDate } from '@/utils/time';

import * as s from './PostItem.css';

interface PostItemProps {
  to: string;
  thumbnail: string;
  title: string;
  body: string;
  createdAt: string;
}

const PostItem = ({ to, thumbnail, title, body, createdAt }: PostItemProps) => {
  return (
    <Link to={to} className={s.container} style={{ width: '400px' }}>
      <div className={s.thumbnailWrapper}>
        <img src={thumbnail} className={s.thumbnail} alt="thumbnail" loading="lazy" />
      </div>
      <div className={s.postInfo}>
        <span className={s.title}>{title}</span>
        <span className={s.body}>{body}</span>
        <span className={s.date}>{formatDate(createdAt)}</span>
      </div>
    </Link>
  );
};

export default PostItem;
