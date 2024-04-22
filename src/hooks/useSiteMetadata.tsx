import { graphql, useStaticQuery } from 'gatsby';

interface SiteMetadataProps {
  site: {
    siteMetadata: {
      siteUrl: string;
      siteName: string;
      navigation: { name: string; slug: string }[];
    };
  };
}

const useSiteMetadata = () => {
  const data = useStaticQuery<SiteMetadataProps>(graphql`
    {
      site {
        siteMetadata {
          siteUrl
          siteName
          navigation {
            name
            slug
          }
        }
      }
    }
  `);

  return data.site.siteMetadata;
};

export default useSiteMetadata;
