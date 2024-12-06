import { graphql, type HeadFC, type PageProps } from 'gatsby';
import type { IGatsbyImageData } from 'gatsby-plugin-image';
import * as React from 'react';

import { lightTheme } from '@/styles/lightTheme.css';

import Layout from '@/components/layout/Layout';
import PostItem from '@/components/post/PostItem';
import PostList from '@/components/post/PostList';

interface PageQuery {
  allMarkdownRemark: {
    edges: {
      node: {
        id: string;
        fileAbsolutePath: string;
        excerpt: string;
        frontmatter: {
          date: string;
          title: string;
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

const IndexPage: React.FC<PageProps> = (data) => {
  const query = data.data as PageQuery;

  return (
    <Layout>
      <div style={{ padding: '1rem' }}>
        <PostList>
          {query.allMarkdownRemark.edges.map(({ node }) => (
            <PostItem
              key={node.id}
              title={node.frontmatter.title}
              body={node.excerpt}
              to={node.fileAbsolutePath.split('/').at(-2) || ''}
              createdAt={node.frontmatter.date}
              thumbnail={node.frontmatter.thumbnail.childImageSharp.gatsbyImageData}
              tags={node.frontmatter.tags}
            />
          ))}
        </PostList>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <title>Home Page</title>
    <body className={lightTheme} />
  </>
);

export const pageQuery = graphql`
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
`;
