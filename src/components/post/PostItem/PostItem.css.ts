import { style } from '@vanilla-extract/css';

import theme from '@/styles/theme.css';

export const container = style({
  display: 'flex',
  gap: '1rem',

  margin: '1rem 0',

  userSelect: 'none',
});

export const thumbnailWrapper = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flex: '0 0 auto',
  overflow: 'hidden',

  width: '192px',
  height: '108px',
  borderRadius: '0.5rem',
});

export const thumbnail = style({
  maxWidth: '100%',
  maxHeight: '100%',
  aspectRatio: '16 / 9',
});

export const postInfo = style({
  display: 'flex',
  flexDirection: 'column',
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
  marginTop: '0.5rem',
  marginBottom: '0.5rem',

  color: theme.text.light,
  fontWeight: '400',
  wordBreak: 'break-word',
});

export const date = style({
  color: theme.text.light,
  fontSize: '0.875rem',
  fontWeight: '400',
});
