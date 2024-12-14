import { graphql, Link, useStaticQuery } from 'gatsby';

import * as s from './AllTags.css';

import Chip from '@/components/common/Chip';

interface AllTagsQuery {
  allMarkdownRemark: {
    group: {
      tag: string;
      totalCount: number;
    }[];
  };
}

interface AllTagsProps {
  selected?: string;
}

const AllTags = ({ selected }: AllTagsProps) => {
  const data: AllTagsQuery = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        group(field: { frontmatter: { tags: SELECT } }) {
          tag: fieldValue
          totalCount
        }
      }
    }
  `);

  return (
    <div className={s.container}>
      {data.allMarkdownRemark.group
        .sort((a, b) => b.totalCount - a.totalCount)
        .map((tag) => {
          const isSelected = tag.tag === selected;

          return (
            <Link key={tag.tag} to={isSelected ? '/' : `/tag/${tag.tag}`} draggable={false}>
              <Chip variant="outlined" isSelected={isSelected}>
                <span className={s.tag}>{tag.tag}</span>
                <span className={s.count}>{tag.totalCount}</span>
              </Chip>
            </Link>
          );
        })}
    </div>
  );
};

export default AllTags;
