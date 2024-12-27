import { lightTheme } from '@/styles/lightTheme.css';

import useSiteMetadata from '@/hooks/useSiteMetadata';

interface SEOProps {
  title?: string;
}

const SEO = ({ title }: SEOProps) => {
  const siteMetadata = useSiteMetadata();

  return (
    <>
      <title>{title ? `${title} - ${siteMetadata.title}` : siteMetadata.title}</title>
      <meta name="description" content={siteMetadata.description || ''} />
      <body className={lightTheme} />
    </>
  );
};

export default SEO;
