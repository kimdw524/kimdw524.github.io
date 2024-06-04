/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { Link, graphql, type HeadFC, type PageProps } from 'gatsby';
import Layout from '../components/Layout';
import useSiteMetadata from '../hooks/useSiteMetadata';
import PostList from '../components/postList';
import { ImageDataLike } from 'gatsby-plugin-image';

interface TagListProps extends PageProps {
  data: {
    allMdx: {
      nodes: {
        id: string;
        excerpt: string;
        frontmatter: {
          title: string;
          date: string;
          tags: string[];
          banner: ImageDataLike;
        };
      }[];
    };
  };
}

const containerCss = css`
  max-width: var(--body-maxWidth);
  margin: 0 auto;
  padding: 1rem 2rem;
`;

const TagListTemplate = (props: TagListProps) => {
  return (
    <Layout location={props.location}>
      <div css={containerCss}>
        <PostList.Container>
          {props.data.allMdx.nodes.map((post, index) => (
            <PostList key={post.id} index={index}>
              <Link to={`/posts/${post.id}`}>
                <PostList.Banner alt={post.frontmatter.title}>
                  {post.frontmatter.banner}
                </PostList.Banner>
                <PostList.Title>{post.frontmatter.title}</PostList.Title>
                <PostList.Excerpt>{post.excerpt}</PostList.Excerpt>
                <PostList.Date>{post.frontmatter.date}</PostList.Date>
              </Link>
              <PostList.Tag>{post.frontmatter.tags}</PostList.Tag>
            </PostList>
          ))}
        </PostList.Container>
      </div>
    </Layout>
  );
};

export default TagListTemplate;

export const Head: HeadFC = () => {
  const siteMedata = useSiteMetadata();
  return <title>{siteMedata.siteName}</title>;
};

export const query = graphql`
  query ($tag: [String]) {
    allMdx(sort: { frontmatter: { date: DESC } }, filter: { frontmatter: { tags: { in: $tag } } }) {
      nodes {
        excerpt(pruneLength: 100)
        id
        frontmatter {
          title
          date
          banner {
            childImageSharp {
              gatsbyImageData
            }
          }
          tags
        }
      }
    }
  }
`;
