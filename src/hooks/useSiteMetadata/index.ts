import { graphql, useStaticQuery } from 'gatsby';

interface SiteMetadata {
  title: string;
  siteUrl: string;
  nickname: string;
  description: string;
  github: string;
}

const useSiteMetadata = (): SiteMetadata => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          siteUrl
          nickname
          description
          github
        }
      }
    }
  `);

  return data.site.siteMetadata as SiteMetadata;
};

export default useSiteMetadata;
