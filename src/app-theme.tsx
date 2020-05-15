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
      fontWeight: 700
    },
    subtitle2: {
      fontWeight: 400
    },
    
    h2: {
      fontFamily: montserrat,
      fontWeight: 700
    },

    h5: {
      fontFamily: montserrat,
      fontWeight: 700
    },
    
    body1: {
      fontFamily: montserrat,
      fontSize: '2rem'
    }

  },
  spacing: 10,
});