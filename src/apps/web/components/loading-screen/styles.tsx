import { Theme } from "@material-ui/core"

export default (theme: Theme) => ({
  boxContainer: {
    display: 'flex' as 'flex',
    height: 'calc(100vh - 64px)',
    flexDirection: 'column' as 'column',
    justifyContent: 'center' as 'center',
    alignItems: 'center' as 'center'
  },
  boxContent: {
    marginTop: '-64px',
    width: '50%',
    height: 'max-content' as 'max-content'
  },
  typography: {
    textAlign: 'center' as 'center'
  },
  linearProgressBar: {
    marginTop: `${theme.spacing(2)}px`
  },
});