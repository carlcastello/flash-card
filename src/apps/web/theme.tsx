import { createMuiTheme } from '@material-ui/core/styles';

const montserrat = 'Montserrat, sans-serif';

export default createMuiTheme({
  palette: {
    primary: {
      main: '#4e73df'
    },
    secondary: {
      main: '#DFDFDF',
    },

    background: {
      default: '#f8f9fc'
    }
  },

  typography: {
    subtitle1: {
      fontFamily: montserrat,
      fontSize: '.8rem'
    },
    subtitle2: {
      fontWeight: 400
    },
    
    h2: {
      fontFamily: montserrat,
      color: '#000'
    },

    h4: {
      fontWeight: 400
    },
    
    h5: {
      fontFamily: montserrat,
    },
    
    body1: {
      // fontFamily: montserrat,
      fontWeight: 300
    }

  },
  spacing: 10,
});