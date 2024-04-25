/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { graphql, Link, type HeadFC, type PageProps } from 'gatsby';
import Layout from '../components/Layout';
import useSiteMetadata from '../hooks/useSiteMetadata';
import { ImageDataLike } from 'gatsby-plugin-image';

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

const titleCss = css`
  font-weight: 500;
  font-size: 1.75rem;
  line-height: 150%;
`;

const bodyCss = css`
  line-height: 175%;
`;

const tagContainerCss = css`
  margin: 0.5rem 0 1.25rem;
`;

const tagCss = css`
  margin-right: 0.5rem;
`;

const Post = (props: PostProps) => {
  return (
    <Layout location={props.location}>
      <div css={containerCss}>
        <div css={titleCss}>{props.data.mdx.frontmatter.title}</div>
        <div css={tagContainerCss}>
          {props.data.mdx.frontmatter.tags.map((tag) => (
            <Link css={tagCss} key={tag} to="#">
              {tag}
            </Link>
          ))}
        </div>
        <div css={bodyCss}>{props.data.mdx.body}</div>
      </div>
    </Layout>
  );
};

export default Post;

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
