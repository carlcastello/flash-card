import { Theme } from "@material-ui/core";

export default (theme: Theme) => ({
  progressBarContainer: {
    flexGrow: 1,
  },
  progressBar: {
    height: theme.spacing(1),
    borderRadius: '5px',
    backgroundColor: '#d6d6d6',
    '& > div': {
      backgroundColor: theme.palette.success.main,
    },
    '&.WRONG > div': {
      backgroundColor: theme.palette.error.main,
    },
    '&.HINT > div': {
      backgroundColor: theme.palette.warning.main,
    }
  },
  title: {
    fontSize: `${theme.spacing(1.5)}px`,
    color: '#666666'
  }
});