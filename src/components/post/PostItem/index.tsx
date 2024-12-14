import { Link } from 'gatsby';
import { GatsbyImage, type IGatsbyImageData } from 'gatsby-plugin-image';

import { formatDate } from '@/utils/time';

import * as s from './PostItem.css';

import TagList from '@/components/post/TagList';

interface PostItemProps {
  to: string;
  thumbnail: IGatsbyImageData;
  title: string;
  body: string;
  createdAt: string;
  tags: string[];
}

const PostItem = ({ to, thumbnail, title, body, createdAt, tags }: PostItemProps) => {
  return (
    <Link to={to} className={s.container} draggable={false}>
      <div className={s.thumbnailWrapper} style={{ backgroundColor: thumbnail.backgroundColor }}>
        <GatsbyImage image={thumbnail} className={s.thumbnail} alt="thumbnail" draggable={false} />
      </div>
      <div className={s.postInfo}>
        <span className={s.title}>{title}</span>
        <span className={s.body}>{body}</span>
        <TagList tags={tags} />
        <span className={s.date}>{formatDate(createdAt)}</span>
      </div>
    </Link>
  );
};

export default PostItem;
