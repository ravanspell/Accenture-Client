import { createTheme } from '@material-ui/core/styles';
import { PRIMARY_COLOR, SEC_COLOR } from './conststnts';

const theme = createTheme({      
  typography: {
    button: {
      textTransform: 'none'
    },
    
  },
  palette: {
    primary: {
      main: PRIMARY_COLOR,
    },
    secondary:{
      main: SEC_COLOR
    }
  },
});

export default theme;