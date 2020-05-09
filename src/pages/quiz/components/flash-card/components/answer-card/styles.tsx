import { Theme } from "@material-ui/core";

export default (theme: Theme) => ({
  paper: {

  },
  input: {
    fontSize: theme.typography.body1.fontSize,
    '& .MuiInput-input': {
      padding: 0,
    }
  },
  typography: {
    lineHeight: 0,
  }
});