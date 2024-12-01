import { style } from '@vanilla-extract/css';

export const link = style({
  padding: '0.75rem',
  borderRadius: '1rem',

  textDecoration: 'none',

  transition: 'all 0.2s ease',

  ':hover': {
    backgroundColor: '#a0aec338',
  },
});
