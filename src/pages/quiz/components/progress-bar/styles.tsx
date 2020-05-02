import { Theme } from "@material-ui/core";

export default (theme: Theme) => ({
  progressBar: {
    height: theme.spacing(1),
    borderRadius: '5px', 
    backgroundColor: theme.palette.secondary.main,
    '& .MuiLinearProgress-bar': {
      backgroundColor: theme.palette.success.main,
    }
  },
  title: {
    fontSize: `${theme.spacing(1.5)}px`,
    color: '#666666'
  }
});