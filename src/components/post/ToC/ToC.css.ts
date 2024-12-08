import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import colorPalette from '@/styles/colorPalette';

export const container = style({
  position: 'absolute',
  top: '0',
  left: '100%',
});

export const toc = recipe({
  base: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',

    width: '15rem',
    padding: '1rem',
  },

  variants: {
    fixed: {
      true: {
        position: 'fixed',
        top: '6rem',
      },

      false: {},
    },
  },
});

export const table = recipe({
  base: {
    fontSize: '0.875rem',

    transition: 'all 0.2s ease',

    userSelect: 'none',
  },

  variants: {
    selected: {
      true: {
        color: '#000',
      },

      false: {
        color: colorPalette.blueGrey[300],
      },
    },

    type: {
      h1: {
        marginLeft: '0',
      },

      h2: {
        marginLeft: '0.5rem',
      },

      h3: {
        marginLeft: '1rem',
      },
    },
  },
});
