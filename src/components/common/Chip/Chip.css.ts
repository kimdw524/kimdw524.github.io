import { style } from '@vanilla-extract/css';

import colorPalette from '@/styles/colorPalette';

export const chip = style({
  padding: '0.375rem 0.5rem',
  borderRadius: '0.75rem',
  backgroundColor: colorPalette.blueGrey[50],

  fontSize: '0.875rem',
  wordBreak: 'keep-all',

  transition: 'background-color 0.2s ease',

  ':hover': {
    backgroundColor: colorPalette.blueGrey[100],
  },
});
