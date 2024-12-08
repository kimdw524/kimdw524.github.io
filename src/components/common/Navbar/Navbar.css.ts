import { createVar } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import theme from '@/styles/theme.css';

export const logoSizeVar = createVar();

export const container = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    height: '5rem',
    padding: '0 1rem',
    borderBottom: '0.0625rem solid',
    borderBottomColor: 'transparent',
    backgroundColor: theme.background.normal,

    transition: 'height 0.2s ease, border-bottom-color 0.2s ease, transform 0.8s ease, opacity 0.4s ease',
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

    isVisible: {
      true: {
        transform: 'translateY(0)',
        opacity: 1,
      },

      false: {
        transform: 'translateY(-100%)',
        opacity: 0,
      },
    },
  },
});
