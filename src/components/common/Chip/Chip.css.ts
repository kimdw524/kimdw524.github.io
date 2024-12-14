import { recipe } from '@vanilla-extract/recipes';

import colorPalette from '@/styles/colorPalette';

export const chip = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',

    wordBreak: 'keep-all',

    transition: 'all 0.2s ease',
  },

  variants: {
    size: {
      sm: {
        height: '2rem',
        padding: '0 0.625rem',
        borderRadius: '1rem',

        fontSize: '0.875rem',
      },

      md: {
        height: '2.5rem',
        padding: '0 0.875rem',
        borderRadius: '1.25rem',

        fontSize: '1rem',
      },
    },

    variant: {
      contained: {
        backgroundColor: colorPalette.blueGrey[50],

        ':hover': {
          backgroundColor: colorPalette.blueGrey[100],
        },
      },

      outlined: {
        border: '0',
        backgroundColor: 'transparent',

        color: colorPalette.blueGrey[900],

        ':hover': {
          backgroundColor: colorPalette.blueGrey[200],

          color: '#fff',
        },
      },
    },

    isSelected: {
      true: {
        background: colorPalette.blueGrey[500],

        color: '#fff',

        ':hover': {
          backgroundColor: colorPalette.blueGrey[500],
        },
      },
    },
  },
});
