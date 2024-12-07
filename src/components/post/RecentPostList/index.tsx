import { graphql, useStaticQuery } from 'gatsby';
import type { IGatsbyImageData } from 'gatsby-plugin-image';

import SectionHeader from '@/components/common/SectionHeader';
import PostList from '@/components/post//PostList';
import PostItem from '@/components/post/PostItem';

interface RecentPostListQuery {
  allMarkdownRemark: {
    edges: {
      node: {
        id: string;
        fileAbsolutePath: string;
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
            fileAbsolutePath
            excerpt(pruneLength: 100)
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
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
    <>
      <SectionHeader>Posts</SectionHeader>
      <PostList>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <PostItem
            key={node.id}
            title={node.frontmatter.title}
            body={node.excerpt}
            to={node.frontmatter.slug}
            createdAt={node.frontmatter.date}
            thumbnail={node.frontmatter.thumbnail.childImageSharp.gatsbyImageData}
            tags={node.frontmatter.tags}
          />
        ))}
      </PostList>
    </>
  );
};

export default RecentPostList;
