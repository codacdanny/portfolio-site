// 1. Import the utilities
import { extendTheme } from '@chakra-ui/react';

// 2. Update the breakpoints as key-value pairs
const breakpoints = {
  small: '250px',
  md: '320px',
  big: '375px',
  bigger: '425px',
  sm: '480px',
  lg: '768px',
  xl: '1440px',
  '2xl': '2560px',
};

// 3. Extend the theme
const theme = extendTheme({ breakpoints });

export default theme;
