/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { GatsbyImage, ImageDataLike, getImage } from 'gatsby-plugin-image';

interface PostListBannerProps {
  alt: string;
  children: ImageDataLike;
}

const wrapperCss = css`
  display: inline-block;

  width: 100%;
  aspect-ratio: 16 / 9;

  background-color: #aaa;
`;

const bannerCss = css`
  width: 100%;
  aspect-ratio: 16 / 9;
`;

const Banner = ({ alt, children }: PostListBannerProps) => {
  return (
    <div css={wrapperCss}>
      <GatsbyImage image={getImage(children)!} css={bannerCss} alt={alt} />
    </div>
  );
};

export default Banner;
