import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import colorPalette from '@/styles/colorPalette';

export const container = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',

    padding: '1rem',
    borderRadius: '0.5rem',
    backgroundColor: colorPalette.blueGrey[50],

    transition: 'filter 0.2s ease',

    userSelect: 'none',

    ':hover': {
      filter: 'contrast(90%)',
    },
  },

  variants: {
    direction: {
      prev: {
        flexDirection: 'row-reverse',

        textAlign: 'left',
      },

      next: {
        flexDirection: 'row',

        textAlign: 'right',
      },
    },
  },
});

export const textContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
  flex: '1 1 auto',
  overflow: 'hidden',
});

export const header = style({
  color: colorPalette.blueGrey[800],
  fontSize: '0.875rem',
  fontWeight: '600',
});

export const title = style({
  overflow: 'hidden',

  color: colorPalette.blueGrey[900],
  fontSize: '1rem',
  fontWeight: '400',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});

export const icon = recipe({
  base: {
    flex: '0 0 auto',

    width: '1.25rem',

    transition: 'transform 0.2s ease',
  },

  variants: {
    direction: {
      prev: {
        selectors: {
          [`${container()}:hover > &`]: {
            transform: 'translateX(-0.25rem)',
          },
        },
      },

      next: {
        selectors: {
          [`${container()}:hover > &`]: {
            transform: 'translateX(0.25rem)',
          },
        },
      },
    },
  },
});
