import { style } from '@vanilla-extract/css';

import colorPalette from '@/styles/colorPalette';

export const container = style({
  display: 'inline-flex',
  gap: '0.5rem',
  flexWrap: 'wrap',

  marginTop: '1rem',
  padding: '1rem',
  borderRadius: '0.5rem',
  backgroundColor: colorPalette.grey[100],
});

export const tag = style({
  fontWeight: '400',
});

export const count = style({
  marginLeft: '0.25rem',

  fontSize: '0.75rem',
  fontWeight: '300',
});
