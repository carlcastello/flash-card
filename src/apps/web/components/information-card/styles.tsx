import { Theme } from "@material-ui/core";

export default (theme: Theme) => ({
  inlineTypography: {
    display: 'inline' as 'inline'
  },
  titleContainer: {
    marginBottom: theme.spacing(1)
  }, 
  paperContainer: {
    borderLeft: `5px solid ${theme.palette.success.main}`, 
  }
});