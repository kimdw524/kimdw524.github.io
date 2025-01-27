import { style } from '@vanilla-extract/css';

import theme from '@/styles/theme.css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  position: 'relative',

  margin: '1rem 0',

  userSelect: 'none',
});

export const postInfo = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
});

export const title = style({
  fontSize: '1.25rem',
  fontWeight: '600',
  wordBreak: 'break-word',

  transition: 'color 0.2s ease',

  selectors: {
    [`${container}:hover &`]: {
      color: theme.text.hover,
    },
  },
});

export const body = style({
  color: theme.text.normal,
  fontWeight: '400',
  wordBreak: 'break-word',
});

export const date = style({
  color: theme.text.light,
  fontSize: '0.875rem',
  fontWeight: '400',
});
