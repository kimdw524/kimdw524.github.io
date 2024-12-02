import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { breakpoints } from '@/styles/tokens';

export const container = style({
  display: 'block',

  transformOrigin: '0 0',
  transition: 'all 0s ease',

  '@media': {
    [`screen and (max-width: ${breakpoints.mobile})`]: {
      display: 'none',
    },
  },
});

export const compact = recipe({
  base: {
    display: 'none',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    position: 'absolute',
    top: '100%',
    right: '0',
    left: '0',

    padding: '0.5rem',
    backgroundColor: '#fffffff0',
    borderTop: '0.0625rem solid #dbdbdb',
    borderBottom: '0.0625rem solid #dbdbdb',

    transformOrigin: '0 0',
    transition: 'transform 0.2s ease, opacity 0.2s ease',

    '@media': {
      [`screen and (max-width: ${breakpoints.mobile})`]: {
        display: 'flex !important',
      },
    },
  },

  variants: {
    isVisible: {
      true: {
        transform: 'scaleY(100%)',
        opacity: '1',
      },

      false: {
        transform: 'scaleY(0)',
        opacity: '0',
      },
    },
  },
});

export const toggle = style({
  display: 'none',

  width: '3rem',
  height: '3rem',
  border: '0',
  borderRadius: '50%',
  backgroundColor: 'transparent',

  transition: 'all 0.2s ease',

  cursor: 'pointer',

  ':active': {
    backgroundColor: '#bbbbbb38',
  },

  '@media': {
    [`screen and (max-width: ${breakpoints.mobile})`]: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
});
