import { graphql, Link, useStaticQuery } from 'gatsby';

import * as s from './AllTags.css';

import Chip from '@/components/common/Chip';
import SectionHeader from '@/components/common/SectionHeader';

interface AllTagsQuery {
  allMarkdownRemark: {
    group: {
      tag: string;
      totalCount: number;
    }[];
  };
}

const AllTags = () => {
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
    <>
      <SectionHeader>Tags</SectionHeader>
      <div className={s.container}>
        {data.allMarkdownRemark.group
          .sort((a, b) => b.totalCount - a.totalCount)
          .map((tag) => (
            <Link key={tag.tag} to={`/tag/${tag.tag}`}>
              <Chip variant="outlined">
                <span className={s.tag}>{tag.tag}</span>
                <span className={s.count}>{tag.totalCount}</span>
              </Chip>
            </Link>
          ))}
      </div>
    </>
  );
};

export default AllTags;
