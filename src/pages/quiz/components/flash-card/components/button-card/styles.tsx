import { Theme } from "@material-ui/core";


export default (theme: Theme) => ({
  button: {
    width: '100%',
    color: '#FFF',
    backgroundColor: theme.palette.success.main,
    '&:hover': {
      backgroundColor: theme.palette.success.light,
    },
    
    '&.WRONG': {
      backgroundColor: theme.palette.error.main,
      '&:hover': {
        backgroundColor: theme.palette.error.light,
      }      
    },

    '&.HINT': {
      backgroundColor: theme.palette.warning.main,
      '&:hover': {
        backgroundColor: theme.palette.warning.light,
      }
    }
  },
});