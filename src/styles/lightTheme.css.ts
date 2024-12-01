import { createTheme } from '@vanilla-extract/css';

import themeContract from './theme.css';

export const lightTheme = createTheme(themeContract, {
  background: {
    normal: '#fff',
  },
  text: {
    normal: '#000',
  },
});
