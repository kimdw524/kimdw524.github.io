/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { FiMenu } from '@react-icons/all-files/fi/FiMenu';
import { MouseEvent, ReactNode, useState } from 'react';

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

    transition: background-color 300ms ease;

    ${toggle
      ? css`
          background-color: rgba(0, 0, 0, 0.33);
        `
      : css`
          background-color: transparent;

          pointer-events: none;
        `}
  }
`;

const containerCss = (toggle: boolean) => css`
  @media (max-width: 576px) {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    position: fixed;
    top: 0;
    left: 100%;

    width: 20rem;
    max-width: calc(100% - 4rem);
    height: 100%;
    padding: 1rem 0;
    box-shadow: var(--navbar-offcanvas-boxShadow);
    box-sizing: border-box;

    background-color: var(--body-bg);

    transition: all 300ms ease;
    transition-property: transform, opacity;

    ${toggle
      ? css`
          transform: translateX(-100%);
          opacity: 1;
        `
      : css`
          transform: translateX(0);
          opacity: 0;
        `}
    * {
      display: inline-block;

      width: 100%;
      padding: 0.75rem 2rem;
      box-sizing: border-box;

      font-size: 1.125rem;
      text-align: right;
    }
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
        <div css={containerCss(toggle)} onClick={(e) => e.stopPropagation()}>
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default Item;
