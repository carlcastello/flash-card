import { Theme } from "@material-ui/core";

export default (theme: Theme) => ({
  paper: {
    backgroundColor: '#d6d6d6',
    textAlign: 'center' as 'center',
  },
  boxButtonContainer: {
    position: 'absolute' as 'absolute',
    right: 0,
    bottom: 0,
  },
  boxQuestionaireContainer: {
    position: 'relative' as 'relative'
  },
  questionTypography: {
    maxWidth: '600px',
    margin: '0 auto'
  }
});