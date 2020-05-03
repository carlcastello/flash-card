import { Theme } from "@material-ui/core";

export default (theme: Theme) => ({
  paper: {

  },
  input: {
    padding: 0,
    fontSize: theme.typography.body1.fontSize
  },
  button: {
    width: '100%',
    backgroundColor: theme.palette.success.main,
    color: '#FFF',
    '&:hover': {
      backgroundColor: theme.palette.success.light,
    }
  }
});