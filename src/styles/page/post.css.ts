import { style } from '@vanilla-extract/css';

import colorPalette from '@/styles/colorPalette';
import theme from '@/styles/theme.css';
import { breakpoints } from '@/styles/tokens';

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

  marginBottom: '4rem',
});

export const toc = style({
  '@media': {
    'screen and (max-width: 1280px)': {
      display: 'none',
    },
  },
});

export const navigation = style({
  display: 'grid',
  gap: '2rem',
  gridTemplateColumns: '1fr 1fr',

  marginTop: '2rem',
  padding: '0 1rem',

  '@media': {
    [`screen and (max-width: ${breakpoints.xs})`]: {
      gap: '1rem',
      gridTemplateColumns: '1fr',
    },
  },
});

export const navigationItem = style({
  overflow: 'hidden',
});

export const profile = style({
  padding: '0.75rem',
  border: `0.0625rem solid ${colorPalette.grey[300]}`,
  borderRadius: '0.5rem',
});
