import { graphql, Link, PageProps } from 'gatsby';

import SEO from '@/components/common/SEO';
import Home from '@/components/layout/Home';
import Layout from '@/components/layout/Layout';
import PostItem from '@/components/post/PostItem';
import PostList from '@/components/post/PostList';

interface TagPageProps extends PageProps<Queries.TagPageQuery> {
  pageContext: {
    tag: string;
  };
}

const TagPage = ({ data, pageContext }: TagPageProps) => {
  return (
    <Layout>
      <Home
        postHeader={
          <>
            <Link to="/">Posts</Link> / #{pageContext.tag}
          </>
        }
        selectedTag={pageContext.tag}
        postList={
          <PostList>
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <PostItem
                key={node.id}
                title={node.frontmatter?.title || ''}
                body={node.excerpt || ''}
                to={`/post/${node.frontmatter?.slug}`}
                createdAt={node.frontmatter?.date || ''}
                thumbnail={node.frontmatter?.thumbnail?.childImageSharp?.gatsbyImageData}
                tags={(node.frontmatter?.tags || []) as string[]}
              />
            ))}
          </PostList>
        }
      />
    </Layout>
  );
};

export default TagPage;

export const Head = ({ pageContext }: { pageContext: TagPageProps['pageContext'] }) => (
  <>
    <SEO title={pageContext.tag} />
  </>
);

export const query = graphql`
  query TagPage($tag: String) {
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
