import { style } from '@vanilla-extract/css';

import colorPalette from '@/styles/colorPalette';
import theme from '@/styles/theme.css';

export const container = style({
  maxWidth: '50rem',
  margin: '0 auto',
  padding: '1rem',
});

export const title = style({
  fontSize: '2.5rem',
  fontWeight: '600',
});

export const date = style({
  color: theme.text.light,
  fontSize: '0.875rem',
});

export const header = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '0.5rem',

  marginBottom: '1rem',
  paddingBottom: '1rem',
  borderBottom: `0.0625rem solid ${colorPalette.blueGrey[100]}`,
});

export const content = style({
  position: 'relative',
});

export const toc = style({
  '@media': {
    'screen and (max-width: 1280px)': {
      display: 'none',
    },
  },
});
