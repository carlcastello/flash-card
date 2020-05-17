import { Theme } from "@material-ui/core";

export default (theme: Theme) => ({
  formControl: {
    // width: '100%',
    // paddingBottom: `${theme.spacing(.75)}px`,
    marginBottom: `${theme.spacing(1.5)}px`
  },
  formInput: {
    fontSize: '1.25rem',
  },
  formLabel: {
    // fontWeight: theme.typography.h2.fontWeight,
    // fontFamily: theme.typography.h2.fontFamily,
    // color: theme.typography.h2.color,
    fontSize: '1.25rem',
    // '&.MuiInputLabel-shrink': {
    //   fontSize: '1.25rem'
    // },
    // '& + .MuiInput-formControl': {
    //   marginTop: '25px'
    // }
  },
  formHelperText: {
    // position: 'absolute' as 'absolute',
    // top: '100%'
  },
  formBottomContainer: {
    // display: 'flex',
    // alignItems: 'center',
    // flexDirection: 'row ' as 'row',
    // justifyContent: 'end',
  }
});