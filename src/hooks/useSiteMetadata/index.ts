import { graphql, useStaticQuery } from 'gatsby';

const useSiteMetadata = () => {
  const data: Queries.SiteMetadataQuery = useStaticQuery(graphql`
    query SiteMetadata {
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

  return data.site!.siteMetadata!;
};

export default useSiteMetadata;
