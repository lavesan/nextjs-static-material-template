import { createTheme } from '@mui/material/styles';
import { BLUE_1 } from './colors';

const theme = createTheme({
    palette: {
      primary: {
        main: BLUE_1,
      },
      secondary: {
        main: '#ff6666',
      },
    },
  });
  
  export default theme;
