import { Theme } from '@material-ui/core';

export default (theme: Theme) => ({
  titleTypography: {
    display: 'inline' as 'inline'
  },
  iconButton: {
    padding: `${theme.spacing(1)}px`,
    marginLeft: `${theme.spacing(1)}px`,
    marginTop: `${theme.spacing(-1.5)}px`,
  },
});