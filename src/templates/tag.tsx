import { graphql, Link, type HeadFC } from 'gatsby';
import { IGatsbyImageData } from 'gatsby-plugin-image';

import { lightTheme } from '@/styles/lightTheme.css';
import * as s from '@/styles/page/index.css';

import SectionHeader from '@/components/common/SectionHeader';
import Layout from '@/components/layout/Layout';
import AllTags from '@/components/post/AllTags';
import PostItem from '@/components/post/PostItem';
import PostList from '@/components/post/PostList';

interface PostListQuery {
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

const TagPage = ({ data, pageContext }: { data: PostListQuery; pageContext: { tag: string } }) => {
  return (
    <Layout>
      <div className={s.container}>
        <section>
          <SectionHeader>
            <Link to="/">Posts</Link> / #{pageContext.tag}
          </SectionHeader>
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
        </section>
        <section className={s.right}>
          <AllTags selected={pageContext.tag} />
        </section>
      </div>
    </Layout>
  );
};

export default TagPage;

export const Head: HeadFC = () => (
  <>
    <title>Home Page</title>
    <body className={lightTheme} />
  </>
);

export const query = graphql`
  query ($tag: String) {
    allMarkdownRemark(filter: { frontmatter: { tags: { in: [$tag] } } }, sort: { frontmatter: { date: DESC } }) {
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
`;
