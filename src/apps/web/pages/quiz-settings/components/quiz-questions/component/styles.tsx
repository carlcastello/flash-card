import { Theme } from '@material-ui/core';


export default (theme: Theme) => ({
  questionContainer: {
    borderRadius: '5px',
    border: '1px solid #c4c4c4'
  },
  paperContainer: {
    position: 'relative' as 'relative',
  },
  openFormButton: {
    position: 'absolute' as 'absolute',
    width: '100%',
    height: `${theme.spacing(5)}px`,
    top: 0,
    left: 0
  },
  closeFormButton: {
    position: 'absolute' as 'absolute',
    top: `${theme.spacing(.5)}px`,
    right: `${theme.spacing(.5)}px`,
  }
});