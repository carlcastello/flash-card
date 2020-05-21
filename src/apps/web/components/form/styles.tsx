import { Theme } from "@material-ui/core";

export default (theme: Theme) => ({
  formControl: {
    marginBottom: `${theme.spacing(1.25)}px`
  },
  formInput: {
    fontSize: '1rem',
    '& .MuiInputBase-input': {
      padding: `${theme.spacing(1.5)}px`
    }
  },
  formLabel: {
    fontSize: '1rem',
    top: '-3px',
    '&.MuiInputLabel-shrink': {
      top: '0px'
    }
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