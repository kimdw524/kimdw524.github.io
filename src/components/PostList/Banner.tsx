/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { useEffect, useState } from 'react';

interface PostListBannerProps {
  alt: string;
  children: string;
}

const bannerCss = css`
  width: 100%;
  aspect-ratio: 16 / 9;
`;

const errorCss = css`
  display: inline-block;

  width: 100%;
  aspect-ratio: 16 / 9;

  background-color: #888;
`;

const Banner = ({ alt, children }: PostListBannerProps) => {
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    setError(false);
  }, [children]);

  return error ? (
    <div css={errorCss}></div>
  ) : (
    <img css={bannerCss} onError={() => setError(true)} src={children} alt={alt} />
  );
};

export default Banner;
