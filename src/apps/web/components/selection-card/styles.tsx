import { Theme } from '@material-ui/core';

export default (theme: Theme) => ({
  boxContainer: {
    borderLeft: `5px solid ${theme.palette.primary.main}`,
    borderRadius: '5px',
    position: 'relative' as 'relative'
  },
  titleTypography: {
    display: 'inline' as 'inline'
  },
  editIconButton: {
    padding: '2px',
    borderRadius: '5px',
    top: '5px',
    right: '5px',
    position: 'absolute' as 'absolute'
  }
}); 