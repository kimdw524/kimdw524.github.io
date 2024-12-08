import { style } from '@vanilla-extract/css';

import { logoSizeVar } from '../Navbar.css';

export const logo = style({
  fontSize: logoSizeVar,
  fontWeight: '500',

  transition: 'all 0.2s ease',
});
