import { Link } from 'gatsby';

import Chip from '@/components/common/Chip';

import * as s from './TagList.css';

interface TagListProps {
  tags: string[];
}

const TagList = ({ tags }: TagListProps) => {
  return (
    <div className={s.container}>
      {tags.map((tag) => (
        <Link key={tag} to={`/tag/${tag}`}>
          <Chip>{tag}</Chip>
        </Link>
      ))}
    </div>
  );
};

export default TagList;
