import { graphql, useStaticQuery } from 'gatsby';
import { ImageDataLike } from 'gatsby-plugin-image';

interface RecentPosts {
  allMdx: {
    nodes: {
      excerpt: string;
      id: string;
      frontmatter: {
        title: string;
        date: string;
        id: string;
        banner: ImageDataLike;
        tags: string[];
      };
    }[];
  };
}

const useRecentPosts = () => {
  const data = useStaticQuery<RecentPosts>(graphql`
    {
      allMdx(sort: { frontmatter: { date: DESC } }, limit: 5) {
        nodes {
          excerpt(pruneLength: 100)
          id
          frontmatter {
            title
            date
            id
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
  `);

  return data.allMdx.nodes;
};

export default useRecentPosts;
