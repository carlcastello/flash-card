import { Theme } from '@material-ui/core';

export default (theme: Theme) => ({
  questionBoxContainer: {
    borderRadius: '5px',
    border: '1px solid #c4c4c4'
  },
  boxContainer: {
    position: 'relative' as 'relative',
  },
  gridContainer: {
    width: '100%'
  },
  fab: {
    position: 'absolute' as 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  }
});