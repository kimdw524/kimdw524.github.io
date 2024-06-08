/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { graphql, type HeadFC, type PageProps } from 'gatsby';
import { ImageDataLike } from 'gatsby-plugin-image';
import Layout from '../components/layout';
import Post from '../components/post';
import useSiteMetadata from '../hooks/useSiteMetadata';

interface PostProps extends PageProps {
  data: {
    markdownRemark: {
      frontmatter: {
        id: number;
        title: string;
        date: string;
        tags: string[];
        category: string;
        banner: ImageDataLike;
      };
      html: string;
    };
  };
}

const containerCss = css`
  max-width: var(--body-maxWidth);
  margin: 0 auto;
  padding: 1rem 2rem;
`;

const PostTemplate = (props: PostProps) => {
  const data = props.data.markdownRemark;

  return (
    <Layout location={props.location}>
      <div css={containerCss}>
        <Post>
          <Post.Title>{data.frontmatter.title}</Post.Title>
          <Post.Category>{data.frontmatter.category}</Post.Category>
          <Post.Tag>{data.frontmatter.tags}</Post.Tag>
          <Post.Banner alt="banner">{data.frontmatter.banner}</Post.Banner>
          <Post.Body>{data.html}</Post.Body>
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
  query ($id: Int!) {
    markdownRemark(frontmatter: { id: { eq: $id } }) {
      frontmatter {
        id
        title
        date
        tags
        category
        banner {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      html
    }
  }
`;
