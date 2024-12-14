import { graphql, useStaticQuery } from 'gatsby';
import type { IGatsbyImageData } from 'gatsby-plugin-image';

import PostList from '@/components/post//PostList';
import PostItem from '@/components/post/PostItem';

interface RecentPostListQuery {
  allMarkdownRemark: {
    edges: {
      node: {
        id: string;
        excerpt: string;
        frontmatter: {
          date: string;
          title: string;
          slug: string;
          tags: string[];
          thumbnail: {
            childImageSharp: {
              gatsbyImageData: IGatsbyImageData;
            };
          };
        };
      };
    }[];
  };
}

const RecentPostList = () => {
  const data: RecentPostListQuery = useStaticQuery(graphql`
    query {
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
              thumbnail {
                childImageSharp {
                  gatsbyImageData
                }
              }
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
          title={node.frontmatter.title}
          body={node.excerpt}
          to={`/post/${node.frontmatter.slug}`}
          createdAt={node.frontmatter.date}
          thumbnail={node.frontmatter.thumbnail.childImageSharp.gatsbyImageData}
          tags={node.frontmatter.tags}
        />
      ))}
    </PostList>
  );
};

export default RecentPostList;
