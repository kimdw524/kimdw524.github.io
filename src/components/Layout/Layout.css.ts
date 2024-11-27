import { sprinkles } from '@/styles/sprinkle.css';
import { style } from '@vanilla-extract/css';

export const container = style([
  sprinkles({
    display: 'flex',
    paddingX: 'small',

    // Conditional sprinkles:
    flexDirection: {
      mobile: 'column',
      desktop: 'row',
    },
    background: {
      lightMode: 'blue-50',
      darkMode: 'gray-700',
    },
  }),
  {
    width: '10rem',
  },
]);
