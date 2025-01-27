import { graphql, useStaticQuery } from 'gatsby';

import PostList from '@/components/post//PostList';
import PostItem from '@/components/post/PostItem';

const RecentPostList = () => {
  const data: Queries.RecentPostListQuery = useStaticQuery(graphql`
    query RecentPostList {
      allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
        edges {
          node {
            id
            excerpt(pruneLength: 100)
            frontmatter {
              date
              title
              slug
              tags
            }
          }
        }
      }
    }
  `);

  return (
    <PostList>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <PostItem
          key={node.id}
          title={node.frontmatter?.title || ''}
          body={node.excerpt || ''}
          to={`/post/${node.frontmatter?.slug}`}
          createdAt={node.frontmatter?.date || ''}
          tags={(node.frontmatter?.tags || []) as string[]}
        />
      ))}
    </PostList>
  );
};

export default RecentPostList;
