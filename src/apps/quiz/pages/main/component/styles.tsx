import { Theme } from "@material-ui/core";

export default (theme: Theme) => ({
  boxContent: {
    maxWidth: '1000px',
    display: 'flex' as 'flex',
    flexDirection: 'column' as 'column',
    alignSelf: 'center' as 'center',
    width: '100%'
  },
  boxContainer: {
    display: 'flex' as 'flex',
    flexDirection: 'column' as 'column',
    height: '100vh',
    justifyContent: 'center',
    backgroundColor: theme.palette.background.default,
  },
  progressBarContainer: {
    display: 'flex' as 'flex',
  },
  iconButton: {
    marginLeft: theme.spacing(1),
  }
});