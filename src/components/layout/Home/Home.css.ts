import { style } from '@vanilla-extract/css';

import colorPalette from '@/styles/colorPalette';
import { breakpoints } from '@/styles/tokens';

export const header = style({
  marginBottom: '1rem',
  paddingBottom: '1rem',
  borderBottom: `0.0625rem solid ${colorPalette.grey[300]}`,

  textAlign: 'right',
});

export const container = style({
  maxWidth: '90rem',
  margin: '0 auto',
  padding: '1rem',
});

export const body = style({
  display: 'flex',
  flexDirection: 'row',
  gap: '2rem',
});

export const left = style({
  flex: '1 1 auto',
});

export const right = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  flex: '0 0 20rem',

  '@media': {
    [`screen and (max-width: ${breakpoints.md})`]: {
      display: 'none',
    },
  },
});
