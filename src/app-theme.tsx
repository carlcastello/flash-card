import { createMuiTheme } from '@material-ui/core/styles';

const montserrat = 'Montserrat, sans-serif';

export default createMuiTheme({
  palette: {
    // primary: {
    //   main: '#10A71F',
    // },

    // grey: '#grey',
    // error: {
    //   main: '#A71010'
    // }
    background: {
      default: '#E8E8E8'
    }
  },

  typography: {
    subtitle1: {
      fontFamily: montserrat,
      fontWeight: 700
    }
  },
  spacing: 10,
});