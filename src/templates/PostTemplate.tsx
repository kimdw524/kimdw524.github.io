/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { graphql, type HeadFC, type PageProps } from 'gatsby';
import { ImageDataLike } from 'gatsby-plugin-image';
import Layout from '../components/Layout';
import Post from '../components/Post';
import useSiteMetadata from '../hooks/useSiteMetadata';

interface PostProps extends PageProps {
  data: {
    mdx: {
      frontmatter: {
        title: string;
        date: string;
        tags: string[];
        banner: ImageDataLike;
      };
      body: string;
    };
  };
}

const containerCss = css`
  max-width: var(--body-maxWidth);
  margin: 0 auto;
  padding: 1rem 2rem;
`;

const PostTemplate = (props: PostProps) => {
  return (
    <Layout location={props.location}>
      <div css={containerCss}>
        <Post>
          <Post.Title>{props.data.mdx.frontmatter.title}</Post.Title>
          <Post.Tag>{props.data.mdx.frontmatter.tags}</Post.Tag>
          <Post.Body>{props.data.mdx.body}</Post.Body>
        </Post>
      </div>
    </Layout>
  );
};

export default PostTemplate;

export const Head: HeadFC = () => {
  const siteMedata = useSiteMetadata();
  return <title>{siteMedata.siteName}</title>;
};

export const query = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
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
      body
    }
  }
`;
