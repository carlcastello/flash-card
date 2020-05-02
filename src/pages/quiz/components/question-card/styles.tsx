import { Theme } from "@material-ui/core";

export default (theme: Theme) => ({
  paper: {
    backgroundColor: theme.palette.secondary.main,
    borderWidth: '2px',
    borderColor: theme.palette.secondary.dark,
    textAlign: 'center' as 'center',
  }
});