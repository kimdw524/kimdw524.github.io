import { style } from '@vanilla-extract/css';

export const nickname = style({
  fontSize: '1.25rem',
  fontWeight: '600',
});

export const description = style({
  marginTop: '0.5rem',
  marginBottom: '1rem',

  wordBreak: 'break-all',
});

export const links = style({
  display: 'flex',
  flexDirection: 'row-reverse',
  gap: '0.5rem',
});
