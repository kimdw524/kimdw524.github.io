import { createVar } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { breakpoints } from '@/styles/tokens';

export const logoSizeVar = createVar();

export const container = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',

    height: '5rem',
    padding: '0 1rem',
    borderBottom: '0.0625rem solid',
    borderBottomColor: 'transparent',
    backgroundColor: '#fff',

    transition: 'all 0.2s ease',
  },

  variants: {
    isScrolled: {
      true: {
        height: '4rem',
        borderBottomColor: '#d9e0e7',

        vars: {
          [logoSizeVar]: '1.25rem',
        },
      },

      false: {
        vars: {
          [logoSizeVar]: '1.5rem',
        },
      },
    },
  },
});
