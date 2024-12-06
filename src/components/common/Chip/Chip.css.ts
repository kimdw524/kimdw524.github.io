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
        padding: '0.375rem 0.5rem',
        borderRadius: '0.9375rem',

        fontSize: '0.875rem',
      },

      md: {
        padding: '0.5rem 0.75rem',
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
        border: `0.0625rem solid ${colorPalette.blue.A700}`,
        backgroundColor: '#fff',

        color: colorPalette.blue.A700,

        ':hover': {
          backgroundColor: colorPalette.blue.A700,

          color: '#fff',
        },
      },
    },
  },
});
