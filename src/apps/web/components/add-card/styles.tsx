import { Theme } from '@material-ui/core';


export default (theme: Theme) => ({
  paperContainer: {
    height: '100%',
    borderLeft: `5px solid ${theme.palette.success.main}`, 
    '&:hover': {
      cursor: 'pointer' as 'pointer',
    }
  },
  boxContainer: {
    width: '100%',
    height: '100%',
    display: 'flex' as 'flex',
    flexDirection: 'column' as 'column',
    justifyContent: 'center' as 'center',
    alignItems: 'center' as 'center'
  }
});