import { Theme } from "@material-ui/core";

export default (theme: Theme) => ({
  progressBar: {
    height: theme.spacing(1),
    borderRadius: '5px', 
    backgroundColor: '#C4C4C4',
    '& .MuiLinearProgress-bar': {
      backgroundColor: theme.palette.success.main,
    }
  },
  title: {
    fontSize: `${theme.spacing(1.5)}px`,
    color: '#666666'
  }
});