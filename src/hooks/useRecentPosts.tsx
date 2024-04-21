import { graphql, useStaticQuery } from 'gatsby';

interface RecentPosts {
  allMdx: {
    nodes: {
      excerpt: string;
      id: string;
      frontmatter: {
        title: string;
        date: string;
        banner: string;
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
            banner
            tags
          }
        }
      }
    }
  `);

  return data.allMdx.nodes;
};

export default useRecentPosts;
