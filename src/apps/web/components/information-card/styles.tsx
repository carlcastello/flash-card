import { Theme } from "@material-ui/core";

export default (theme: Theme) => ({
  inlineTypography: {
    display: 'inline' as 'inline'
  },
  paperContainer: {
    borderLeft: `5px solid ${theme.palette.primary.main}`, 
    position: 'relative' as 'relative'
  },
  editIconButton: {
    padding: '2px',
    borderRadius: '5px',
    top: '5px',
    right: '5px',
    position: 'absolute' as 'absolute'
  }
  
});