import { recipe } from '@vanilla-extract/recipes';

import colorPalette from '@/styles/colorPalette';

export const chip = recipe({
  base: {
    backgroundColor: colorPalette.blueGrey[50],

    wordBreak: 'keep-all',

    transition: 'background-color 0.2s ease',

    ':hover': {
      backgroundColor: colorPalette.blueGrey[100],
    },
  },

  variants: {
    size: {
      sm: {
        padding: '0.375rem 0.5rem',
        borderRadius: '0.75rem',

        fontSize: '0.875rem',
      },

      md: {
        padding: '0.5rem 0.75rem',
        borderRadius: '0.875rem',

        fontSize: '1rem',
      },
    },
  },
});
