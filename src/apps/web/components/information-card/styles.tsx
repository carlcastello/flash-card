import { Theme } from "@material-ui/core";

export default (theme: Theme) => ({
  inlineTypography: {
    display: 'inline' as 'inline'
  },
  paperContainer: {
    borderLeft: `5px solid ${theme.palette.primary.main}`, 
    position: 'relative' as 'relative'
  },
  iconButton: {
    padding: '2px',
    borderRadius: '5px',
    marginLeft: '3px',
    fontSize: '1rem'
  },
  iconButtonContainer: {
    top: '5px',
    right: '5px',
    position: 'absolute' as 'absolute'
  }  
});