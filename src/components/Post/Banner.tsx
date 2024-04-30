/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { GatsbyImage, ImageDataLike, getImage } from 'gatsby-plugin-image';

interface PostBannerProps {
  alt: string;
  children: ImageDataLike;
}

const wrapperCss = css`
  width: 100%;
  max-width: var(--post-banner-maxWidth);
  aspect-ratio: 16 / 9;
  margin: 2rem auto;

  background-color: #aaa;
`;

const bannerCss = css`
  width: 100%;
  aspect-ratio: 16 / 9;
`;

const Banner = ({ alt, children }: PostBannerProps) => {
  return (
    <div css={wrapperCss}>
      <GatsbyImage image={getImage(children)!} css={bannerCss} alt={alt} />
    </div>
  );
};

export default Banner;
