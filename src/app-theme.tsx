import { createMuiTheme } from '@material-ui/core/styles';

const montserrat = 'Montserrat, sans-serif';

export default createMuiTheme({
  palette: {
    secondary: {
      main: '#C4C4C4',
    },

    background: {
      default: '#E8E8E8'
    }
  },

  typography: {
    subtitle1: {
      fontFamily: montserrat,
      fontWeight: 700
    },
    h4: {
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