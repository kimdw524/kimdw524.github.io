import { style } from '@vanilla-extract/css';

import { breakpoints } from '@/styles/tokens';

export const container = style({
  display: 'flex',
  flexDirection: 'row',
  gap: '2rem',

  maxWidth: '90rem',
  margin: '0 auto',
  padding: '1rem',
});

export const right = style({
  flex: '0 0 20rem',

  '@media': {
    [`screen and (max-width: ${breakpoints.md})`]: {
      display: 'none',
    },
  },
});
