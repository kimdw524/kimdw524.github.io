import { graphql, useStaticQuery } from 'gatsby';

interface NavigationProps {
  site: {
    siteMetadata: {
      navigation: { name: string; slug: string }[];
    };
  };
}

const useNavigation = () => {
  const data = useStaticQuery<NavigationProps>(graphql`
    query {
      site {
        siteMetadata {
          navigation {
            name
            slug
          }
        }
      }
    }
  `);

  return data.site.siteMetadata.navigation;
};

export default useNavigation;
