import { style } from '@vanilla-extract/css';

import { breakpoints } from '@/styles/tokens';

export const container = style({
  display: 'grid',
  gridAutoRows: '1fr',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '1.5rem',

  '@media': {
    [`screen and (max-width: ${breakpoints.lg})`]: {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },

    [`screen and (max-width: ${breakpoints.sm})`]: {
      gridTemplateColumns: 'repeat(1, 1fr)',
    },
  },
});
