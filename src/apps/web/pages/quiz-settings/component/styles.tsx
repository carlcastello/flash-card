import { Theme } from '@material-ui/core';

export default (theme: Theme) => ({
  questionBoxContainer: {
    borderRadius: '5px',
    border: '1px solid #c4c4c4'
  },
  gridContainer: {
    width: '100%'
  },
  createQuestionPaper: {
    position: 'relative' as 'relative',
  },
  openCreateQuestionButton: {
    position: 'absolute' as 'absolute',
    width: '100%',
    height: `${theme.spacing(5)}px`,
    top: 0,
    left: 0
  },
  closeCreateQuestionButton: {
    position: 'absolute' as 'absolute',
    top: `${theme.spacing(.5)}px`,
    right: `${theme.spacing(.5)}px`,
  }
});