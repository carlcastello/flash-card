import { Theme } from '@material-ui/core';

export default (theme: Theme) => ({
  closeButton: {
    position: 'absolute' as 'absolute',
    top: `${theme.spacing(.5)}px`,
    right: `${theme.spacing(.5)}px`,
  },
  modalContainer: {
    display: 'flex' as 'flex',
    justifyContent: 'center' as 'center',
    alignItems: 'center' as 'center'
  },
  modalPaperContainer: {
    maxWidth: `${theme.spacing(75)}px`
  }
});