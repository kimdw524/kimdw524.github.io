/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { FiMenu } from '@react-icons/all-files/fi/FiMenu';
import { ReactNode, useState } from 'react';

interface NavbarItemProps {
  children: ReactNode;
}

const toggleCss = css`
  display: none;

  cursor: pointer;

  @media (max-width: 576px) {
    display: flex;
    align-items: center;
  }
`;

const shadowCss = (toggle: boolean) => css`
  display: block;

  @media (max-width: 576px) {
    position: fixed;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    background-color: rgba(0, 0, 0, 0.33);

    transition: opacity 300ms ease;

    ${toggle
      ? css`
          opacity: 1;
        `
      : css`
          opacity: 0;
          pointer-events: none;
        `}
  }
`;

const containerCss = (toggle: boolean) => css`
  @media (max-width: 576px) {
    display: flex;
    flex-direction: column;
    width: calc(100% - 4rem);

    background-color: var(--body-bg);

    transition: all 300ms ease;

    transform: translateX(${toggle ? '4rem' : '100%'});
  }
`;

const Item = (props: NavbarItemProps) => {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <div>
      <div css={toggleCss} onClick={() => setToggle((toggle) => !toggle)}>
        <FiMenu size={24} />
      </div>
      <div css={shadowCss(toggle)} onClick={() => setToggle(false)}>
        <div css={containerCss(toggle)}>{props.children}</div>
      </div>
    </div>
  );
};

export default Item;
