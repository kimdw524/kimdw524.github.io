import { fontFace, globalStyle } from '@vanilla-extract/css';

import theme from './theme.css';

import Pretendard from '@/assets/fonts/PretendardVariable.woff2';

const pretendard = fontFace({
  src: `url(${Pretendard})`,
});

globalStyle('*', {
  margin: '0',

  boxSizing: 'border-box',

  color: 'inherit',
  fontFamily: 'inherit',
  textDecoration: 'inherit',
  lineHeight: 'inherit',

  WebkitTapHighlightColor: 'transparent',
});

globalStyle('body', {
  backgroundColor: theme.background.normal,

  color: theme.text.normal,
  fontSize: '16px',
  fontFamily: pretendard,
  lineHeight: '1.5',
});
