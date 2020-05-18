import { Theme } from "@material-ui/core";

export default (theme: Theme) => ({
  formControl: {
    marginBottom: `${theme.spacing(1.5)}px`
  },
  formInput: {
    fontSize: '1.25rem',
  },
  formLabel: {
    fontSize: '1.25rem',
  },
  formHelperText: {
    // position: 'absolute' as 'absolute',
    // top: '100%'
  },
  formBottomContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row ' as 'row',
    justifyContent: 'end',
  }
});