import { createTheme } from '@vanilla-extract/css';

import colorPalette from './colorPalette';
import themeContract from './theme.css';

export const lightTheme = createTheme(themeContract, {
  background: {
    normal: '#fff',
  },
  text: {
    normal: colorPalette.blueGrey[800],
    light: colorPalette.blueGrey[600],
    hover: colorPalette.blue[500],
  },
});
