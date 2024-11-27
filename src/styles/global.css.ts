import { fontFace, globalStyle } from '@vanilla-extract/css';

import theme from './theme.css';

import Pretendard from '@/assets/fonts/PretendardVariable.woff2';

const pretendard = fontFace({
  src: `url(${Pretendard})`,
});

globalStyle('*', {
  fontFamily: 'inherit',
});

globalStyle('body', {
  backgroundColor: theme.background.normal,
  color: theme.text.normal,
  fontSize: '16px',
  fontFamily: pretendard,
});
