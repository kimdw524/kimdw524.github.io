/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { ReactNode } from 'react';

interface NavbarItemProps {
  children: ReactNode;
}

const itemCss = css``;

const Item = (props: NavbarItemProps) => {
  return <div css={itemCss}>{props.children}</div>;
};

export default Item;
