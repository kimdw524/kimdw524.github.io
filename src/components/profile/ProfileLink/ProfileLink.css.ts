import { style } from '@vanilla-extract/css';

import colorPalette from '@/styles/colorPalette';

export const link = style({
  color: colorPalette.blueGrey[400],
  fontSize: '0.875rem',

  transition: 'color 0.2s ease',

  ':hover': {
    color: colorPalette.blueGrey[900],
  },
});
