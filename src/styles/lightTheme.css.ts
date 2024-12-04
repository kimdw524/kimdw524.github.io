import { createTheme } from '@vanilla-extract/css';

import colorPalette from './colorPalette';
import themeContract from './theme.css';

export const lightTheme = createTheme(themeContract, {
  background: {
    normal: '#fff',
  },
  text: {
    normal: '#000',
    light: colorPalette.blueGrey[700],
    hover: colorPalette.blue[500],
  },
});
